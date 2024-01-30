export const StarActive = ({ className = 'w-3 h-3 fill-yellow-300 text-yellow-300' }: { className?: string }) => {
  return (
    <svg enableBackground='new 0 0 15 15' viewBox='0 0 15 15' x='0' y='0' className={className}>
      <polygon
        points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
      ></polygon>
    </svg>
  )
}
