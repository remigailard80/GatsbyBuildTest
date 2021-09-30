import { StaticQuery, graphql } from "gatsby"
import React from "react"

// 다른 페이지에서 썼던 query쓰면 안되나?
// 타입처리 일일히 하는것도 일이겠는데 자동으로 해주는 거 없나? 
const PostComponent = (props: any) => {
    const data = props.data[0] === undefined ? props.data : props.data[0]
    return (
        <section>
            <h2> {data && data.id} </h2>
            <img src={`data:image/jpeg;base64,${data && data.avatar}`} alt="image" />
        </section>
    )
}

export default PostComponent