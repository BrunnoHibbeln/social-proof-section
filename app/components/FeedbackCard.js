import Image from 'next/image'

export default function FeedbackCard({ margin, image, alt, name, text }) {
  return (
    <section
      className={`flex flex-col gap-5 rounded-xl bg-dark-magenta p-8 xl:h-fit xl:w-[31.5rem] ${margin}`}
    >
      <section className="flex flex-row gap-5">
        <Image className="h-10 w-10 rounded-full" src={image} alt={alt} />
        <article className="flex flex-col items-center justify-center">
          <strong className="text-light-magenta">{name}</strong>
          <span className="text-pink">Verified Buyer</span>
        </article>
      </section>
      <p className="text-body font-medium tracking-tighter text-light-magenta">
        “ {text} ”
      </p>
    </section>
  )
}
