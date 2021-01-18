import styled from 'styled-components'



const Component = styled.div `

    ${props => {

        if (props.bordered != undefined) {

            if (props.bordered == 'all') {

            }


        }

    }}

    border-left: ${props =>
        props.bordered
            ? props.border.left
            : `none`
    };

    border-right: ${props =>
        props.bordered
            ? props.border.right
            : `none`
    };

    border-top: ${props =>
        props.bordered
            ? props.border.top
            : `none`
    };

    border-bottom: ${props =>
        props.bordered
            ? props.border.bottom
            : `none`
    };
`



export default Component
