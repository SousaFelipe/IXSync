import React, { Component } from 'react'



import FlexContainerStyle from './style'



export default class FlexContainer extends Component {



    constructor(props) {
        super(props)
    }



    render() {
        return (
            <FlexContainerStyle
                direction={ this.props.direction }>
                { this.props.children }
            </FlexContainerStyle>
        )
    }
}