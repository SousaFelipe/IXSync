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



    render() {

        const dimension = utils.component.dimensions(this.props)

        return (
            <ContentStyle
                key={ this.props.key }
                responsive={ this.props.responsive }
                aligned={ this.props.aligned }
                bordered={ this.props.bordered }
                away={ this.props.away }
                width={ dimension.w }
                height={ dimension.h }
                grow={ this.props.grow }
                shrink={ this.props.shrink }
                basis={ this.props.basis }
                background={ styles.color.filter(this.props.background, 1, 'none') }
                hoverColor={ this.props.hoverColor }
                textAlign={ this.props.textAlign }
                fontSize={ this.props.fontSize }

                onClick={ this.props.onClick }>

                { this.renderChildrens() }

            </ContentStyle>
        )
    }
}
