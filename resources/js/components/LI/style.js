import styled from 'styled-components'


import styles from '../../styles'



const LIstyle = styled.li `

    height:         auto;
    cursor:         pointer;
    color:          ${ styles.color.get('textPrimary') };
    font-size:      ${ props => props.fontSize ? props.fontSize : `1rem` };

    &:hover {
        background: ${ props => props.hoverColor ? props.hoverColor : `none` };
    }
`



export default LIstyle
