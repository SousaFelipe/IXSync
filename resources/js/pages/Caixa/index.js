import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'


import {
    Button,
    Container,
    Image,
    Input,
    List,
    Segment,
} from 'semantic-ui-react'


import 'semantic-ui-css/semantic.min.css'
import styles from '../../styles'
import config from '../../config'
import utils  from '../../utils'


import User from '../../models/User'



function ListItemHook (elements) {


    const [count, setCount] = useState(0)


    return (

        <div>
            {
                elements.forEach(el => {
                    React.createElement('p', { key: index }, `Elemento ${ el }`)
                })
            }
            <button onClick={() => setCount(count + 1)}> Clique aqui </button>
        </div>
    )
}



export default class Caixa extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            auth: {
                user: { },
                csrf_token: ''
            }
        }

        this.doLogout = this.doLogout.bind(this)
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



    render () {
        return (
            <div style={ styles.vh100 }>

                <Segment style={ styles.mhXG } clearing basic>

                    <Segment padded={true} floated='left' compact basic>
                        <Button icon='sidebar' />
                    </Segment>

                    <Segment as={Segment.Group} textAlign='right' floated='right' size='small' basic horizontal>
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

                    <Segment style={{ marginTop: 200, paddingLeft: 200, paddingRight: 200 }} clearing basic>
                        <Segment clearing>
                            <Input type='search' icon='search' iconPosition='left' size='huge' placeholder='Nome ou CPF do cliente...' floated='left' transparent fluid />
                        </Segment>
                        <Segment>
                            <ListItemHook elements={['Element 1', 'Element 2', 'Element 3']} />
                        </Segment>
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
