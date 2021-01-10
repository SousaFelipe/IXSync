import styled from 'styled-components'



/**
    ${props => {
        return props.responsive ? `` : `width: ${ props.width ? props.width : `auto` };`
    }}
 */



const FlexContentStyle = styled.div `

    ${props => {
        return props.responsive ? `` : `width: ${ props.width ? props.width : `auto` };`
    }}

    ${props => {
        return props.responsive ? `` : `height: ${ props.height ? props.height : `auto` };`
    }}

    flex-grow:          ${ props => props.grow ? props.grow : 0 };
    flex-shrink:        ${ props => props.shrink ? props.shrink : 1 };
    flex-basis:         ${ props => props.basis ? props.basis : `auto` };

    background-color:   ${ props => props.background ? props.background : `white` };


    @media(min-width: 1025px) { width: ${ props => props.responsive ? props.responsive.all.width : `auto` }; }
    @media(max-width: 1024px) {
        width:          ${ props => props.responsive ? props.responsive.desktop.width : `auto` };
        margin-left:    ${ props => props.responsive ? props.responsive.desktop.horizontalMargin : 0 };
        margin-right:   ${ props => props.responsive ? props.responsive.desktop.horizontalMargin : 0 };
    }
    @media(max-width: 800px) {
        width:          ${ props => props.responsive ? props.responsive.tablet.width : `auto` };
        margin-left:    ${ props => props.responsive ? props.responsive.tablet.horizontalMargin : 0 };
        margin-right:   ${ props => props.responsive ? props.responsive.tablet.horizontalMargin : 0 };
    }
    @media(max-width: 548px) {
        width:          ${ props => props.responsive ? props.responsive.phone.width : `auto` };
        margin-left:    ${ props => props.responsive ? props.responsive.phone.horizontalMargin : 0 };
        margin-right:   ${ props => props.responsive ? props.responsive.phone.horizontalMargin : 0 };
    }
`



export default FlexContentStyle
