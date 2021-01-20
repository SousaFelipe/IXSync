import React, { Component } from 'react'



import ColumnStyle from './style'



export default class Column extends Component {



    constructor(props) {
        super(props)
    }



    render() {
        return (
            <ColumnStyle
                width={ this.props.width }
                height={ this.props.height }
                overflow={ `${ this.props.overflow }` }>

                { this.props.children }

            </ColumnStyle>
        )
    }
}
