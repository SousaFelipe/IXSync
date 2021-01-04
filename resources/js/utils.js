


import config from './config'



const imgPath       = `${ config.ixsHost }/storage/img`
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

}



const utils = {


    asset: asset,


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
    }
}



export default utils
