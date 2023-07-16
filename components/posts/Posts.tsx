import mongo from '@/lib/mongodb'
import Tweet, { TweetProps } from './Tweet'
// import { Suspense, useEffect, useState } from 'react'
// import LoadingSpinner from '../LoadingSpinner'

export default async function Posts() {
  // const [posts, setPosts] = useState<any[]>([])
  // const [loading, setLoading] = useState(true)

  const posts: TweetProps[] = await new Promise((resolve, reject) => {
    setTimeout(async () => {
      const tweets = await mongo.collection('test').find().toArray()
      const placeholder = Array.from<any>({ length: 30 }).map((_, i) => ({
        content: 'placeholder',
        date: new Date(Date.now() - 1000 * 60 * 60 * 24 * (30 - i)),
        user: { username: 'placeholder', avatar: '' },
      }))
      resolve([...placeholder, ...tweets] as TweetProps[])
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
      {posts
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .map((p: TweetProps, i: any) => (
          <Tweet key={i} tweet={p} />
        ))}
    </div>
  )
}
