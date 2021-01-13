


function dimensions(size) {

    const sizes = {

        'small': () => {
            return {

                width:          `150px`,
                height:         `28px`,
                borderRadius:   `14px`,

                padding: {
                    horizontal: `14px`,
                    vertical:   `8px`
                }
            }
        },

        'medium': () => {
            return {

                width:          `300px`,
                height:         `46px`,
                borderRadius:   `23px`,

                padding: {
                    horizontal: `16px`,
                    vertical:   `10px`
                }
            }
        },

        'large': () => {
            return {

                width:          `700px`,
                height:         `56px`,
                borderRadius:   `28px`,
                fontSize:       `1rem`,

                padding: {
                    horizontal: `26px`,
                    vertical:   `14px`
                }
            }
        }
    }

    return (sizes[size] || sizes['medium'])()
}



export default dimensions
