import { css } from 'styled-components'



//@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
//@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700;800;900&display=swap');



function fonts(name) {

    const fonts = {

        'Roboto':       () => `font-family: 'Roboto', sans-serif;`,
        'MPSRounded':   () => `font-family: 'M PLUS Rounded 1c', sans-serif;`

    }

    return (fonts[name] || fonts['Roboto'])()
}



export default fonts
