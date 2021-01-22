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
            'thin':     () => `8px`,
            'small':    () => `16px`,
            'medium':   () => `20px`,
            'large':    () => `30px`,
            'xlarge':   () => `40px`,
            'default':  () => '0'
        }

        return (padding[pandded] || padding['default'])()
    }



    renderChildrens() {
        return React.Children.map(this.props.children, child => React.cloneElement(child, {
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
                bordered={ this.props.bordered }
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
