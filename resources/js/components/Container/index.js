import React, { Component } from 'react'



import ContainerStyle from './style'

import utils from '../../utils'
import styles from '../../styles'



export default class Container extends Component {



    constructor(props) {
        super(props)
    }



    getFluidPandding(pandded) {

        const padding = {
            'thin':     () => `16px`,
            'small':    () => `20px`,
            'medium':   () => `30px`,
            'large':    () => `40px`,
            'xlarge':   () => `50px`,
            'default':  () => '0'
        }

        return (padding[pandded] || padding['default'])()
    }



    renderChildrens() {
        const { children } = this.props

        return React.Children.map(children, child => React.cloneElement(child, {
            aligned: (this.props.align != null && this.props.align != undefined),
        }))
    }



    render() {
        return (
            <ContainerStyle
                width={ utils.component.dimensions(this.props).w }
                height={ utils.component.dimensions(this.props).h }
                pandded={ this.getFluidPandding(this.props.pandded) }
                rounded={ this.props.rounded }
                focus={ this.props.focus }
                focusWithin={ this.props.focusWithin }
                direction={ utils.component.direction(this.props) }
                reverse={ this.props.reverse }
                justify={ utils.component.justify(this.props) }
                align={ utils.component.align(this.props.align) }
                background={ styles.color.filter(this.props.background, 1, 'none') }>

                { this.renderChildrens() }

            </ContainerStyle>
        )
    }
}
