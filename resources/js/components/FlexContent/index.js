import React, { Component } from 'react'



import FlexContentStyle from './style'

import utils from '../../utils'



export default class FlexContent extends Component {



    constructor(props) {
        super(props)
    }



    render() {

        return (
            <FlexContentStyle
                width={ utils.component.dimensions(this.props).w }
                height={ utils.component.dimensions(this.props).h }
                aligned={ this.props.aligned }
                grow={ this.props.grow }
                shrink={ this.props.shrink }
                basis={ this.props.basis }
                background={ this.props.background }>

                { this.props.children }

            </FlexContentStyle>
        )
    }
}
