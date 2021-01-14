import React, { Component } from 'react'



import ButtonStyle from './style'

import dimensions from './dimensions'

import styles from '../../styles'



export default class Button extends Component {



    constructor(props) {
        super(props)
    }



    getColor() {

        if (this.props.color) {

            return (this.props.color.indexOf('#') === 0)
                ? this.props.color
                : styles.color.get(this.props.color)
        }

        return styles.color.textDisabled
    }



    getForegroundColor() {

        if (this.props.color) {

            return (this.props.color.indexOf('#') === 0)
                ? this.props.color
                : styles.color.get(this.props.color)
        }

        return '#FFFFFF'
    }



    render() {

        const dim = dimensions(this.props.size)

        return (
            <ButtonStyle
                block={ this.props.block }
                outline={ this.props.outline }
                width={ this.props.width }
                height={ this.props.height }
                verticalPadding={ dim.verticalPadding }
                horizontalPadding={ dim.horizontalPadding }
                borderRadius={ dim.borderRadius }
                foreGround={ this.getForegroundColor() }
                fontSize={ dim.fontSize }
                color={ this.getColor() }>

                { this.props.children }

            </ButtonStyle>
        )
    }
}
