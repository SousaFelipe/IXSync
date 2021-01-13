import React, { Component } from 'react'


import styles from '../../styles'



import PStyle from './style'



export default class P extends Component {



    constructor(props) {
        super(props)
    }



    getColor() {

        if (this.props.primary)
            return styles.color.primary

        return (this.props.color || styles.color.textPrimary)
    }



    render() {
        return (
            <PStyle
                color={ this.getColor() }
                fontSize={ this.props.fontSize || `1rem` }
                fontWeight={ this.props.fontWeight || 600 } >

                { this.props.children }

            </PStyle>
        )
    }
}
