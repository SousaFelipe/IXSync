import styled from 'styled-components'



const ComponentStyle = styled.div `
    width:              ${ props => props.width ? props.width : `auto` };
    height:             ${ props => props.height ? props.height : `auto` };

    background-color:   ${ props => props.bgColor ? props.bgColor : `white` };
`



export default ComponentStyle
