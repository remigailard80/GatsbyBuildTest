const createHash = require('hash-generator');
const Identicon = require ('identicon.js')

module.exports = function hashAndAvatarGenerator(hashLength, number) {
    let result = [];
    for (let i=0; i<number; i++) {
        let hash = createHash(hashLength)
        let hashAvatar = new Identicon(hash, 60).toString() // base64 encoded PNG

        result.push({id : hash, avatar : hashAvatar})
    }
    return result
}