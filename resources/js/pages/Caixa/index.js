
import React from 'react'
import { Inertia } from '@inertiajs/inertia'

import { Button, Form, Segment } from 'semantic-ui-react'


import 'semantic-ui-css/semantic.min.css'
import styles from '../../styles'
import config from '../../config'



export default class Caixa extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            csrf_token: ''
        }

        this.doLogout = this.doLogout.bind(this)
    }



    componentDidMount () {

        fetch(`${ config.ixsHost }/csrf`)
            .then(response => response.json())
            .then(data => {

                document.querySelector('meta[name="csrf-token"]').setAttribute('content', data.csrf_token)

                this.setState({
                    csrf_token: data.csrf_token
                })
            })
    }



    doLogout (e) {
        e.preventDefault()

        Inertia.post(
            '/logout',
            { },
            { headers: { 'X-CSRF-TOKEN': this.state.csrf_token } }
        )
    }



    render() {
        return (
            <Segment textAlign='justified' style={{ minHeight: '100vh', padding: '0em 1em' }} basic secondary='true' vertical>
                <Segment attached='top' basic secondary >

                </Segment>
                <Form onSubmit={ this.doLogout }>
                    <Button type='subbmit' negative fluid>Sair</Button>
                </Form>
            </Segment>
        )
    }
}
