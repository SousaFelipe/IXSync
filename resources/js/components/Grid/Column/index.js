import React, { Component } from 'react'



import Colstyle from './style'



export default class Column extends Component {



    constructor(props) {
        super(props)
    }



    render() {
        return (
            <Colstyle
                width={ this.props.width }>
                { this.props.children }
            </Colstyle>
        )
    }
}