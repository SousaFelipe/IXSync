import React, { Component } from 'react'


import Svg from './Svg'



export default class Icon extends Component {



    constructor(props) {
        super(props)
    }



    render() {

        return (
            <Svg src={ this.props.name }/>
        )
    }
}
