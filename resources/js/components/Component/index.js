import styled from 'styled-components'


import styles from '../../styles'



const filterProps = (props, def) => (props == 'all' || props == def)

const border = `1px solid ${ styles.color.border() }`



const Component = styled.div `

    ${ props => props.rounded ? `border-radius: ${ props.rounded }px;` : `` }

    margin-top:     ${ props => filterProps(props.away, 'vertically')   ? `1em` : `0` };
    margin-bottom:  ${ props => filterProps(props.away, 'vertically')   ? `1em` : `0` };
    margin-left:    ${ props => filterProps(props.away, 'horizontally') ? `1em` : `0` };
    margin-right:   ${ props => filterProps(props.away, 'horizontally') ? `1em` : `0` };

    padding-top:    ${ props => !props.pandded && filterProps(props.padding, 'vertically')    ? `1em` : `0` };
    padding-bottom: ${ props => !props.pandded && filterProps(props.padding, 'vertically')    ? `1em` : `0` };
    padding-left:   ${ props => !props.pandded && filterProps(props.padding, 'horizontally')  ? `1em` : `0` };
    padding-right:  ${ props => !props.pandded && filterProps(props.padding, 'horizontally')  ? `1em` : `0` };

    border-top:     ${ props => filterProps(props.bordered, 'top')      ? border : `none` };
    border-bottom:  ${ props => filterProps(props.bordered, 'bottom')   ? border : `none` };
    border-left:    ${ props => filterProps(props.bordered, 'left')     ? border : `none` };
    border-right:   ${ props => filterProps(props.bordered, 'right')    ? border : `none` };

`



export default Component
