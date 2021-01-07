import styled from 'styled-components'



const direction = (direction, reverse = false) => {
    let dir = direction ? direction : `row`
    return (reverse ? `${ dir }-reverse` : dir)
}



const FlexContainerStyle = styled.section `
    display:        flex;
    width:          100vw;
    height:         100vh;
    flex-direction: ${ props => direction(props.direction, props.reverse) }

    &:nth-child(1) {
        width:              100px;
        heiht:              100px;
        -webkit-box-shadow: 0px 2px 8px -1px rgba(0, 0, 0, 0.25);
        background:         white;
        margin:             5px;
    }
`



export default FlexContainerStyle
