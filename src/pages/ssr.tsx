import React from "react"
import { getPostAPI } from "../api/mockapi"

// SSR Test Page
const PostComponent = ({ serverData }: any) => {
    const { id, avatar } = serverData[0];
    return (
        <section>
            <h2> { id && id } </h2>
            <div style={{width: 300, height: 300, border: '0.5px solid black'}}>
                이미지 올 곳
                <img src={`data:image/jpeg;base64,${avatar && avatar}`} alt="image" />
            </div>
            <p> ~~~~ </p>
        </section>
    )
}

export default PostComponent

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