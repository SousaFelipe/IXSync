


function dimensions(size) {

    const sizes = {

        'small': () => {
            return {
                size: 24,
                padding: 4
            }
        },

        'medium': () => {
            return {
                size: 48,
                padding: 8,
            }
        },

        'large': () => {
            return {
                size: 96,
                padding: 16,
            }
        }
    }

    return (sizes[size] || sizes['small'])()
}



export default dimensions
