import styled from 'styled-components'



const IconStyle = styled.span `
    display:    inline-block;
    box-size:   border-box;
    width:      ${ props => props.width }px;
    height:     ${ props => props.height }px;
    padding:    ${ props => props.padding }px;
`



export default IconStyle
