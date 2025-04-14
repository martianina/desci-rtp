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
    <div className="flex flex-col items-center flex-grow pt-10 space-y-8">
      {/* Project Name */}
      <div className="w-full max-w-lg border border-primary-500 rounded-xl p-6">
        <label className="block text-xl font-bold mb-2">Project Name</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Website */}
      <div className="w-full max-w-lg border border-primary-500 rounded-xl p-6">
        <label className="block text-xl font-bold mb-2">Project Website</label>
        <input
          type="text"
          value={projectWebsite}
          onChange={(e) => setProjectWebsite(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Description */}
      <div className="w-full max-w-lg border border-primary-500 rounded-xl p-6">
        <label className="block text-xl font-bold mb-2">
          Project Description <span className="text-sm">(max 280 chars)</span>
        </label>
        <textarea
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value.slice(0, 280))}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <div className="text-right text-sm text-gray-500">{projectDescription.length}/280</div>
      </div>

      {/* Logo URL */}
      <div className="w-full max-w-lg border border-primary-500 rounded-xl p-6">
        <label className="block text-xl font-bold mb-2">Project Logo</label>
        <input
          type="text"
          value={projectLogo}
          onChange={(e) => setProjectLogo(e.target.value)}
          placeholder="Paste image URL (Google Drive/Public URL)"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Founders */}
      <div className="w-full max-w-lg border border-primary-500 rounded-xl p-6">
        <label className="block text-xl font-bold mb-2">Founders & Socials</label>
        <textarea
          value={projectFounders}
          onChange={(e) => setProjectFounders(e.target.value)}
          placeholder="Names, Twitter, LinkedIn, Telegram (optional)"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Asks */}
      <div className="w-full max-w-lg border border-primary-500 rounded-xl p-6">
        <label className="block text-xl font-bold mb-2">What would you like from DeSci RTP?</label>
        <textarea
          value={projectAsks}
          onChange={(e) => setProjectAsks(e.target.value)}
          placeholder="e.g. collaborators, IRB help, visibility..."
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="px-6 py-3 bg-cyan-700 text-white rounded-md shadow hover:bg-cyan-500"
      >
        Submit Project
      </button>
    </div>
  )
}

export default RegisterPage
