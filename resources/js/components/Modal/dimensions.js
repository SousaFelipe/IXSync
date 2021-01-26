


function dimensions(size) {

    const sizes = {

        'small': () => {
            return {
                width: `300px`,
                margin: {
                    horizontal: `300px`,
                    vertical:   `150px`
                },
            }
        },

        'medium': () => {
            return {
                width: `700px`,
                margin: {
                    horizontal: `150px`,
                    vertical:   `100px`
                },
            }
        },

        'large': () => {
            return {
                width: `900px`,
                margin: {
                    horizontal: `100px`,
                    vertical:   `80px`
                },
            }
        }
    }

    return (sizes[size] || sizes['medium'])()
}
