import { NextResponse } from 'next/server'
import mongo from '@/lib/mongodb'

export async function GET() {
  mongo.collection('test').insertOne({ test: 'test' })

  return NextResponse.json({ message: 'Hello from the API!' })
}
