import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 6

export default function Home({ posts }) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {siteMetadata.description}
        </h1>
        <p className="text-2xl leading-7 text-gray-800 dark:text-gray-400">
          Exploring the Junior Web Developer's Path
        </p>
        <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
          by {siteMetadata.author}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {posts.slice(0, MAX_DISPLAY).map((post) => {
          const { slug, date, title, summary, tags } = post
          return (
            <div key={slug} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="text-gray-500 mb-2">
                <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                <Link href={`/blog/${slug}`} className="hover:underline">
                  {title}
                </Link>
              </h2>
              <div className="mb-4">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300">{summary}</p>
              <div className="mt-4">
                <Link
                  href={`/blog/${slug}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Read more &rarr;
                </Link>
              </div>
            </div>
          )
        })}
        {posts.length > MAX_DISPLAY && (
          <div className="col-span-full flex justify-center mt-8">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              View All Posts
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
