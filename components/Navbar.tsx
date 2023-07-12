import Icon from '@/components/Icon'
import Image from 'next/image'
import Logo from '~icons/mdi/twitter'
import Home from '~icons/mdi/home'
import Explore from '~icons/mdi/magnify'
import Notifications from '~icons/mdi/bell-outline'
import Messages from '~icons/mdi/email-outline'
import Bookmarks from '~icons/mdi/bookmark-outline'
import Profile from '~icons/mdi/account-outline'
import More from '~icons/mdi/dots-horizontal-circle-outline'
import Dots from '~icons/mdi/dots-horizontal'

export default function Navbar({ className }: { className?: string }) {
  return (
    <header className={`${className} flex flex-col justify-between`}>
      <div className="">
        <div className="p-3">
          <Logo className="text-2xl" />
        </div>
        <div className="flex flex-col gap-1 text-xl">
          <a href="" className="group">
            <div className="inline-flex items-center rounded-full p-3 transition-colors duration-200 group-hover:bg-zinc-900">
              <Home className="text-2xl" />
              <div className="mx-4 font-semibold">Home</div>
            </div>
          </a>
          <a href="" className="group">
            <div className="inline-flex items-center rounded-full p-3 transition-colors duration-200 group-hover:bg-zinc-900">
              <Explore className="text-2xl" />
              <div className="mx-4">Explore</div>
            </div>
          </a>
          <a href="" className="group">
            <div className="inline-flex items-center rounded-full p-3 transition-colors duration-200 group-hover:bg-zinc-900">
              <Notifications className="text-2xl" />
              <div className="mx-4">Notifications</div>
            </div>
          </a>
          <a href="" className="group">
            <div className="inline-flex items-center rounded-full p-3 transition-colors duration-200 group-hover:bg-zinc-900">
              <Messages className="text-2xl" />
              <div className="mx-4">Messages</div>
            </div>
          </a>
          <a href="" className="group">
            <div className="inline-flex items-center rounded-full p-3 transition-colors duration-200 group-hover:bg-zinc-900">
              <Bookmarks className="text-2xl" />
              <div className="mx-4">Bookmarks</div>
            </div>
          </a>
          <a href="" className="group">
            <div className="inline-flex items-center rounded-full p-3 transition-colors duration-200 group-hover:bg-zinc-900">
              <Profile className="text-2xl" />
              <div className="mx-4">Profile</div>
            </div>
          </a>
          <a href="" className="group">
            <div className="inline-flex items-center rounded-full p-3 transition-colors duration-200 group-hover:bg-zinc-900">
              <More className="text-2xl" />
              <div className="mx-4">More</div>
            </div>
          </a>
          <div className="mx-5 my-3 cursor-pointer rounded-full bg-blue-500 py-3.5 text-center font-semibold">Post</div>
        </div>
      </div>
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
    </header>
  )
}
