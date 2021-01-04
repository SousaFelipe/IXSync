import React, { Component } from 'react'



import Gridstyle from './style'



export default class Grid extends Component {



    constructor(props) {
        super(props)

        this.state = {

            columns: [
                '0fr', '0fr', '0fr', '0fr', '0fr', '0fr',
                '0fr', '0fr', '0fr', '0fr', '0fr', '0fr'
            ],

            rows: [ '0fr' ]
        }
    }



    getGridColumns () {
        let columns = this.props.columns
        columns = (columns == undefined) ? 12 : columns
        return this.getGridCount(columns)
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



    getGridProperties() {

        let count = React.Children.count(this.props.children)
        let props = []

        if (count > 0) {
            React.Children.forEach(this.props.children, children => {
                props.push(
                    `${ children.props.width ? children.props.width : `1` }fr`
                )
            })
        }

        console.log(props)
    }



    render() {

        this.getGridProperties()

        return (
            <Gridstyle
                columns={ this.getGridColumns() }
                rows={ this.getGridRows() }
                columnGap={ this.props.columnGap }
                rowGap={ this.props.rowGap }>

                { this.props.children }

            </Gridstyle>
        )
    }
}
