


function dimensions(size) {

    const sizes = {

        'small': () => {
            return {
                width:          `150px`,
                height:         `28px`,
                borderRadius:   `14px`,
                fontSize:       `0.6rem`
            }
        },

        'medium': () => {
            return {
                width:          `300px`,
                height:         `46px`,
                borderRadius:   `23px`,
                fontSize:       `0.8rem`
            }
        },

        'large': () => {
            return {
                width:          `700px`,
                height:         `56px`,
                borderRadius:   `28px`,
                fontSize:       `1rem`
            }
        }
    }

    return (sizes[size] || sizes['medium'])()
}



export default dimensions
