import React, { Component } from 'react'



import ImageStyle from './style'

import utils from '../../utils'



export default class Image extends Component {



    constructor(props) {
        super(props)
    }



    getScr() {

        const types = {
            'avatar':   () => utils.asset.avatar(this.props.src),
            'image':    () => utils.asset.image(this.props.src)
        }

        return (types[this.props.type] || types['image'])()
    }



    render() {

        return (
            <ImageStyle
                src={ this.getScr() }
                rounded={ (this.props.rounded != undefined || this.props.rounded == true) }
                size={ this.props.size }
                width={ this.props.width }
                height={ this.props.height }/>
        )
    }
}
