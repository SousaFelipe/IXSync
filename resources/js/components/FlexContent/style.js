import styled from 'styled-components'



const FlexContentStyle = styled.article `

    ${props => {
        return (props.aligned === true) ? `` : `width: ${ props.width ? props.width : `auto` };`
    }}

    height: ${ props => props.height ? props.height : `auto` };

    background-color:   ${ props => props.background ? props.background : `white` };
    -webkit-box-shadow: 0px 2px 8px -1px rgba(0, 0, 0, 0.25);
    margin:             5px;
`



export default FlexContentStyle
