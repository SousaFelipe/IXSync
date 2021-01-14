import React, { Component } from 'react'



import dimensions from './dimensions'
import icon from '../../../styles/icon'



export default class Svg extends Component {



    constructor(props) {
        super(props)
    }



    render() {

        const dim = dimensions(this.props.size)

        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width={ dim.size }
                height={ dim.size }
                viewBox={ `0 0 ${ dim.size } ${ dim.size }` }>
                <path fill={ this.props.color } d={ icon(this.props.name) }/>
            </svg>
        )
    }
}
