import { StarActive, StarNonActive } from '@/assets'

export const ProductRating = ({
  rating,
  activeClassname,
  nonActiveClassname
}: {
  rating: number
  activeClassname?: string
  nonActiveClassname?: string
}) => {
  const handleWidth = (order: number) => {
    if (order <= rating) {
      return '100%'
    }
    if (order > rating && order - rating < 1) {
      return (rating - Math.floor(rating)) * 100 + '%'
    }

    return '0%'
  }
  return (
    <div className='flex items-center'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div className='relative' key={index}>
            <div className='absolute top-0 left-0 h-full overflow-hidden' style={{ width: handleWidth(index + 1) }}>
              <StarActive className={activeClassname} />
            </div>
            <StarNonActive className={nonActiveClassname} />
          </div>
        ))}
    </div>
  )
}
