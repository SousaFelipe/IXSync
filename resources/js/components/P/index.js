import React, { Component } from 'react'



import PStyle from './style'


import styles from '../../styles'
import fonts from '../../styles/fonts'




export default class P extends Component {



    constructor(props) {
        super(props)
    }



    getColor() {

        if (this.props.primary)
            return styles.color.primary(1)

        return (this.props.color || styles.color.textPrimary())
    }



    render() {
        return (
            <PStyle
                color={ this.getColor() }
                font={ (this.props.font != undefined) ? fonts(this.props.font) : false }
                fontSize={ this.props.fontSize || `1rem` }
                fontWeight={ this.props.fontWeight || 400 }
                textAlign={ this.props.textAlign }>

                { this.props.children }

            </PStyle>
        )
    }
}
