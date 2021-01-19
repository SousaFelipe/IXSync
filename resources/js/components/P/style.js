import styled from 'styled-components'



const PStyle = styled.span `

    ${ props => props.font ? props.font : `` }
    ${ props => props.textAlign ? `text-align: ${ props.textAlign };` : `` }

    color:          ${ props => props.color };
    font-size:      ${ props => props.fontSize };
    font-weight:    ${ props => props.fontWeight };

    display:        block;
`



export default PStyle
