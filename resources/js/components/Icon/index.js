import React, { Component } from 'react'



import IconStyle from './style'

import Svg from './Svg'
import styles from '../../styles'
import dimensions from './Svg/dimensions'



export default class Icon extends Component {



    constructor(props) {
        super(props)

        this.state = {
            dimensions: dimensions(this.props.size)
        }
    }



    getSize() {
        const dim = this.state.dimensions
        return (dim.size + (dim.padding * 2))
    }


    render() {

        return (
            <IconStyle width={ this.getSize() } height={ this.getSize() } padding={ this.state.dimensions.padding } >
                <Svg name={ this.props.name } size={ this.props.size } color={ styles.color.filter(this.props.color, 1, styles.color.textDisabled()) } />
            </IconStyle>
        )
    }
}
