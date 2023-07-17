import mongo from '@/lib/mongodb'
import Tweet, { TweetProps } from './Tweet'

export default async function Posts({ user }: { user?: string | null }) {
  const posts: TweetProps[] = await new Promise((resolve, reject) => {
    setTimeout(async () => {
      const col = mongo.collection('tweets')
      const tweets = user ? await col.find({ 'user.username': user }).toArray() : await col.find().toArray()
      const placeholder = user
        ? []
        : Array.from<any>({ length: 30 }).map((_, i) => ({
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            date: new Date(Date.now() - 1000 * 60 * 60 * 24 * (30 - i)),
            user: { username: 'someUser', avatar: undefined },
          }))
      resolve([...placeholder, ...tweets] as TweetProps[])
    }, 3000)
  })

  return (
    <div>
      {posts.length === 0 && <div className="my-10 text-center font-medium">No tweets yet</div>}
      {posts
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .map((p: TweetProps, i: any) => (
          <Tweet key={i} tweet={p} />
        ))}
    </div>
  )
}
