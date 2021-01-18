


import styles from '../../styles'



function dimensions(size) {

    const sizes = {

        'small':    () => {
            return {

            }
        },

        'medium':   () => {
            return {

            }
        },

        'large':    () => {
            return {

            }
        }
    }

    return (sizes[size] || sizes['medium'])()
}



export default dimensions
