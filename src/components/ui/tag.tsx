import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/ui'

interface TagProps {
  className?: string
  type: 'product' | 'industry' | 'research' | 'sustainability'
  children: React.ReactNode
}

const tagTypes = {
  product: 'bg-blue-500 text-white hover:bg-blue-600',
  industry: 'bg-[#FF5733] text-white hover:bg-[#FF5733]/80',
  research: 'bg-purple-500 text-white hover:bg-purple-600',
  sustainability: 'bg-green-500 text-white hover:bg-green-600',
}

export default function Tag({ className, type, children }: TagProps) {
  return (
    <Badge variant="secondary" className={cn(tagTypes[type], className)}>
      {children}
    </Badge>
  )
}
