import React, { Component } from 'react'



import ContainerStyle from './style'

import utils from '../../utils'



export default class Container extends Component {



    constructor(props) {
        super(props)
    }



    renderChildrens() {
        const { children } = this.props

        return React.Children.map(children, child => React.cloneElement(child, {
            aligned: (this.props.align != null && this.props.align != undefined),
        }))
    }



    getFluidPandding(pandded) {

        const padding = {
            'small':  () => `20px`,
            'medium': () => `30px`,
            'large':  () => `40px`,
            'xlarge': () => `50px`,
            'default':() => '0'
        }

        return (padding[pandded] || padding['default'])()
    }



    render() {

        return (
            <ContainerStyle
                width={ utils.component.dimensions(this.props).w }
                height={ utils.component.dimensions(this.props).h }
                pandded={ this.getFluidPandding(this.props.pandded) }
                direction={ utils.component.direction(this.props) }
                reverse={ this.props.reverse }
                justify={ utils.component.justify(this.props) }
                align={ utils.component.align(this.props.align) }
                background={ this.props.background }>

                { this.renderChildrens() }

            </ContainerStyle>
        )
    }
}
