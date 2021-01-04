import React, { Component } from 'react'



import ULstyle from './style'



export default class UL extends Component {



    constructor(props) {
        super(props)
    }



    render() {
        return (
            <ULstyle>
                { this.props.children }
            </ULstyle>
        )
    }
}
