
import React from 'react'
import { Inertia } from '@inertiajs/inertia'

import { Button, Card, Form, Grid, Header } from 'semantic-ui-react'


import 'semantic-ui-css/semantic.min.css'
import styles from '../../styles'
import config from '../../config'
import User from '../../models/User'

import MyGrid from '../../components/Grid'



export default class Login extends React.Component {



    constructor (props) {
        super (props)

        this.state = {

            loading: false,
            inputEmail: '',
            inputPassword: '',

            auth: {
                user: { },
                csrf_token: ''
            },
        }

        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)

        this.doLogin = this.doLogin.bind(this)
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



    onEmailChange (e) {
        this.setState({
            inputEmail: e.target.value,
        })
    }



    onPasswordChange (e) {
        this.setState({
            inputPassword: e.target.value,
        })
    }



    doLogin (e) {
        e.preventDefault()

        this.setState({
            loading: !this.state.loading
        })

        const email = this.state.inputEmail
        const password = this.state.inputPassword

        Inertia.post(
            '/authenticate',
            { email: email, password: password },
            { headers: { 'X-CSRF-TOKEN': this.state.auth.csrf_token } }
        )
    }


    render () {
        return (
            <Grid style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={ styles.contentM }>

                    <Header as='h1' color='teal' textAlign='center'>
                        IXSync
                    </Header>

                    <Card size="large" style={ styles.wM } centered>
                        <Card.Content style={ styles.cardContent }>
                            <Form onSubmit={ this.doLogin }>

                                <Form.Input
                                    value={ this.state.inputEmail }
                                    onChange={ this.onEmailChange }
                                    style={ styles.mvM }
                                    size='large'
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail' fluid/>

                                <Form.Input
                                    value={ this.state.inputPassword }
                                    onChange={ this.onPasswordChange }
                                    style={ styles.mvM }
                                    size='large'
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Senha'
                                    type='password' fluid/>

                                <Button type='subbmit' color='teal' style={ styles.mvM } size='large' loading={ this.state.loading } fluid>
                                    Login
                                </Button>

                            </Form>
                        </Card.Content>
                    </Card>

                </Grid.Column>
            </Grid>
        )
    }
}
