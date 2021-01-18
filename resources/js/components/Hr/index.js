import React, { Component } from 'react'



import HrStyle from './style'



export default class Hr extends Component {



    constructor(props) {
        super(props)
    }



    render() {
        return (
            <HrStyle>
                { this.props.children }
            </HrStyle>
        )
    }
}
