const hashAndAvatarGenerator = require('../../utils/hashAndAvatarGenerator.ts')

export function getPostAPI (ms: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(hashAndAvatarGenerator(15, 1))
        }, ms)
    })
}