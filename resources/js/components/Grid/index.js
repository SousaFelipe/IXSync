import React, { Component } from 'react'
import utils from '../../utils'



import Gridstyle from './style'



export default class Grid extends Component {



    constructor (props) {
        super (props)
    }



    getGridRows () {
        let rows = this.props.rows
        rows = (rows == undefined) ? 1 : rows
        return this.getGridCount(rows)
    }



    getGridCount (count) {
        let rule = ''

        for (let i = 0; i < count; i++)
            rule = rule.concat((i < (count - 1)) ? 'auto ' : 'auto')

        return rule
    }



    getGridContentWidth (width) {

        if (!width || width == undefined || width == null)
            return 'auto'

        if (utils.isNumber(width))
            return `${ width }fr`

        return `${ width }-content`
    }



    getGridProperties () {

        let count = React.Children.count(this.props.children)
        let props = []

        if (count > 0) {
            React.Children.forEach(this.props.children, children => props.push(this.getGridContentWidth(children.props.width)))
            return props.join(' ')
        }

        return 'auto'
    }



    renderChildrens() {
        const { children } = this.props

        return React.Children.map(children, child => React.cloneElement(child, {
            fontSize: this.props.fontSize
        }))
    }



    render () {

        return (
            <Gridstyle
                columns={ this.getGridProperties() }
                rows={ this.getGridRows() }
                columnGap={ this.props.columnGap }
                rowGap={ this.props.rowGap }
                fontSize={ this.props.fontSize }>

                { this.props.children }

            </Gridstyle>
        )
    }
}
