import { NextResponse } from 'next/server'
import { dbConnect } from '../../../lib/db/connect'
import Microsite from '../../../lib/db/models/microsites'

export async function POST(req) {
  const body = req.json()
  await dbConnect()

  if (body) {
    try {
      const microsite = await Microsite.create(body)
      return NextResponse.json(
        { message: 'Microsites POST :: Microsite created', data: microsite },
        { status: 200 }
      )
    } catch (error) {
      return NextResponse.json(
        { error: 'Microsites POST :: Invalid microsite' },
        { status: 400 }
      )
    }
  }

  return NextResponse.json(
    { error: 'Microsites POST :: Bad request' },
    { status: 400 }
  )
}
