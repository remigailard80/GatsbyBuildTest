import React from 'react'
import PostComponent from '../components/post'

interface postProps {
    location: object
    navigate: Function
    pageContext: object
    pageResources: object
    params: object
    path: string
    uri: string
    key?: any
}
const PostTemplate: React.FC<postProps> = (props) => {
    console.log(props)
    return (
        <PostComponent data={props.pageContext}/>
    )
}

export default PostTemplate