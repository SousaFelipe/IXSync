import React, { Component } from 'react'



import InputStyle from './style'
import dimensions from './dimensions'

import styles from '../../styles'



export default class Input extends Component {



    constructor(props) {
        super(props)
    }



    getWidth() {

        if (this.props.block)
            return `100%`

        if (this.props.width)
            return this.props.width

        return dimensions(this.props.size).width
    }



    render() {

        const dimension = dimensions(this.props.size)

        return (
            <InputStyle
                type={ this.props.type || `text` }
                placeholder={ this.props.placeholder }
                width={ this.getWidth() }
                height={ dimension.height }
                padding={ this.props.padding || '0' }
                borderRadius={ dimension.borderRadius }
                background={ styles.color.filter(this.props.background, 1, 'none') }
                fontSize={ dimension.fontSize }
                focus={ this.props.focus }
                onChange={ this.props.onChange } />
        )
    }
}
