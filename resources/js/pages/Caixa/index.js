import React from 'react'
import { Inertia } from '@inertiajs/inertia'


import {
    Button,
    Container,
    List,
    Image,
    Input,
    Segment,
} from 'semantic-ui-react'


import 'semantic-ui-css/semantic.min.css'
import styles from '../../styles'
import config from '../../config'
import utils  from '../../utils'


import User from '../../models/User'


import Grid from '../../components/Grid'
import Columns from '../../components/Grid/Column'

import UL from '../../components/UL'
import LI from '../../components/LI'
import Column from '../../components/Grid/Column'



export default class Caixa extends React.Component {


    constructor(props) {
        super(props)

        this.state = {

            auth: {
                user: { },
                csrf_token: ''
            },

            clientes: []
        }

        this.doLogout = this.doLogout.bind(this)
        this.onSearhChange = this.onSearhChange.bind(this)
    }



    UNSAFE_componentWillMount () {
        fetch(`${ config.ixsHost }/auth`)
            .then(response => response.json())
            .then(data => this.setState({
                auth: {
                    user: new User({ ...data.user }),
                    csrf_token: data.csrf_token
                }
            }))
    }



    componentDidMount () {
        document.querySelector('meta[name="csrf-token"]').setAttribute('content', this.state.auth.csrf_token)
    }



    doLogout (e) {
        e.preventDefault()

        Inertia.post(
            '/logout',
            { },
            { headers: { 'X-CSRF-TOKEN': this.state.auth.csrf_token } }
        )
    }



    onSearhChange (e) {
        e.preventDefault()

        let query = e.target.value

        let url = utils.url(
            'clientes/listar/qvalue/qtype', {
                qvalue: query,
                qtype: utils.isNumber(query) ? 'cnpj_cpf' : 'razao'
            }
        )

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



    createClientElement (cliente) {

        const selectClientItem = e => {
            e.preventDefault()

            console.log(cliente)
        }

        return (
            <LI
                key={ cliente.id }
                onClick={ selectClientItem }
                hoverColor='#EEEEEE'>

                <Grid columns={3}>
                    <Column width={4}>{ cliente.razao }</Column>
                    <Column width={2}>{ cliente.endereco }</Column>
                    <Column width={6}>{ cliente.complemento }</Column>
                </Grid>

            </LI>
        )
    }



    showMatchClients (clientes) {
        if (clientes.length > 0) {
            return (
                <Segment clearing>
                    <UL>{ clientes.map(this.createClientElement) }</UL>
                </Segment>
            )
        }
    }



    render () {
        return (
            <div style={ styles.vh100 }>

                <Segment style={ styles.mhXG } clearing basic>

                    <Segment padded={true} floated='left' compact basic>
                        <Button icon='sidebar' />
                    </Segment>

                    <Segment as={Segment.Group} textAlign='right' floated='right' size='small' horizontal basic>
                        <Segment basic>
                            <List.Item floated='right'><strong>{ this.state.auth.user.name }</strong></List.Item>
                            <List.Item floated='right'>{ User.getPosition(this.state.auth.user.access) }</List.Item>
                        </Segment>
                        <Segment basic>
                            <Image src={ utils.asset.avatar(this.state.auth.user.code) } size='mini' verticalAlign='middle' circular/>
                        </Segment>
                    </Segment>

                </Segment>

                <Container>

                    <Segment style={{ marginTop: '14%', paddingLeft: 150, paddingRight: 150 }} clearing basic>
                        <Segment clearing>
                            <Input
                                type='search'
                                icon='search'
                                size='huge'
                                iconPosition='left'
                                placeholder='Nome ou CPF do cliente...'
                                floated='left'
                                onChange={ this.onSearhChange }
                                transparent
                                fluid />
                        </Segment>
                        { this.showMatchClients(this.state.clientes) }
                    </Segment>

                </Container>

            </div>
        )
    }
}

/**
<Form onSubmit={ this.doLogout }>
    <Button type='subbmit' negative fluid>Sair</Button>
</Form>

<Image src={ utils.asset.avatar('2dPsQxPM.png') } size='mini' verticalAlign='middle'/>

<Segment.Group clearing basic>
    <Segment padded='false' clearing>
        <Input icon='search' type='search' iconPosition='left' size='huge' placeholder='Nome ou CPF do cliente...' transparent fluid/>
    </Segment>
    <Segment></Segment>
</Segment.Group>

*/
