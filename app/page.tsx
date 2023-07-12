import Timeline from '@/components/Timeline'
import TrendsList from '@/components/trends/TrendsList'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="flex min-h-screen grow justify-between">
      <Timeline />
      <TrendsList />
    </main>
  )
}
