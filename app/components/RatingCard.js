import StarIcon from './StarIcon'

export default function RatingCard({ text, margin }) {
  return (
    <section
      className={`flex w-full flex-col items-center justify-center gap-3 rounded-xl bg-light-magenta px-5 py-4 xl:w-[28rem] xl:flex-row xl:justify-start xl:gap-10 xl:px-8 xl:py-5 ${margin}`}
    >
      <StarIcon />
      <strong className="text-dark-magenta xl:text-base">{text}</strong>
    </section>
  )
}
