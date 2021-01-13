import styled from 'styled-components'



import styles from '../../styles'
import utils from '../../utils'



const IconStyle = styled.svg `
    display:            block;
    text-indent:        -9999px;
    width:              28px;
    height:             28px;
    background:         url(${ props => utils.asset.svg(props.src) }) no-repeat center;
    background-size:    24px 24px;

    & > path {
        fill: ${ styles.color.textDisabled };
    }
`



export default IconStyle
