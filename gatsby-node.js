const path = require('path')
const hashAndAvatarGenerator = require('./utils/hashAndAvatarGenerator.ts')

// Full SSG (1st build : delete .cache)
exports.createPages = async ({ graphql, actions }) => {
    const posts = await hashAndAvatarGenerator(15, 100)
    posts.forEach((post, idx) => {
        actions.createPage({
            path: `/post/` + post.id,
            context: post,
            component: path.resolve(__dirname, 'src/template/PostTemplate.tsx'),
            // defer: idx+1 > 200, << DSG (defer = false 가 pre-build, true가 SSR)
        })
    })


}