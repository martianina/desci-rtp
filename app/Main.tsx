import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* HERO IMAGE */}
        <div
          className="h-64 w-full bg-cover bg-center sm:h-80 md:h-96"
          style={{
            backgroundImage: "url('/hero.png')",
          }}
        />

        {/* TITLE + DESCRIPTION */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            DeSci RTP
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>

        {/* PORTAL OVERVIEW */}
        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <p>
            <strong>DeSci RTP</strong> is a community-built portal for researchers, founders,
            funders, and policy minds working at the edge of decentralized science.
          </p>
          <p>
            We're building a hub for collaboration, credibility, and opportunity — starting with a
            local network here in the Research Triangle, and growing outward.
          </p>
          <p>
            DeSci RTP offers contributors, visibility, career paths, and funding navigation by
            linking science with community and technology in a region known for evidence-based
            innovation.
          </p>
        </div>

        {/* FEATURED POSTS SECTION */}
        <div className="mx-auto mt-12 max-w-5xl">
          <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">The Triangle of Innovation</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-6">
            <Link
              href="/blog/rtp-was-a-lab-blockchain-is-the-protocol/rtp-was-a-lab-blockchain-is-the-protocol"
              className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition block"
            >
              <img
                src="/blog/rtp-was-a-lab-blockchain-is-the-protocol.jpg"
                alt="RTP Was a Lab. Blockchain Is the Protocol."
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  RTP Was a Lab. Blockchain Is the Protocol.
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  How a pine forest experiment in North Carolina reshaped global research—and how
                  blockchain is picking up where it left off.
                </p>
              </div>
            </Link>

            <Link
              href="/blog/what-desci-and-tradsci-should-know-about-each-other/what-desci-and-tradsci-should-know-about-each-other"
              className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition block"
            >
              <img
                src="/blog/what-desci-and-tradsci-should-know-about-each-other.jpg"
                alt="What DeSci and TradSci Should Know About Each Other"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  What DeSci and TradSci Should Know About Each Other
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  DeSci is not a rebellion—it is a system upgrade. Academia is not obsolete—it is an under-optimized network.
                </p>
              </div>
            </Link>
          </div>
        </div>
        {/* SURVEY CALL TO ACTION */}
<div className="mx-auto my-12 max-w-3xl rounded-lg border border-gray-300 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-900">
  <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">
    Help Shape DeSci RTP
  </h2>
  <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
    We’re mapping the ecosystem, surfacing opportunities, and building a better future for decentralized science in the Triangle—and beyond.
  </p>
  <div className="flex justify-center">
    <a
      href="https://airtable.com/app5RcQzg3MKW3iWc/pagaVVANnv5YNUMIp/form"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-md bg-primary-600 px-6 py-3 text-white font-semibold shadow hover:bg-primary-500"
    >
      Take the Survey
    </a>
  </div>
</div>


        {/* BLOG LIST */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {/* PAGINATION + NEWSLETTER */}
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
