import TrendItem, { Trend } from '@/components/trends/TrendItem'
import { Suspense } from 'react'
import LoadingSpinner from '../LoadingSpinner'

const trends: Trend[] = [
  {
    name: 'Samus',
    type: 'Action-adventure games',
    tweets: 4286,
  },
  {
    name: 'Kirby',
    type: 'Gaming',
    tweets: 4286,
  },
  {
    name: 'Wii U',
    type: 'Gaming',
    tweets: 4286,
  },
  {
    name: '1Password',
    type: 'Trending',
    tweets: 4286,
  },
]

export default async function TrendsList() {
  const trendList: Trend[] = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(trends)
    }, 6000)
  })
  return trendList.map((trend) => <TrendItem key={trend.name} trend={trend} />)
}
