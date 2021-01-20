import styled from 'styled-components'

import styles from '../../styles'



const findProps = (prop, find) => RegExp(`\\b${ find }\\b`).test(prop)



const InputStyle = styled.input `
    width:          ${ props => props.width };
    height:         ${ props => props.height };
    border-radius:  ${ props => props.borderRadius };

    padding-left:   ${ props => props.paddingH };
    padding-right:  ${ props => props.paddingH };

    padding-top:    ${ props => props.paddingV };
    padding-bottom: ${ props => props.paddingV };

    border:         none;
    font-size:      ${ props => props.fontSize };

    background:     ${ props => props.background };
    color:          ${ styles.color.textPrimary() };

    &:focus {
        outline:        none !important;
        border:         ${ props => findProps(props.focus, 'border') ? `1px solid ${ styles.color.border() }` : `none` };
        box-shadow:     ${ props => findProps(props.focus, 'shadow') ? `1px 1px 8px rgba(0, 0, 0, 0.246);` : `none` };
        background:     ${ props => props.focus ? `white` : `none` };
    }

    &::placeholder {
        color:      ${ styles.color.textDisabled() };
        opacity:    1;
    }
`



export default InputStyle
