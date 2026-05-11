import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  if (!body.name || !body.email || !body.phone) {
    return Response.json(
      { success: false, message: 'Name, email, and phone are required.' },
      { status: 400 }
    )
  }

  return Response.json({
    success: true,
    message: 'Your message has been received. We will be in touch within 2 business hours.',
  })
}
