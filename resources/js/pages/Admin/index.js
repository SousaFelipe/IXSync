
import React from 'react'
import { Inertia } from '@inertiajs/inertia'



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
            <></>
        )
    }
}

