import React, { Component } from 'react'



import styles from '../../../styles'
import icon from '../../../styles/icon'



export default class Svg extends Component {



    constructor(props) {
        super(props)
    }



    render() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="24"
                height="24"
                viewBox="0 0 24 24">

                <path
                    stroke="none"
                    fill={ styles.color.textDisabled }
                    d={ icon(this.props.src) }/>

            </svg>
        )
    }
}
