import { graphql } from 'gatsby'
import React from 'react'
import PostComponent from '../components/post'
import Layout from '../components/layout'

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
    return (
        <Layout>
            <PostComponent data={props.pageContext}/>
        </Layout>
    )
}

export default PostTemplate