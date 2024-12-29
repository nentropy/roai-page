import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  try {
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const MAILCHIMP_API_SERVER = process.env.MAILCHIMP_API_SERVER

    const data = {
      email_address: email,
      status: 'subscribed',
    }

    const response = await fetch(
      `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )

    if (response.status >= 400) {
      const text = await response.text()
      throw new Error(text)
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred while subscribing to the newsletter.' },
      { status: 500 }
    )
  }
}

