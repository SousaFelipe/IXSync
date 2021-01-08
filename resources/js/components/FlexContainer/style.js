import styled from 'styled-components'



import ComponentStyle from '../Component/style'



function direction(direction, reverse = false) {
    let dir = direction ? direction : `row`
    return ((reverse === true) ? `${ dir }-reverse` : dir)
}



const FlexContainerStyle = styled(ComponentStyle) `
    display:        flex;
    flex-direction: ${ props => direction(props.direction, props.reverse) };
`



export default FlexContainerStyle
