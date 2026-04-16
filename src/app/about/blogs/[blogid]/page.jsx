import React from 'react'

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

const BlogDetailPage = async ({ params }) => {
    const { blogid } = await params;
    const blog = blogs.find(blog => blog.id === parseInt(blogid));
    console.log("show me params", blog)

    return (
        <div>
            
            {blog && (
                <div className="w-full max-w-3xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                    <div className="card bg-base-100 border border-base-300 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                        <div className="card-body p-5 sm:p-6 md:p-8">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                                <div className="badge badge-primary badge-outline">Blog Post</div>
                                <div className="badge badge-ghost">By {blog.author}</div>
                                <div className="badge badge-secondary badge-outline">{blog.date}</div>
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight transition-colors duration-300 hover:text-primary">
                                {blog.title}
                            </h2>

                            <p className="mt-4 text-sm sm:text-base md:text-lg leading-7 text-base-content/80">
                                {blog.content}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {blog.tages.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="badge badge-accent badge-outline px-3 py-3 text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default BlogDetailPage