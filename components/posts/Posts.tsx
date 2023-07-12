import Tweet from './Tweet'
// import { Suspense, useEffect, useState } from 'react'
// import LoadingSpinner from '../LoadingSpinner'

export default async function Posts() {
  // const [posts, setPosts] = useState<any[]>([])
  // const [loading, setLoading] = useState(true)

  const posts: any[] = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Array.from<any>({ length: 30 }))
    }, 5000)
  })

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPosts(Array.from<any>({ length: 30 }))
  //     setLoading(false)
  //   }, 5000)
  // }, [])

  return (
    <div>
      {/* {loading && <LoadingSpinner />} */}
      {posts.map((p: any, i: any) => (
        <Tweet key={i} />
      ))}
    </div>
  )
}
