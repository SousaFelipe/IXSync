


function dimensions(size) {

    const sizes = {
        'small':    () => `8px`,
        'medium':   () => `12px`,
        'large':    () => `16px`
    }

    return (sizes[size] || sizes['small'])()
}



export default dimensions
