import LoadingSpinner from './LoadingSpinner'
import Posts from './posts/Posts'
import TweetBox from './tweet/TweetBox'
import { Suspense } from 'react'

export default function Timeline() {
  return (
    <div className="flex min-h-full w-3/5 flex-col border-x border-zinc-800">
      <div className="sticky top-0 border-b border-zinc-800 p-4 backdrop-blur-md">
        <span className="text-xl font-bold">Home</span>
      </div>
      <TweetBox />
      <Suspense fallback={<LoadingSpinner />}>
        <Posts />
      </Suspense>
    </div>
  )
}
