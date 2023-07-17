import LoadingSpinner from '@/components/LoadingSpinner'
import Posts from '@/components/posts/Posts'
import TrendsList from '@/components/trends/TrendsList'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { Suspense } from 'react'
import Back from '~icons/mdi/arrow-left'

export default async function ProfilePage() {
  const session = await getServerSession()
  return (
    <main className="flex min-h-screen grow justify-between">
      <div className="flex min-h-full w-3/5 flex-col border-x border-zinc-800">
        {/* Header */}
        <div className="flex h-14 items-center border-b border-zinc-800 px-4">
          <div className="flex items-center">
            <Back className="mr-6 text-lg" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold">{session?.user?.name}</span>
              <span className="text-sm text-zinc-500">953 Tweets</span>
            </div>
          </div>
        </div>
        {/* Profile */}
        <div className="relative flex h-52">
          <Image
            className="z-0"
            src={'https://pbs.twimg.com/profile_banners/999765526128873473/1527198172/600x200'}
            fill={true}
            objectFit=""
            alt="Banner"
          />
          <Image
            className="z-10 mx-5 h-36 w-36 translate-y-1/2  self-end rounded-full border-4 border-black"
            src={
              session?.user?.image ?? 'https://pbs.twimg.com/profile_images/1386510628966342658/gTtWGwxz_400x400.jpg'
            }
            height={144}
            width={144}
            alt="Profile picture"
          />
        </div>
        <div className="mx-6 mt-20 flex flex-col">
          <div className="mb-3 flex flex-col">
            <span className="text-xl font-semibold">{session?.user?.name}</span>
            <span className="text-base text-zinc-500">@{session?.user?.name?.toLowerCase()}</span>
          </div>
          <span className="text-sm">Imagine if you could set your own description</span>
        </div>
        {/* Tabs */}
        <div className="mt-6 flex h-14 items-center justify-between border-b border-zinc-800">
          <div className="flex grow cursor-pointer justify-center transition-colors hover:bg-zinc-900">
            <div className="relative mx-8 flex grow justify-center">
              <span className="h-full py-4 text-sm font-semibold">Tweets</span>
              <div className="absolute bottom-0 h-1 w-full rounded-full bg-blue-500"></div>
            </div>
          </div>
          <div className="flex grow cursor-pointer justify-center transition-colors hover:bg-zinc-900">
            <div className="relative mx-8 flex grow justify-center">
              <span className="h-full py-4 text-sm font-medium text-zinc-500">Replies</span>
            </div>
          </div>
          <div className="flex grow cursor-pointer justify-center transition-colors hover:bg-zinc-900">
            <div className="relative mx-8 flex grow justify-center">
              <span className="h-full py-4 text-sm font-medium text-zinc-500">Highlights</span>
            </div>
          </div>
          <div className="flex grow cursor-pointer justify-center transition-colors hover:bg-zinc-900">
            <div className="relative mx-8 flex grow justify-center">
              <span className="h-full py-4 text-sm font-medium text-zinc-500">Media</span>
            </div>
          </div>
          <div className="flex grow cursor-pointer justify-center transition-colors hover:bg-zinc-900">
            <div className="relative mx-8 flex grow justify-center">
              <span className="h-full py-4 text-sm font-medium text-zinc-500">Likes</span>
            </div>
          </div>
        </div>
        {/* Tweets */}
        <Suspense fallback={<LoadingSpinner />}>
          <Posts />
        </Suspense>
      </div>
      <TrendsList />
    </main>
  )
}
