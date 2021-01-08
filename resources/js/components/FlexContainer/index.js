import React, { Component } from 'react'



import FlexContainerStyle from './style'

import utils from '../../utils'



export default class FlexContainer extends Component {



    constructor(props) {
        super(props)
    }



    renderChildrens() {
        const { children } = this.props

        return React.Children.map(children, child => React.cloneElement(child, {
            aligned: (this.props.align != null && this.props.align != undefined),
        }))
    }



    render() {

        return (
            <FlexContainerStyle
                width={ utils.component.dimensions(this.props).w }
                height={ utils.component.dimensions(this.props).h }
                direction={ utils.component.direction(this.props) }
                reverse={ this.props.reverse }
                justify={ utils.component.justify(this.props) }
                align={ utils.component.align(this.props.align) }
                background={ this.props.background }>

                { this.renderChildrens() }

            </FlexContainerStyle>
        )
    }
}
