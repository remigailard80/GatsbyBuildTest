import { StaticQuery, graphql } from "gatsby"
import React from "react"

// 다른 페이지에서 썼던 query쓰면 안되나?
// 타입처리 일일히 하는것도 일이겠는데 자동으로 해주는 거 없나? 
const PostComponent = (props: any) => {
    const data = props.data
    return (
        <section>
            <h2> {data && data.id} </h2>
            <div style={{width: 300, height: 300, border: '0.5px solid black'}}>
                <img src={`data:image/jpeg;base64,${data && data.avatar}`} alt="image" />
            </div>
            <p> ~~~~ </p>
        </section>
    )
}

export default PostComponent