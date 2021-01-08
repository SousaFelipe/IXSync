import React from 'react'



import ComponentStyle from './style'

import utils from '../../utils'



export default class Component extends React.Component {



    constructor(props) {
        super(props)

        this.state = {
            dimensions: {
                w: this.props.width ? this.props.width : 'auto',
                h: this.props.height ? this.props.height : 'auto'
            }
        }
    }



    render() {

        return (
            <ComponentStyle
                width={ utils.dimensions((this.props.dimensions | this.state.dimensions)).w }
                height={ utils.dimensions((this.props.dimensions | this.state.dimensions)).h }
                bgColor={ this.props.bgColor }>

                { this.props.children }

            </ComponentStyle>
        )
    }
}
