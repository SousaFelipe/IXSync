import React, { Component } from 'react'



import ColumnStyle from './style'



export default class Column extends Component {



    constructor(props) {
        super(props)
    }



    render() {
        return (
            <ColumnStyle
                padding={ this.props.padding }
                padded={ (this.props.padding != undefined) || this.props.padded }
                width={ this.props.width }
                height={ this.props.height }
                overflow={ `${ this.props.overflow }` }
                fontSize={ this.props.fontSize }>

                { this.props.children }

            </ColumnStyle>
        )
    }
}
