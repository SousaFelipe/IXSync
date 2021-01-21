import styled from 'styled-components'


import dimensions from './dimensions'



const findProps = (prop, find) => RegExp(`\\b${ find }\\b`).test(prop)



const ColumnStyle = styled.div `

    ${props => {

        if (props.overflow) {
            return `white-space:    nowrap;
                    overflow:       hidden;
                    text-overflow:  ellipsis;`
        }

        return ``
    }}

    ${ props => (props.padding && findProps(props.padding, 'left')) ? `padding-left: ${ dimensions(props.padded) };` : `` }
    ${ props => (props.padding && findProps(props.padding, 'right')) ? `padding-right: ${ dimensions(props.padded) };` : `` }
    ${ props => (props.padding && findProps(props.padding, 'top')) ? `padding-top: ${ dimensions(props.padded) };` : `` }
    ${ props => (props.padding && findProps(props.padding, 'bottom')) ? `padding-bottom: ${ dimensions(props.padded) };` : `` }

    display:        flex;
    align-items:    center;
    width:          ${ props => props.width ? props.width : 'auto' };
    height:         ${ props => props.height ? props.height : 'auto' };
    font-size:      ${ props => props.fontSize ? props.fontSize : `1rem` };
    vertical-align: middle;
`


export default ColumnStyle
