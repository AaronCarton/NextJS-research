import Timeline from '@/components/Timeline'
import Trends from '@/components/trends/TrendsBox'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="flex min-h-screen grow justify-between">
      <Timeline />
      <Trends />
    </main>
  )
}
