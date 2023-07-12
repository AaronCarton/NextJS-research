import TrendItem, { Trend } from '@/components/trends/TrendItem'

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

export default function TrendsList() {
  return (
    <div className="min-h-full grow">
      <div className="m-10 rounded-xl bg-zinc-900 px-4 py-3">
        <div>
          <span className="text-xl font-bold">Trends for you</span>
        </div>
        <div>
          {trends.map((trend) => (
            <TrendItem key={trend.name} trend={trend} />
          ))}
        </div>
      </div>
    </div>
  )
}
