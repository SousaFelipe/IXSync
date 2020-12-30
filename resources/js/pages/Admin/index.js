
import React from 'react'
import { Inertia } from '@inertiajs/inertia'

import { Button, Form, Grid } from 'semantic-ui-react'


import 'semantic-ui-css/semantic.min.css'


export default class Admin extends React.Component {


    constructor(props) {
        super(props)

        this.doLogout = this.doLogout.bind(this)
    }



    doLogout (e) {
        e.preventDefault()

        const csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

        Inertia.post(
            '/logout',
            { },
            { headers: { 'X-CSRF-TOKEN': csrf_token } }
        )
    }



    render() {
        return (
            <Grid columns={ 3 }>
                <Grid.Row>
                    <Grid.Column> </Grid.Column>
                    <Grid.Column>
                        <Form onSubmit={ this.doLogout }>
                            <Button type='subbmit' negative fluid>Sair</Button>
                        </Form>
                    </Grid.Column>
                    <Grid.Column> </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

