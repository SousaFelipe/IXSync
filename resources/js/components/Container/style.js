import styled from 'styled-components'



import Component from '../Component'



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
    background:         ${ props => props.background ? props.background : `white` };
`



export default ContainerStyle
