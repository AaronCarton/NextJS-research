// 'use client'

import Image from 'next/image'
import Dots from '~icons/mdi/dots-horizontal'
import { getServerSession } from 'next-auth'
import { LoginButton, LogoutButton } from './login/buttons'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import default_avatar from '@/assets/default_avatar.webp'

export default async function Button() {
  return (await getServerSession()) ? <ProfileCard /> : <LoginButton />
}

export async function ProfileCard() {
  const session = await getServerSession()
  return (
    <Popover>
      <div className="flex cursor-pointer flex-row items-center rounded-full p-3 transition-colors duration-200 hover:bg-zinc-900">
        <Link className="flex flex-row" href={`/${session?.user?.name}`}>
          <div>
            <Image
              src={session?.user?.image ?? default_avatar}
              alt="Profile Picture"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="ml-3">
            <div className="text-base font-semibold">
              <span>{session?.user?.name}</span>
            </div>
            <div className="text-sm text-gray-500">
              <span>@{session?.user?.name?.toLowerCase()}</span>
            </div>
          </div>
        </Link>
        <div className="ml-auto">
          <PopoverTrigger>
            <Dots className="text-xl" />
          </PopoverTrigger>
        </div>
      </div>
      <PopoverContent className="border-zinc-700 bg-black p-0 text-white">
        <LogoutButton />
      </PopoverContent>
    </Popover>
  )
}
