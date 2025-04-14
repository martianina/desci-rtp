'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const RegisterPage = () => {
  const [projectName, setProjectName] = useState('')
  const [projectWebsite, setProjectWebsite] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectLogo, setProjectLogo] = useState('')
  const [projectFounders, setProjectFounders] = useState('')
  const [projectAsks, setProjectAsks] = useState('')

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    const newProject = {
      title: projectName,
      description: projectDescription.slice(0, 280),
      imgSrc: projectLogo,
      href: projectWebsite,
      founders: projectFounders,
      asks: projectAsks,
    }

    const existing = JSON.parse(localStorage.getItem('rtp-projects') || '[]')
    localStorage.setItem('rtp-projects', JSON.stringify([...existing, newProject]))

    router.push('/claim-dsci')
  }

  return (
    <div className="flex flex-grow flex-col items-center space-y-8 pt-10">
      {/* Project Name */}
      <div className="border-primary-500 w-full max-w-lg rounded-xl border p-6">
        <label className="mb-2 block text-xl font-bold">Project Name</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      {/* Website */}
      <div className="border-primary-500 w-full max-w-lg rounded-xl border p-6">
        <label className="mb-2 block text-xl font-bold">Project Website</label>
        <input
          type="text"
          value={projectWebsite}
          onChange={(e) => setProjectWebsite(e.target.value)}
          className="w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      {/* Description */}
      <div className="border-primary-500 w-full max-w-lg rounded-xl border p-6">
        <label className="mb-2 block text-xl font-bold">
          Project Description <span className="text-sm">(max 280 chars)</span>
        </label>
        <textarea
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value.slice(0, 280))}
          className="w-full rounded-md border border-gray-300 p-2"
        />
        <div className="text-right text-sm text-gray-500">{projectDescription.length}/280</div>
      </div>

      {/* Logo URL */}
      <div className="border-primary-500 w-full max-w-lg rounded-xl border p-6">
        <label className="mb-2 block text-xl font-bold">Project Logo</label>
        <input
          type="text"
          value={projectLogo}
          onChange={(e) => setProjectLogo(e.target.value)}
          placeholder="Paste image URL (Google Drive/Public URL)"
          className="w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      {/* Founders */}
      <div className="border-primary-500 w-full max-w-lg rounded-xl border p-6">
        <label className="mb-2 block text-xl font-bold">Founders & Socials</label>
        <textarea
          value={projectFounders}
          onChange={(e) => setProjectFounders(e.target.value)}
          placeholder="Names, Twitter, LinkedIn, Telegram (optional)"
          className="w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      {/* Asks */}
      <div className="border-primary-500 w-full max-w-lg rounded-xl border p-6">
        <label className="mb-2 block text-xl font-bold">What would you like from DeSci RTP?</label>
        <textarea
          value={projectAsks}
          onChange={(e) => setProjectAsks(e.target.value)}
          placeholder="e.g. collaborators, IRB help, visibility..."
          className="w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="rounded-md bg-cyan-700 px-6 py-3 text-white shadow hover:bg-cyan-500"
      >
        Submit Project
      </button>
    </div>
  )
}

export default RegisterPage
