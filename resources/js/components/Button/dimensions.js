


function dimensions(size) {

    const sizes = {

        'small':    () => {
            return {
                verticalPadding:    `4px`,
                horizontalPadding:  `8px`,
                borderRadius:       `5px`,
                fontSize:           `0.7rem`
            }
        },

        'medium':   () => {
            return {
                verticalPadding:    `6px`,
                horizontalPadding:  `12px`,
                borderRadius:       `7px`,
                fontSize:           `1rem`
            }
        },

        'large':    () => {
            return {
                verticalPadding:    `8px`,
                horizontalPadding:  `20px`,
                borderRadius:       `10px`,
                fontSize:           `1.5rem`
            }
        },

    }

    return (sizes[size] || sizes['medium'])()
}



export default dimensions
