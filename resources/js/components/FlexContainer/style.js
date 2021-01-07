import styled from 'styled-components'



const direction = (direction, reverse = false) => {
    let dir = direction ? direction : `row`
    return (reverse ? `${ dir }-reverse` : dir)
}



const FlexContainerStyle = styled.section `
    display:        flex;
    width:          100vw;
    height:         100vh;
    flex-direction: ${ props => direction(props.direction, props.reverse) };
    background:     #eee;
`



export default FlexContainerStyle
