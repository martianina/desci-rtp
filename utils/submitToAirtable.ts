export async function submitToAirtable(project) {
  const payload = {
    title: project.title,
    description: project.description,
    imgSrc: project.imgSrc,
    href: project.href,
    founders: project.founders,
    asks: project.asks,
  }

  try {
    const response = await fetch('/api/submit-airtable', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('API Route Error:', errorText)
      return { error: true }
    }

    return await response.json()
  } catch (err) {
    console.error('Fetch to API route failed:', err)
    return { error: true }
  }
}
