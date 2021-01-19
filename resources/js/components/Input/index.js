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
                paddingH={ dimension.padding.horizontal }
                paddingV={ dimension.padding.vertical }
                borderRadius={ dimension.borderRadius }
                background={ (this.props.background == 'none') ? 'none' : styles.color.background() }
                fontSize={ dimension.fontSize }
                focus={ this.props.focus }

                onFocus={ this.props.onFocus } />
        )
    }
}
