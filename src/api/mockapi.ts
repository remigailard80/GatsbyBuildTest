export async function getPostAPI () {
    const result = await fetch('http://127.0.0.1:8090/post').then(res => res.json())
    return result
}