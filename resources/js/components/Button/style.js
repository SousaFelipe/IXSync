import styled from 'styled-components'



const ButtonStyle = styled.button `

    ${ props => props.block ? `display: block;` : `` }
    ${ props => `background: ${ props.outline ? `none` : props.color };` }

    ${props => {
        return props.block
            ? ``
            : props.width
                ? `width: ${ props.width };`
                : `width: auto;`
    }}

    ${props => {
        return props.outline
            ? `border: 1px solid ${ props.color };`
            : 'border: none;'
    }}

    padding-top:    ${ props => props.verticalPadding };
    padding-bottom: ${ props => props.verticalPadding };

    padding-left:   ${ props => props.horizontalPadding };
    padding-right:  ${ props => props.horizontalPadding };

    border-radius:  ${ props => props.borderRadius };

    color:          ${ props => props.foreGround };
    font-size:      ${ props => props.fontSize };
    font-weight:    700;
    cursor:         pointer;

`



export default ButtonStyle
