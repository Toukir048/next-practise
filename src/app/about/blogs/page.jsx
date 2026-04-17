export const metadata = {
  title: "Blogs",
  description: "Blog Pages",
};


import Link from 'next/link';
import React from 'react'

const BlogsPage = () => {
  const blogs = [
    {
      "id": 1,
      "title": "Top 7 Reasons Why Flowers Make the Perfect Gift",
      "author": "Admin",
      "date": "2026-04-17",
      "tages": ["flowers", "gift-ideas", "special-occasions"],
      "content": "Flowers are one of the most meaningful gifts for any occasion. They express love, appreciation, sympathy, and celebration in a natural and elegant way. Whether for birthdays, anniversaries, or simple surprises, flowers remain a timeless choice."
    },
    {
      "id": 2,
      "title": "How to Choose the Right Bouquet for Every Occasion",
      "author": "Admin",
      "date": "2026-04-17",
      "tages": ["bouquet", "flower-guide", "occasions"],
      "content": "Choosing the right bouquet depends on the occasion, the recipient, and the message you want to send. Romantic events often call for roses, while cheerful celebrations are perfect for sunflowers or mixed flowers. Understanding flower meanings helps make every gift more thoughtful."
    },
    {
      "id": 3,
      "title": "Same-Day Flower Delivery: What Customers Need to Know",
      "author": "Admin",
      "date": "2026-04-17",
      "tages": ["same-day-delivery", "flower-delivery", "customer-guide"],
      "content": "Same-day flower delivery is a convenient option for last-minute gifts and urgent occasions. Customers should place orders early, provide accurate delivery details, and choose available arrangements for faster processing. This service helps make special moments easier and more memorable."
    },
    {
      "id": 4,
      "title": "Best Flowers for Birthdays, Anniversaries, and Sympathy",
      "author": "Admin",
      "date": "2026-04-17",
      "tages": ["birthday-flowers", "anniversary-flowers", "sympathy-flowers"],
      "content": "Different occasions call for different flower arrangements. Bright and colorful bouquets work well for birthdays, red roses are a classic anniversary gift, and white lilies are often chosen for sympathy messages. Picking the right flowers makes the gesture more personal and meaningful."
    }
  ];
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Blogs</h2>
          <p className="mt-2 text-base-content/70 text-sm sm:text-base">
            Read our latest flower blog posts, gift ideas, and delivery tips.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="card bg-base-100 border border-base-300 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="card-body">
                <div className="flex items-center justify-between gap-3">
                  <span className="badge badge-primary badge-outline">Blog #{blog.id}</span>
                  <span className="text-sm text-base-content/60">{blog.date}</span>
                </div>

                <h3 className="card-title text-xl leading-snug mt-2 min-h-16">
                  {blog.title}
                </h3>

                <p className="text-sm text-base-content/70">
                  By {blog.author}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {blog.tages?.map((tag, index) => (
                    <span key={index} className="badge badge-ghost">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="card-actions justify-end mt-5">
                  <Link
                    href={`/about/blogs/${blog.id}`}
                    className="btn btn-info btn-outline btn-sm sm:btn-md"
                  >
                    Show Data
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogsPage