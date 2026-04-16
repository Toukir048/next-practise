import Link from "next/link";

const HomePage = () => {
  const featuredBlogs = [
    {
      id: 1,
      title: "Top 7 Reasons Why Flowers Make the Perfect Gift",
      desc: "Discover why flowers remain one of the most thoughtful and timeless gifts for every special moment.",
    },
    {
      id: 2,
      title: "How to Choose the Right Bouquet for Every Occasion",
      desc: "Learn how to pick the perfect bouquet based on the celebration, message, and recipient.",
    },
    {
      id: 3,
      title: "Same-Day Flower Delivery: What Customers Need to Know",
      desc: "A quick guide to help customers order flowers smoothly and confidently for urgent occasions.",
    },
  ];

  return (
    <div className="bg-base-100">
      <section className="hero min-h-[85vh] bg-base-200">
        <div className="hero-content flex-col gap-10 lg:flex-row-reverse max-w-6xl">

          <div className="w-full lg:w-1/2">
            <div className="badge badge-primary badge-outline mb-4">
              Welcome
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Fresh Flowers for Every Special Occasion
            </h1>
            <p className="py-6 text-base leading-8 text-base-content/70 sm:text-lg">
              Celebrate life’s moments with beautiful flower arrangements,
              thoughtful gifts, and reliable service. From birthdays and
              anniversaries to sympathy and congratulations, make every delivery
              feel meaningful and memorable.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/about/blogs" className="btn btn-primary">
                Explore Blogs
              </Link>
              <Link href="/contact" className="btn btn-soft">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="badge badge-secondary badge-outline mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Designed to Make Flower Gifting Easy
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base-content/70">
              We combine fresh arrangements, a smooth ordering experience, and
              dependable service to help you send flowers with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="card bg-base-200 shadow-md border border-base-300">
              <div className="card-body">
                <h3 className="card-title">Fresh Arrangements</h3>
                <p className="text-base-content/70">
                  Bouquets prepared to look elegant, vibrant, and presentable.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-md border border-base-300">
              <div className="card-body">
                <h3 className="card-title">Same-Day Support</h3>
                <p className="text-base-content/70">
                  Great for urgent flower gifting and last-minute celebrations.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-md border border-base-300">
              <div className="card-body">
                <h3 className="card-title">Occasion Ready</h3>
                <p className="text-base-content/70">
                  Perfect for birthdays, love, sympathy, thanks, and more.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-md border border-base-300">
              <div className="card-body">
                <h3 className="card-title">Easy Ordering</h3>
                <p className="text-base-content/70">
                  Simple navigation and quick access to the information you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-200 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <div className="badge badge-accent badge-outline mb-4">
                Latest Articles
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl">Featured Blogs</h2>
              <p className="mt-3 text-base-content/70 max-w-2xl">
                Read useful flower gifting guides, bouquet ideas, and delivery tips.
              </p>
            </div>

            <Link href="/about/blogs" className="btn btn-outline btn-primary">
              View All Blogs
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {featuredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="card bg-base-100 shadow-lg border border-base-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="card-body">
                  <div className="badge badge-ghost w-fit">Blog #{blog.id}</div>
                  <h3 className="card-title text-xl leading-snug">{blog.title}</h3>
                  <p className="text-base-content/70">{blog.desc}</p>
                  <div className="card-actions justify-end mt-4">
                    <Link
                      href={`/about/blogs/${blog.id}`}
                      className="btn btn-info btn-outline btn-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-primary text-primary-content p-8 text-center shadow-xl sm:p-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Make Every Flower Delivery More Meaningful
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-content/80">
            Explore our blog, meet our team, and get in touch to create a better
            flower gifting experience for every celebration.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/about/developer" className="btn btn-neutral">
              Meet Developers
            </Link>
            <Link href="/contact" className="btn btn-soft">
              Contact Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;