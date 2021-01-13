


import config from './config'



const imgPath       = `${ config.ixsHost }/storage/img`
const svgPath       = `${ imgPath }/svg`
const avatarPath    = `${ imgPath }/avatars`

const defaultAvatar = `${ avatarPath }/default.png`



const asset = {


    exists: (filename) => {

        let xhr = new XMLHttpRequest()
        xhr.open('HEAD', filename, false)
        xhr.send()

        return !(xhr.status == '404')
    },


    avatar: (filename) => {
        let resource = `${ avatarPath }/${ filename }.png`

        return  ((filename != undefined) && asset.exists(resource))
            ? resource
            : defaultAvatar
    },


    image: (filename) => {
        let resource = `${ imgPath }/${ filename }`

        return ((filename != undefined) && asset.exists(resource))
            ? resource
            : `${ imgPath }/imgNotFound.png`
    },


    svg: (filename) => {
        let resource = `${ svgPath }/${ filename }.svg`

        return ((filename != undefined) && asset.exists(resource))
            ? resource
            : `${ svgPath }/svgNotFound.svg`
    }

}



const component = {


    dimensions: (props) => {
        const dimensions = props.dimensions

        if (dimensions != null && dimensions != undefined && typeof dimensions === 'object') {
            return dimensions
        }

        const defaultDimensions = {
            w: props.width ? props.width : 'auto',
            h: props.height ? props.height : 'auto'
        }

        if (typeof dimensions === 'string') {
            return {
                w: (dimensions == 'full') ? '100vw' : defaultDimensions.w,
                h: (dimensions == 'full') ? '100vh' : defaultDimensions.h
            }
        }

        return defaultDimensions
    },


    direction: (props) => {
        let dir = props.direction ? props.direction : `row`
        return ((props.reverse === true) ? `${ dir }-reverse` : dir)
    },


    /**
     * @param props start, end, center, around, between
     */
    justify: (props) => {
        const justify = props.justify

        if (justify == null && justify == undefined) {
            return 'flex-start'
        }

        return (justify == 'start' || justify == 'end')
            ? `flex-${ justify }`
            : (justify == 'around' || justify == 'between')
                ? `space-${ justify }`
                : justify
    },


    /**
     * @param props start, end, center, stretch, baseline
     */
    align: (align) => {

        if (align == null && align == undefined) {
            return 'flex-start'
        }

        return (align == 'start' || align == 'end')
            ? `flex-${ align }`
            : `${ align }`
    }
}



const utils = {


    asset: asset,


    component: component,


    url: (url, data) => {

        let formattedUrl = `${ config.ixsHost }/${ url }`

        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                formattedUrl = formattedUrl.replace(key, data[key])
            }
        }

        return formattedUrl
    },


    isNumber: (obj) => {
        return !isNaN(parseFloat(obj)) && isFinite(obj)
    },
}



export default utils
