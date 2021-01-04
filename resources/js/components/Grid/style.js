import styled from 'styled-components'



const Gridstyle = styled.div `
    display:                grid;
    grid-template-columns:  ${ props => props.columns };
    grid-template-rows:     ${ props => props.rows };
    grid-column-gap:        ${ props => { return props.columnGap ? props.columnGap : 12 } }px;
    grid-row-gap:           ${ props => { return props.rowGap ? props.rowGap : 12 } }px;
`



export default Gridstyle
