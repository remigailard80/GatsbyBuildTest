import React from 'react'
import PostComponent from '../../components/post'
import { getPostAPI } from '../../api/mockapi'


const PostTemplate = (props) => {
    console.log(props.serverData.time[1]/1000000) // ms
    return (
        <PostComponent data={props.serverData}/>
    )
}

export default PostTemplate


export async function getServerData() {
    try {
        // delay ms 
        const res = await getPostAPI()
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