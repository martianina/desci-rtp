import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <div className="prose dark:prose-invert max-w-none pb-8">
        <h2>What is DeSci?</h2>
        <p>
          DeSci (Decentralized Science) is a global movement to rebuild science from the ground up—open, transparent,
          interoperable, and driven by the needs of researchers and communities rather than gatekeepers and silos.
          It aims to democratize access to funding, data, and participation in research using emerging technologies,
          especially blockchain, data sovereignty protocols, and peer-based collaboration tools.
        </p>

        <h2>Why the Research Triangle?</h2>
        <p>
          The Research Triangle—anchored by Raleigh, Durham, and Chapel Hill—is one of the world’s most active scientific
          and innovation ecosystems. With its network of universities, startups, biotech labs, and policy hubs, RTP is the
          ideal proving ground for a locally rooted, globally connected DeSci platform. We’re building this portal to
          connect, support, and showcase the decentralized research projects emerging right here in our community.
        </p>

        <h2>Our Purpose</h2>
        <p>
          DeSci RTP exists to support scientists, builders, and community leaders who want to shape the future of research.
          Whether you’re running a decentralized clinical trial, experimenting with open data, or simply looking to connect
          with others in the space, we’re here to help. This is your launchpad.
        </p>
      </div>
      <div className="prose dark:prose-invert max-w-none pb-4">
  <h2 className="text-4xl font-bold mt-8 mb-2">Team</h2>
</div>


      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
