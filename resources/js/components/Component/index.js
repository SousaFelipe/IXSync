import React from 'react'



import ComponentStyle from './style'



export default class Component extends React.Component {



    constructor(props) {
        super(props)
    }



    getDimensions() {
        
        const dimensions = this.props.dimensionsazsss
        
        if (dimensions != null && dimensions != undefined && typeof dimensions === 'object') {
            return dimensions
        }
        
        const defaultDimensions = {
            w: this.props.width ? this.props.width : 'auto',
            h: this.props.height ? this.props.height : 'auto'
        }

        if (typeof dimensions === 'string') {
            return {
                w: (dimensions === 'full') ? '100vw' : defaultDimensions.w,
                h: (dimensions === 'full') ? '100vh' : defaultDimensions.h
            }
        }

        return defaultDimensions
    }



    render() {

        console.log(this.props.dimensions)
        
        return (
            <ComponentStyle
                width={ this.getDimensions().w }
                height={ this.getDimensions().h }
                bgColor={ this.props.bgColor }>

                { this.props.children }

            </ComponentStyle>
        )
    }
}
