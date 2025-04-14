'use client'

import { useEffect, useState } from 'react'
import Card from '@/components/Card'

export default function Projects() {
  const [submittedProjects, setSubmittedProjects] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('rtp-projects')
    if (stored) setSubmittedProjects(JSON.parse(stored))
  }, [])

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold">Projects</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Community-registered projects
        </p>
      </div>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {submittedProjects.map((d, idx) => (
            <Card
              key={d.title + idx}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
