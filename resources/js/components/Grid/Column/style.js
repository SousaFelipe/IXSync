import styled from 'styled-components'



const Colstyle = styled.div `
    ${props => {

        if (props.overflow) {
            return `white-space:    nowrap;
                    overflow:       hidden;
                    text-overflow:  ellipsis;`
        }

        return ``
    }}
`


export default Colstyle
