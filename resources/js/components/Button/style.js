import styled from 'styled-components'



const ButtonStyle = styled.button `

    ${ props => props.block ? `display: block;` : `` }
    ${ props => props.disabled ? `` : `cursor: pointer;` }
    ${ props => `background: ${ (props.outline || props.flat) ? `none` : props.disabled ? props.outlineColor : props.color };` }

    ${props => {
        return props.block
            ? ``
            : props.width
                ? `width: ${ props.width };`
                : `width: auto;`
    }}

    ${props => {
        return props.outline
            ? `border: 2px solid ${ props.color };`
            : 'border: none;'
    }}

    padding-top:            ${ props => props.verticalPadding };
    padding-bottom:         ${ props => props.verticalPadding };

    padding-left:           ${ props => props.horizontalPadding };
    padding-right:          ${ props => props.horizontalPadding };

    border-radius:          ${ props => props.borderRadius };
    -webkit-border-radius:  ${ props => props.borderRadius };
    -moz-border-radius:     ${ props => props.borderRadius };

    font-size:              ${ props => props.fontSize };
    color:                  ${ props => props.outline ? props.color : props.foreGround };
    font-weight:            700;
    transition:             0.3s;

    &:focus {
        outline:    none;
        box-shadow: 0px 0px 0px ${ props => (props.disabled || props.flat) ? `0` : `3` }px ${ props => props.outlineColor };
    }

    ${props => props.outline
        ? `&:hover {
            color:      ${ props.foreGround };
            background: ${ props.color };
        }`
        : ``
    }

`



export default ButtonStyle
