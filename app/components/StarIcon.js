import Image from 'next/image'

import Star from '../images/icon-star.svg'

export default function StarIcon() {
  return (
    <section className="flex flex-row gap-2">
      <Image className="xl:w-4" src={Star} alt="Star Icon" />
      <Image className="xl:w-4" src={Star} alt="Star Icon" />
      <Image className="xl:w-4" src={Star} alt="Star Icon" />
      <Image className="xl:w-4" src={Star} alt="Star Icon" />
      <Image className="xl:w-4" src={Star} alt="Star Icon" />
    </section>
  )
}
