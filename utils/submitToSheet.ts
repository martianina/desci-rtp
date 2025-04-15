export async function submitToGoogleSheet(project) {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbz6tn1QcRjpcCznlqGBRjVwFgXNvJh7kl04j9swsosC6Vs-94geTUWqGxnehCZfHd-Y/exec',
      {
        method: 'POST',
        body: JSON.stringify(project),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error submitting to Google Sheet:', error)
    return { error: true }
  }
}
