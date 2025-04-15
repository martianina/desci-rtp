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
    <div className="flex flex-grow flex-col items-center justify-center px-4 pt-10">
      <div className="mb-8 w-full max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
          DeSci RTP
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">Preview</p>
      </div>

      {latestProject ? (
        <div className="flex w-full justify-center">
          <div className="w-full max-w-[544px]">
            <Card
              title={latestProject.title}
              description={latestProject.description}
              imgSrc={latestProject.imgSrc}
              href={null}
            />
            <div className="mt-6 text-center">
              <Link
                href="/projects"
                className="bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 inline-block rounded-md px-6 py-3 text-white shadow"
              >
                Submit
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
