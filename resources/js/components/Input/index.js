import React, { Component } from 'react'



import InputStyle from './style'
import dimensions from './dimensions'

import styles from '../../styles'



export default class Input extends Component {



    constructor(props) {
        super(props)
    }



    getWidth() {
        if (this.props.block) return `100%`
        if (this.props.width) return this.props.width

        if (this.props.size) {
            switch(this.props.size) {
                case 'small':
                    return dimensions.small.width
                case 'medium':
                    return dimensions.medium.width
                case 'large':
                    return dimensions.large.width
            }
        }

        return dimensions.medium.width
    }



    getHeight() {

        if (this.props.size) {
            switch(this.props.size) {
                case 'small':
                    return dimensions.small.height
                case 'medium':
                    return dimensions.medium.height
                case 'large':
                    return dimensions.large.height
            }
        }

        return dimensions.medium.height
    }



    getBorderRadius() {
        if (this.props.size) {
            switch(this.props.size) {
                case 'small':
                    return dimensions.small.borderRadius
                case 'medium':
                    return dimensions.medium.borderRadius
                case 'large':
                    return dimensions.large.borderRadius
            }
        }

        return dimensions.medium.borderRadius
    }



    getHPadding() {
        if (this.props.size) {
            switch(this.props.size) {
                case 'small':
                    return dimensions.small.paddingH
                case 'medium':
                    return dimensions.medium.paddingH
                case 'large':
                    return dimensions.large.paddingH
            }
        }

        return dimensions.medium.paddingH
    }



    getVPadding() {
        if (this.props.size) {
            switch(this.props.size) {
                case 'small':
                    return dimensions.small.paddingV
                case 'medium':
                    return dimensions.medium.paddingV
                case 'large':
                    return dimensions.large.paddingV
            }
        }

        return dimensions.medium.paddingV
    }



    render() {

        console.log(this.getWidth())
        console.log(this.getHeight())

        return (
            <InputStyle

                type={ this.props.type || `text` }
                width={ this.getWidth() }
                height={ this.getHeight() }
                borderRadius={ this.getBorderRadius() }

                paddingH={ this.getHPadding() }
                paddingV={ this.getVPadding() }

                placeholder={ this.props.placeholder }

                background={ styles.color.background } />
        )
    }
}
