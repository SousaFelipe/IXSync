import styled from 'styled-components'


import styles from '../../styles'



const LIstyle = styled.li `

    height:     auto;
    cursor:     pointer;
    font-size:  ${ props => props.fontSize ? `${ props.fontSize }em` : `1em` };
    color:      ${ styles.color.get('textPrimary') };

    &:hover {
        background: ${ props => props.hoverColor ? props.hoverColor : `none` };
    }
`



export default LIstyle
