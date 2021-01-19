import styled from 'styled-components'



const ImageStyle = styled.img `

    ${ props => props.rounded ? `border-radius: 50%;` : `` }
    ${ props => props.size ? `width: ${ props.size }px; height: ${ props.size }px;` : `` }
    ${ props => (props.width && !props.size) ? `width: ${ props.width };` : `` }
    ${ props => (props.height && !props.size) ? `height: ${ props.height };` : `` }

    content: url('${ props => props.src }');

`



export default ImageStyle
