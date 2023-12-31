import Image from 'next/image'
import Replies from '~icons/mdi/reply'
import Retweet from '~icons/mdi/repeat-variant'
import Heart from '~icons/mdi/heart-outline'
import Download from '~icons/mdi/tray-arrow-down'
import default_avatar from '@/assets/default_avatar.webp'

export interface TweetProps {
  content: string
  date: Date
  user: {
    username: string
    avatar: string | undefined
  }
}

export default function Tweet({ tweet: { content, user, date } }: { tweet: TweetProps }) {
  return (
    <div className="flex border-b border-zinc-800 px-4 py-3">
      <div className="flex w-full flex-row">
        <div>
          <Image
            src={user.avatar ?? default_avatar}
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="ml-3 flex w-3/4 flex-col">
          <div className="flex flex-row items-center gap-1 align-middle">
            <span className="text-[0.95rem] font-semibold leading-none">{user.username}</span>
            <span className="text-sm text-zinc-500">@{user.username.toLowerCase()}</span>
            <span className="text-sm text-zinc-500">{date.toLocaleDateString()}</span>
          </div>
          <div>
            <span className="text-[0.9rem]  leading-none">{content}</span>
          </div>
          <div className="mt-3 flex grow flex-row justify-between">
            <div className="flex flex-row items-center gap-1">
              <Replies className="text-sm font-semibold" />
              <span className="text-xs">113</span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <Retweet className="text-sm font-semibold" />
              <span className="text-xs">638</span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <Heart className="text-sm font-semibold" />
              <span className="text-xs">7,754</span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <Download className="text-sm font-semibold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
