


const menu = `M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z`


function icon(name) {

    const icons = {
        'menu': () => menu
    }

    return (icons[name] || icons['undefined'])()
}



export default icon
