import React from 'react'



import FlexContentStyle from './style'

import Component from '../Component'



export default class FlexContent extends Component {



    constructor(props) {
        super(props)
    }



    render() {
        return (
            <FlexContentStyle >

                { this.props.children }

            </FlexContentStyle>
        )
    }
}
