import React, { Component } from 'react'
import styles from '../../styles'



import LIstyle from './style'



export default class LI extends Component {



    constructor(props) {
        super(props)
    }



    renderChildrens() {
        const { children } = this.props

        return React.Children.map(children, child => React.cloneElement(child, {
            fontSize: this.props.fontSize
        }))
    }



    render() {
        return (
            <LIstyle
                onClick={ this.props.onClick }
                hoverColor={ styles.color.filter(this.props.hoverColor, 1, 'none') }
                fontSize={ this.props.fontSize }>

                { this.props.children }

            </LIstyle>
        )
    }
}
