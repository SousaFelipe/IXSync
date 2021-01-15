import React, { Component } from 'react'



import ButtonStyle from './style'

import dimensions from './dimensions'

import styles from '../../styles'



export default class Button extends Component {



    constructor(props) {
        super(props)
    }



    getColor(alpha = 1) {

        if (this.props.color) {

            return (this.props.color.indexOf('#') === 0)
                ? this.props.color
                : styles.color.get(this.props.color, false, alpha)
        }

        return styles.color.border(alpha)
    }


    getForegroundColor() {

        if (this.props.color) {

            return (this.props.color.indexOf('#') === 0)
                ? this.props.color
                : styles.color.get(this.props.color, true, 1)
        }

        return styles.color.backgroundInverted(1)
    }



    render() {

        const dim = dimensions(this.props.size)

        return (
            <ButtonStyle
                block={ this.props.block }
                outline={ (this.props.outline != undefined || this.props.outline == true) }
                flat={ (this.props.flat != undefined || this.props.flat == true) }
                disabled={ (this.props.disabled != undefined || this.props.disabled == true) }
                width={ this.props.width }
                height={ this.props.height }
                verticalPadding={ dim.verticalPadding }
                horizontalPadding={ dim.horizontalPadding }
                borderRadius={ dim.borderRadius }
                fontSize={ dim.fontSize }
                foreGround={ this.getForegroundColor() }
                outlineColor={ this.getColor(0.4) }
                color={ this.getColor() }>

                { this.props.children }

            </ButtonStyle>
        )
    }
}
