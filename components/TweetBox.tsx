import Image from 'next/image'
import { Textarea } from './ui/textarea'
import mongo from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'

export default function TweetBox() {
  const session = await getServerSession()
  async function postTweet(formData: FormData) {
    'use server'
    console.log(formData)
    await mongo.collection('test').insertOne({
      content: formData.get('tweet'),
      date: new Date(),
      user: { username: session?.user?.name, avatar: session?.user?.image },
    })

    revalidatePath('/')
  }

  return (
    <form action={postTweet}>
      <div className="flex h-36 flex-col gap-3 border-b border-zinc-800 px-4 py-4">
        <div className="flex flex-row">
          <div>
            <Image
              src={
                session?.user?.image ??
                'https://cdn.discordapp.com/avatars/277771753952903168/2b8f6ccd8701030612e925b470a3e246.webp?size=64'
              }
              alt="Profile Picture"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <Textarea name="tweet" placeholder="What's happening?" className="resize-none" />
        </div>
        <button type="submit" className="mx-5 ml-auto cursor-pointer rounded-full bg-blue-500 px-5 py-1.5">
          <span className="font-semibold">Tweet</span>
        </button>
      </div>
    </form>
  )
}
