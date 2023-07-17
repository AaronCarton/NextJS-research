import { Suspense } from 'react'
import LoadingSpinner from '../LoadingSpinner'
import TrendsList from './TrendsList'

export default function TrendsBox() {
  return (
    <div className="min-h-full grow">
      <div className="m-10 rounded-xl bg-zinc-900 px-4 py-3">
        <div>
          <span className="text-xl font-bold">Trends for you</span>
        </div>
        <div>
          <Suspense fallback={<LoadingSpinner />}>
            <TrendsList />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
