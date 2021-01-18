import styled from 'styled-components'



import styles from '../../styles'



const HrStyle = styled.i `
    width:      ${ props => props.vertical ? '1px'  : '100%' };
    height:     ${ props => props.vertical ? '100%' : '1px' };
    background: ${ styles.color.border };
`



export default HrStyle
