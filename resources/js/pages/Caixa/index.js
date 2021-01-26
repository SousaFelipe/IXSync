import React, { Component } from 'react'
import { Inertia } from '@inertiajs/inertia'


import config from '../../config'
import utils  from '../../utils'


import User from '../../models/User'


import Button from '../../components/Button'
import Column from '../../components/Grid/Column'
import Container from '../../components/Container'
import Content from '../../components/Content'
import Grid from '../../components/Grid'
import Icon from '../../components/Icon'
import Image from '../../components/Image'
import LI from '../../components/LI'
import Modal from '../../components/Modal'
import P from '../../components/P'
import Search from '../../components/Search'
import UL from '../../components/UL'



export default class Caixa extends Component {



    constructor(props) {
        super(props)

        this.state = {

            hideModal: true,

            auth: {
                user: { },
                csrf_token: ''
            },

            clientes: [],
        }

        this.doLogout = this.doLogout.bind(this)
        this.onSearhChange = this.onSearhChange.bind(this)
    }



    UNSAFE_componentWillMount() {
        fetch(`${ config.ixsHost }/auth`)
            .then(response => response.json())
            .then(data => this.setState({
                auth: {
                    user: new User({ ...data.user }),
                    csrf_token: data.csrf_token
                }
            }))
    }



    componentDidMount() {
        document.querySelector('meta[name="csrf-token"]').setAttribute('content', this.state.auth.csrf_token)
    }



    doLogout(e) {
        e.preventDefault()

        Inertia.post(
            '/logout',
            { },
            { headers: { 'X-CSRF-TOKEN': this.state.auth.csrf_token } }
        )
    }



    onSearhChange(e) {
        e.preventDefault()

        let query = e.target.value

        let url = utils.url('clientes/listar/qvalue/qtype', {
            qvalue: query,
            qtype: utils.isNumber(query) ? 'cnpj_cpf' : 'razao'
        })

        if (query.length >= 3) {
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({
                    clientes: data.clientes
                }))
        }
        else {
            this.setState({ clientes: [] })
        }
    }



    createClientElement(cliente) {

        const selectClientItem = e => {
            e.preventDefault()

            console.log(cliente)
        }

        return (
            <LI
                key={ cliente.id }
                width='100%'
                hoverColor='background'
                onClick={ selectClientItem }>
                <Grid>
                    <Column padding='left'> <Icon name='user' color={ cliente.ativo == 'S' ? 'success' : 'textDisabled' }/> </Column>
                    <Column width={4} overflow={true}> <P fontSize='0.8rem'>{ cliente.razao.toUpperCase() }</P> </Column>
                    <Column width={2} overflow={true}> <P fontSize='0.8rem'>{ cliente.endereco.toUpperCase() }</P> </Column>
                    <Column padding='right' width={6} overflow={true}> <P fontSize='0.8rem'>{ cliente.complemento.toUpperCase() }</P> </Column>
                </Grid>
            </LI>
        )
    }



    showMatchClients(clientes) {
        if (clientes.length > 0) {
            return <UL>{ clientes.map(this.createClientElement) }</UL>
        }
    }



    render() {
        return (
            <Container
                dimensions='full'
                direction='column'
                align='strech'
                background='#FFF'>


                <Modal hidden={ this.state.hideModal }></Modal>


                <Content height='100px'>
                    <Container height='100%' align='center' pandded='large'>

                        <Content grow={1}>
                            <Button flat>
                                <Icon name='menu' size='small'/>
                            </Button>
                        </Content>

                        <Content grow={1}>
                            <Container height='100%' justify='end' align='center'>
                                <Content textAlign='right' away='horizontally'>
                                    <P fontWeight='700'>{ this.state.auth.user.name }</P>
                                    <P>{ User.getPosition(this.state.auth.user.access) }</P>
                                </Content>
                                <Content>
                                    <Image src={ this.state.auth.user.code } size={48} type='avatar' rounded/>
                                </Content>
                            </Container>
                        </Content>

                    </Container>
                </Content>

                <Content height='10%'/>

                <Content grow={1}>
                    <Container height='100%' direction='column' align='center'>

                        <Content>
                            <Container width='100%' align='center'>
                                <P font='MPSRounded' fontWeight='900' fontSize='5rem' primary>IX</P>
                                <P font='MPSRounded' fontWeight='500' fontSize='5rem'>Sync</P>
                            </Container>
                        </Content>

                        <Content align='middle' textAlign='center'>
                            <Search
                                size='large'
                                placeholder='CPF ou nome do cliente...'
                                focus='fill|shadow|border'
                                padding='horizontally'
                                onChange={ this.onSearhChange }
                                rounded={ 28 }
                                bordered={true}>

                                { this.showMatchClients(this.state.clientes) }

                            </Search>
                        </Content>

                    </Container>
                </Content>

                <Content height='50px' background='background' bordered='top'>

                </Content>

            </Container>
        )
    }
}

/*

<Form onSubmit={ this.doLogout }>
    <Button type='subbmit' negative fluid>Sair</Button>
</Form>

*/
