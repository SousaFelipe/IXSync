import styled from 'styled-components'



const InputStyle = styled.input `
    width:          ${ props => props.width };
    height:         ${ props => props.height };
    border-radius:  ${ props => props.borderRadius };

    padding-left:   ${ props => props.paddingH };
    padding-right:  ${ props => props.paddingH };

    padding-top:   ${ props => props.paddingV };
    padding-bottom:${ props => props.paddingV };

    border:     none;

    background: ${ props => props.background };
`



export default InputStyle
