import React, { Component } from 'react'



export default class Modal extends Component {



    constructor(props) {
        super(props)
    }



    render() {
        if (this.props.show) {
            return null
        }

        return <h1>MODAL</h1>
    }
}
