import React from 'react'



import FlexContainerStyle from './style'

import Component from '../Component'



export default class FlexContainer extends Component {



    constructor(props) {
        super(props)
    }



    render() {
        return (
            <FlexContainerStyle
                width={ this.props.width }
                height={ this.props.height }
                direction={ this.props.direction }
                reverse={ this.props.reverse }
                bgColor={ this.props.bgColor }>
                
                { this.props.children }

            </FlexContainerStyle>
        )
    }
}