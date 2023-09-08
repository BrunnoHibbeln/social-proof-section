import Image from 'next/image'

export default function FeedbackCard({ margin, image, name, text }) {
  return (
    <section
      className={`flex flex-col gap-8 rounded-xl bg-dark-magenta p-8 xl:h-80 xl:w-[31rem] xl:p-12 ${margin}`}
    >
      <section className="flex flex-row gap-5">
        <Image className="w-14 rounded-full" src={image} alt="Colton's Photo" />
        <article className="flex flex-col items-center justify-center">
          <strong className="text-light-magenta xl:text-lg">{name}</strong>
          <span className="text-pink xl:text-lg">Verified Buyer</span>
        </article>
      </section>
      <p className="text-body font-bold text-light-magenta xl:text-lg">
        “ {text} ”
      </p>
    </section>
  )
}
