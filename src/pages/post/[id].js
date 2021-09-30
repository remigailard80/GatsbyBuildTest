import React from 'react'
import PostComponent from '../../components/post'
import { getPostAPI } from '../../api/mockapi'


const PostTemplate = (props) => {
    console.log(props)
    return (
        <PostComponent data={props.serverData}/>
    )
}

export default PostTemplate


export async function getServerData() {
    try {
        // delay ms 
        const res = await getPostAPI(600)
        return {
            props: res
        }
    } catch {
        return {
            props: {
                error: 500
            }
        }
    }
}