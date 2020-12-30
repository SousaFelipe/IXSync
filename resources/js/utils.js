


import config from './config'



const imgPath       = `${ config.ixsHost }/storage/img`
const avatarPath    = `${ imgPath }/avatars`

const defaultAvatar = `${ avatarPath }/undefined.png`



const asset = {


    exists: (filename) => {

        let xhr = new XMLHttpRequest()
        xhr.open('HEAD', filename, false)
        xhr.send()

        return !(xhr.status == '404')
    },


    avatar: (filename) => {
        let resource = `${ avatarPath }/${ filename }.png`
        return asset.exists(resource) ? resource : defaultAvatar
    },


    image: (filename) => {

    }

}



const utils = {

    asset: asset

}



export default utils
