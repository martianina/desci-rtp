'use client'

import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Card from '@/components/Card'
import Link from '@/components/Link'

// Add Project type
type Project = {
  title: string
  description: string
  imgSrc?: string
  href?: string
  founders?: string
  asks?: string
}

const ClaimDsci: NextPage = () => {
  const [latestProject, setLatestProject] = useState<Project | null>(null)

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('rtp-projects') || '[]')
    if (stored.length > 0) {
      setLatestProject(stored[stored.length - 1])
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center flex-grow pt-10 px-4">
      <div className="max-w-2xl w-full text-center mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
          DeSci RTP
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">Preview</p>
      </div>

      {latestProject ? (
        <div className="w-full flex justify-center">
          <div className="max-w-[544px] w-full">
            <Card
              title={latestProject.title}
              description={latestProject.description}
              imgSrc={latestProject.imgSrc}
              href={null}
            />
            <div className="text-center mt-6">
              <Link
                href="/projects"
                className="inline-block bg-primary-500 text-white px-6 py-3 rounded-md shadow hover:bg-primary-600 dark:hover:bg-primary-400"
              >
                Submit Another Project
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-400">
          No project submitted yet.
        </div>
      )}
    </div>
  )
}

export default ClaimDsci
