export const metadata = {
  title: "About",
  description: "About Section",
};



import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="bg-base-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">

        <div className="space-y-5">
          <div className="badge badge-primary badge-outline">About Us</div>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Fresh Flowers, Meaningful Moments, and Reliable Delivery
          </h2>

          <p className="text-base leading-7 text-base-content/70 sm:text-lg">
            We believe flowers are more than simple gifts. They help people express
            love, celebrate milestones, offer comfort, and create unforgettable
            memories. Our goal is to make every bouquet feel special from the moment
            it is prepared until it reaches the recipient.
          </p>

          <p className="text-base leading-7 text-base-content/70 sm:text-lg">
            From elegant roses to cheerful mixed bouquets, we carefully design each
            arrangement to match every occasion. Whether you are sending flowers for
            birthdays, anniversaries, congratulations, sympathy, or just because,
            we make it easy to deliver heartfelt surprises with style and care.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button className="btn btn-primary">Shop Now</button>
            <Link className="btn btn-soft" href="/about/developers">Learn More</Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-primary/10 p-6 shadow-md">
            <h3 className="text-2xl font-bold text-primary">Fresh</h3>
            <p className="mt-2 text-sm leading-6 text-base-content/70">
              Carefully arranged flowers prepared to look beautiful and presentable.
            </p>
          </div>

          <div className="rounded-2xl bg-secondary/10 p-6 shadow-md">
            <h3 className="text-2xl font-bold text-secondary">Fast</h3>
            <p className="mt-2 text-sm leading-6 text-base-content/70">
              Smooth and dependable delivery for important celebrations and moments.
            </p>
          </div>

          <div className="rounded-2xl bg-accent/10 p-6 shadow-md">
            <h3 className="text-2xl font-bold text-accent">Thoughtful</h3>
            <p className="mt-2 text-sm leading-6 text-base-content/70">
              Bouquets designed to match different emotions, styles, and occasions.
            </p>
          </div>

          <div className="rounded-2xl bg-base-200 p-6 shadow-md">
            <h3 className="text-2xl font-bold">Trusted</h3>
            <p className="mt-2 text-sm leading-6 text-base-content/70">
              A simple flower gifting experience focused on quality and customer
              satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page