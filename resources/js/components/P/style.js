import styled from 'styled-components'



const PStyle = styled.p `
    color:          ${ props => props.color };
    font-size:      ${ props => props.fontSize };
    font-weight:    ${ props => props.fontWeight };
`



export default PStyle
