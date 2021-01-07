import React, { Component } from 'react'



import FlexContentStyle from './style'



export default class FlexContent extends Component {



    constructor(props) {
        super(props)
    }



    render() {
        return (
            <FlexContentStyle
                direction={ this.props.direction }>

                { this.props.children }

            </FlexContentStyle>
        )
    }
}
