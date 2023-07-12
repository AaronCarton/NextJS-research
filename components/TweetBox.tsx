import Image from 'next/image'
import { Textarea } from './ui/textarea'

export default function TweetBox() {
  return (
    <div className="flex h-36 flex-col gap-3 border-b border-zinc-800 px-4 py-4">
      <div className="flex flex-row">
        <div>
          <Image
            src={'https://cdn.discordapp.com/avatars/277771753952903168/2b8f6ccd8701030612e925b470a3e246.webp?size=64'}
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <Textarea placeholder="What's happening?" className="resize-none" />
      </div>
      <div className="mx-5 ml-auto cursor-pointer rounded-full bg-blue-500 px-5 py-1.5">
        <span className="font-semibold">Post</span>
      </div>
    </div>
  )
}
