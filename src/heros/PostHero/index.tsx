import { formatDateTime } from '@/utilities/formatDateTime'
import type { Post } from '@/payload-types'
import { Media } from '@/components/Media'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { type, featuredImage, author, publishedAt, title } = post

  const hasAuthor = author && typeof author === 'object'

  return (
    <div className="relative -mt-[10.4rem] flex items-end px-4 sm:px-6 lg:px-0">
      <div className="container z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-white pb-8 px-4 sm:px-6 lg:px-0">
        <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
          <div className="uppercase text-xs sm:text-sm mb-6">{type}</div>

          <div className="">
            <h1 className="mb-6 max-w-[48rem] text-2xl sm:text-3xl md:text-5xl">{title}</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-16">
            {hasAuthor && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-xs sm:text-sm">Author</p>
                  <p className="text-sm sm:text-base">{author.name}</p>
                </div>
              </div>
            )}
            {publishedAt && (
              <div className="flex flex-col gap-1">
                <p className="text-xs sm:text-sm">Date Published</p>

                <time className="text-sm sm:text-base" dateTime={publishedAt}>
                  {formatDateTime(publishedAt)}
                </time>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="min-h-[80vh] select-none">
        {featuredImage && typeof featuredImage !== 'string' && (
          <Media fill priority imgClassName="-z-10 object-cover" resource={featuredImage} />
        )}
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>
    </div>
  )
}
