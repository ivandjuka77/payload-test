import clsx from 'clsx'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export default function Logo(props: Props) {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Payload Logo"
      width={250}
      height={60}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[15.625rem] w-full h-[60px]', className)}
      src={'/assets/logo-vup.png'}
    />
  )
}
