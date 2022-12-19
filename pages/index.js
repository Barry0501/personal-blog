import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import ListActivities from '@/layouts/ListActivities'

const MAX_DISPLAY = 6

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi 🙌, I'm{' '}
              <span className="text-primary-color-500 dark:text-primary-color-dark-500">
                Tung Duong
              </span>
            </h1>
            <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
              {`Chào mừng bạn đến Blog cá nhân của mình. Đây là nơi mình sẽ chia sẻ về coding & cuộc sống "lowkey" của mình.`}
            </h2>
            <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
              Tính tới thời điểm mình bắt đầu đi làm từ năm 2 đến giờ mình cũng có "của riêng" mình
              6 năm lập trình Mobile App (React Native & Flutter), "một chút" về Blockchain và bây
              giờ mình đang trải nghiệm làm Front-end React Developer xem như thế nào.
            </h2>
            <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
              Mình xây dựng Blog này để "va chạm" sâu sát với NextJS và để note lại những kiến thức
              mà mình đã được học, trải nghiệm qua mỗi ngày.
            </h2>
          </div>
          <ListActivities />
        </div>
        <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Latest
        </h2>
        <hr className="border-gray-200 dark:border-gray-700" />
        <ul>
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <Link
                href={`/blog/${slug}`}
                key={slug}
                className="group flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <li key={slug} className="py-6">
                  <article className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-3">
                    <dl>
                      <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                        {/* {' • '}
                        <ViewCounter className="mx-1" slug={slug} />
                        views */}
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-4">
                      <div className="space-y-1">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <div className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500">
                              {title}
                            </div>
                          </h2>
                        </div>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                        <div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end pt-5 text-lg font-normal leading-6">
          <Link
            href="/blog"
            className=" special-underline-new text-primary-500 hover:text-gray-100 hover:no-underline dark:text-primary-500 hover:dark:text-gray-100"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">{/* <NewsletterForm /> */}</div>
      )}
    </>
  )
}
