import FeedbackCard from './components/FeedbackCard'
import RatingCard from './components/RatingCard'
import TitleCard from './components/TitleCard'

import Anne from './images/image-anne.jpg'
import Colton from './images/image-colton.jpg'
import Irene from './images/image-irene.jpg'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-16 bg-white px-8 py-16 xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:px-72 xl:pt-32">
      <section className="flex xl:items-center xl:justify-start">
        <TitleCard />
      </section>
      <section className="flex flex-col items-center justify-center gap-4 xl:items-end">
        <RatingCard margin="xl:mr-32" text="Rated 5 Stars in Reviews" />
        <RatingCard margin="xl:mr-16" text="Rated 5 Stars in Report Guru" />
        <RatingCard text="Rated 5 Stars in BestTech" />
      </section>
      <section className="flex flex-col gap-4 xl:col-span-full xl:flex-row xl:gap-12">
        <FeedbackCard
          image={Colton}
          name="Colton Smith"
          text="We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent!"
        />
        <FeedbackCard
          margin="xl:mt-5"
          image={Irene}
          name="Irene Roberts"
          text="Customer service is always excellent and very quick turn around. Completely
          delighted with the simplicity of the purchase and the speed of delivery."
        />
        <FeedbackCard
          margin="xl:mt-10"
          image={Anne}
          name="Anne Wallace"
          text="Put an order with this company and can only praise them for the very high
          standard. Will definitely use them again and recommend them to everyone!"
        />
      </section>
    </main>
  )
}
