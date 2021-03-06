import styled from 'styled-components'



import Component from '../Component'

import styles from '../../styles'



const ContentStyle = styled(Component) `

    ${props => {
        return props.responsive ? `` : `width: ${ props.width ? props.width : `auto` };`
    }}

    ${props => {
        return props.responsive ? `` : `height: ${ props.height ? props.height : `auto` };`
    }}

    flex-grow:          ${ props => props.grow ? props.grow : 0 };
    flex-shrink:        ${ props => props.shrink ? props.shrink : 1 };
    flex-basis:         ${ props => props.basis ? props.basis : `auto` };
    text-align:         ${ props => props.textAlign ? props.textAlign : `left` };
    font-size:          ${ props => props.fontSize ? `${ props.fontSize }rem` : `1rem` };
    vertical-align:     ${ props => props.align ? props.align : 'start' };
    background:         ${ props => props.background };


    &:hover {
        ${ props => props.hoverColor ? `cursor: pointer;` : `` }
        background: ${ props => props.hoverColor ? styles.color.filter(props.hoverColor, 1, `none`) : props.background };
    }


    @media(min-width: 1025px) { width: ${ props => props.responsive ? props.responsive.all.width ? props.responsive.all.width : `auto` : `auto` }; }
    @media(max-width: 1024px) {
        width:          ${ props => props.responsive ? props.responsive.desktop.width ? props.responsive.desktop.width : `auto` : `auto` };
        margin-left:    ${ props => props.responsive ? props.responsive.desktop.horizontalMargin ? props.responsive.desktop.horizontalMargin : 0 : 0 };
        margin-right:   ${ props => props.responsive ? props.responsive.desktop.horizontalMargin ? props.responsive.desktop.horizontalMargin : 0 : 0 };
        display:        ${ props => props.responsive ? props.responsive.desktop.display ? props.responsive.phone.display : `inline` : `inline` };
    }
    @media(max-width: 800px) {
        width:          ${ props => props.responsive ? props.responsive.tablet.width ? props.responsive.tablet.width  : `auto` : `auto` };
        margin-left:    ${ props => props.responsive ? props.responsive.tablet.horizontalMargin ? props.responsive.tablet.horizontalMargin : 0 : 0 };
        margin-right:   ${ props => props.responsive ? props.responsive.tablet.horizontalMargin ? props.responsive.tablet.horizontalMargin : 0  : 0 };
        display:        ${ props => props.responsive ? props.responsive.tablet.display ? props.responsive.phone.display : `inline` : `inline` };
    }
    @media(max-width: 548px) {
        width:          ${ props => props.responsive ? props.responsive.phone.width ? props.responsive.phone.width  : `auto` : `auto` };
        margin-left:    ${ props => props.responsive ? props.responsive.phone.horizontalMargin ? props.responsive.phone.horizontalMargin : 0 : 0 };
        margin-right:   ${ props => props.responsive ? props.responsive.phone.horizontalMargin ? props.responsive.phone.horizontalMargin : 0 : 0 };
        display:        ${ props => props.responsive ? props.responsive.phone.display ? props.responsive.phone.display : `inline` : `inline` };
    }
`



export default ContentStyle
