import styled from 'styled-components'



const ColumnStyle = styled.div `

    ${props => {

        if (props.overflow) {
            return `white-space:    nowrap;
                    overflow:       hidden;
                    text-overflow:  ellipsis;`
        }

        return ``
    }}

    width:          ${ props => props.width ? props.width : 'auto' };
    height:         ${ props => props.height ? props.height : 'auto' };
    vertical-align: middle;
`


export default ColumnStyle
