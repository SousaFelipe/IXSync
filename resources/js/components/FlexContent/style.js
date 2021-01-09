import styled from 'styled-components'



const FlexContentStyle = styled.article `

    ${props => {
        return `width: ${ props.width ? props.width : `auto` };`
    }}

    ${props => {
        return `height: ${ props.height ? props.height : `auto` };`
    }}

    flex-grow:          ${ props => props.grow ? props.grow : 0 };
    flex-shrink:        ${ props => props.shrink ? props.shrink : 1 };
    flex-basis:         ${ props => props.basis ? props.basis : `auto` };

    background-color:   ${ props => props.background ? props.background : `white` };
`



export default FlexContentStyle
