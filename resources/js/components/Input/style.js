import styled from 'styled-components'



import styles from '../../styles'



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
    color:          ${ styles.color.textPrimary };

    &:focus {
        outline:        none !important;
        background:     #FFFFFF;
        box-shadow:     1px 1px 8px rgba(0, 0, 0, 0.246);
    }

    &::placeholder {
        color:      ${ styles.color.textDisabled };
        opacity:    1;
    }
`



export default InputStyle
