import Dots from '~icons/mdi/dots-horizontal'

export interface Trend {
  name: string
  type: string
  tweets: number
}

export default function TrendItem({ trend }: { trend: Trend }) {
  return (
    <div className="my-4 flex flex-col">
      <div className="flex flex-row justify-between">
        <span className="text-xs text-gray-400">{trend.type}</span>
        <Dots className="text-xl text-zinc-500" />
      </div>
      <span className="text-base font-semibold">{trend.name}</span>
      <span className="text-xs text-gray-400">{trend.tweets} Tweets</span>
    </div>
  )
}
