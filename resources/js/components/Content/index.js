import React, { Component } from 'react'



import ContentStyle from './style'

import utils from '../../utils'
import styles from '../../styles'



export default class Content extends Component {



    constructor(props) {
        super(props)
    }



    renderChildrens() {
        const { children } = this.props

        return React.Children.map(children, child => React.cloneElement(child, {
            textAlign: this.props.textAlign ? this.props.textAlign : 'left'
        }))
    }



    getBackground() {

        if (this.props.background) {

            return (this.props.background.indexOf('#') === 0)
                ? this.props.background
                : styles.color.get(this.props.background)
        }

        return `none`
    }



    render() {

        const dimension = utils.component.dimensions(this.props)

        return (
            <ContentStyle
                responsive={ this.props.responsive }
                aligned={ this.props.aligned }
                width={ dimension.w }
                height={ dimension.h }
                grow={ this.props.grow }
                shrink={ this.props.shrink }
                basis={ this.props.basis }
                background={ this.getBackground() }
                textAlign={ this.props.textAlign }>

                { this.renderChildrens() }

            </ContentStyle>
        )
    }
}
