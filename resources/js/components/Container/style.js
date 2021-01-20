import styled from 'styled-components'



import Component from '../Component'



const findProps = (prop, find) => RegExp(`\\b${ find }\\b`).test(prop)



const ContainerStyle = styled(Component) `

    display:            flex;
    width:              ${ props => props.width };
    height:             ${ props => props.height };
    padding-left:       ${ props => props.pandded };
    padding-right:      ${ props => props.pandded };
    flex-direction:     ${ props => props.direction };
    flex-wrap:          ${ props => props.wrap ? props.wrap : `no-wrap` };
    justify-content:    ${ props => props.justify };
    align-items:        ${ props => props.align };
    background:         ${ props => props.background };

    &:focus-within {
        transition:         0.33s;
        -webkit-transition: 0.33s;
        background:         ${ props => findProps(props.focusWithin, 'fill')   ? `white` : props.background };
        box-shadow:         ${ props => findProps(props.focusWithin, 'shadow') ? `1px 1px 6px rgba(0, 0, 0, 0.246);` : `none` };
        border:             ${ props => findProps(props.focusWithin, 'border') ? `1px solid ${ styles.color.border() }` : `none` };
    }
`



export default ContainerStyle
