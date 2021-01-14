


function dimensions(size) {

    const sizes = {

        'small':    () => {
            return {
                verticalPadding:    `4px`,
                horizontalPadding:  `8px`,
                borderRadius:       `3px`,
                fontSize:           `0.7rem`
            }
        },

        'medium':   () => {
            return {
                verticalPadding:    `6px`,
                horizontalPadding:  `14px`,
                borderRadius:       `6px`,
                fontSize:           `0.8rem`
            }
        },

        'large':    () => {
            return {
                verticalPadding:    `8px`,
                horizontalPadding:  `18px`,
                borderRadius:       `10px`,
                fontSize:           `1.5rem`
            }
        },

    }

    return (sizes[size] || sizes['medium'])()
}



export default dimensions
