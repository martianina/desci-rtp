'use client'

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Submit Your Project to DeSci RTP
      </h1>

      <iframe
        className="airtable-embed w-full max-w-3xl"
        src="https://airtable.com/embed/appwBKR6pXs4ZcUI4/pagdulmrosmehHJJc/form"
        frameBorder="0"
        width="100%"
        height="800"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
        title="DeSci RTP Project Submission Form"
      ></iframe>
    </div>
  )
}

export default RegisterPage
