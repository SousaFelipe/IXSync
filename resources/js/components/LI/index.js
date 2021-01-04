import React, { Component } from 'react'



import LIstyle from './style'



export default class LI extends Component {



    constructor(props) {
        super(props)
    }



    render() {
        return (
            <LIstyle
                onClick={ this.props.onClick }
                hoverColor={ this.props.hoverColor }>

                { this.props.children }

            </LIstyle>
        )
    }
}
