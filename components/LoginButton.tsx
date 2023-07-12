// 'use client'

import Image from 'next/image'
import Dots from '~icons/mdi/dots-horizontal'
import { getServerSession } from 'next-auth'
import { LoginButton } from './login/buttons'

export default async function Button() {
  return (await getServerSession()) ? <ProfileCard /> : <LoginButton />
}

export function ProfileCard() {
  return (
    <a href="" className="flex flex-row items-center p-3">
      <div>
        <Image
          src={'https://cdn.discordapp.com/avatars/277771753952903168/2b8f6ccd8701030612e925b470a3e246.webp?size=64'}
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="ml-3">
        <div className="text-base font-semibold">
          <span>Username</span>
        </div>
        <div className="text-sm text-gray-500">
          <span>@username</span>
        </div>
      </div>
      <div className="ml-auto">
        <Dots className="text-xl" />
      </div>
    </a>
  )
}
