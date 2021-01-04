import styled from 'styled-components'



const LIstyle = styled.li `

    height: auto;
    cursor: pointer;

    &:hover {
        background:     ${ props => { return (props.hoverColor ? props.hoverColor : `none`) } };
        font-weight:    bold;
    }
`



export default LIstyle
