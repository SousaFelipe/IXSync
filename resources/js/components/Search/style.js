import styled from 'styled-components'



import Component from '../Component'


import styles from '../../styles'



const findProps = (prop, find) => RegExp(`\\b${ find }\\b`).test(prop)



const InputStyle = styled(Component) `
    &:focus {
        border:         ${ props => findProps(props.onFocusEffecct, 'border') ? `1px solid ${ styles.color.border() }` : `none` };
        box-shadow:     ${ props => findProps(props.onFocusEffecct, 'shadow') ? `1px 1px 8px rgba(0, 0, 0, 0.246);` : `none` };
    }
`



export default InputStyle
