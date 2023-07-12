import Image from 'next/image'
import Replies from '~icons/mdi/reply'
import Retweet from '~icons/mdi/repeat-variant'
import Heart from '~icons/mdi/heart-outline'
import Download from '~icons/mdi/tray-arrow-down'

export default function Tweet() {
  return (
    <div className="flex border-b border-zinc-800 p-4">
      <div className="flex w-full flex-row">
        <div>
          <Image
            src={'https://cdn.discordapp.com/avatars/277771753952903168/2b8f6ccd8701030612e925b470a3e246.webp?size=64'}
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="ml-3 flex w-3/4 flex-col">
          <div className="flex flex-row items-center gap-1 align-middle">
            <span className="text-[0.95rem] font-semibold leading-none">Username</span>
            <span className="text-sm text-zinc-500">@username</span>
            <span className="text-sm text-zinc-500">Time</span>
          </div>
          <div>
            <span className="text-[0.9rem]  leading-none">Content</span>
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
