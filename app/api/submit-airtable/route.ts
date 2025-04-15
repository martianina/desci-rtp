export async function POST(req: Request) {
  const body = await req.json()

  const AIRTABLE_API_URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`
  const API_KEY = process.env.AIRTABLE_PAT

  // Fail fast if env vars are missing
  if (!API_KEY || !process.env.AIRTABLE_BASE_ID || !process.env.AIRTABLE_TABLE_NAME) {
    return new Response(
      JSON.stringify({
        error: 'Missing Airtable environment variables',
        AIRTABLE_PAT: !!process.env.AIRTABLE_PAT,
        AIRTABLE_BASE_ID: !!process.env.AIRTABLE_BASE_ID,
        AIRTABLE_TABLE_NAME: !!process.env.AIRTABLE_TABLE_NAME,
      }),
      { status: 500 }
    )
  }

  const payload = {
    fields: {
      'Project Name': body.title,
      'Description': body.description,
      'Image Upload': [body.imgSrc],
      'Website': body.href,
      'Founders': body.founders,
      'Asks': body.asks,
    },
  }

  const response = await fetch(AIRTABLE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(payload),
  })

  const result = await response.json()

  return new Response(JSON.stringify(result), {
    status: response.status,
  })
}
