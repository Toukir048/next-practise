export const metadata = {
  title: "Contact",
  description: "Contact us section",
};


import React from 'react'

const ContactPage = () => {
  return (
    <div className="bg-base-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="badge badge-primary badge-outline mb-4">Contact Us</div>
          <h1 className="text-3xl sm:text-4xl font-bold">Let’s Get In Touch</h1>
          <p className="mt-3 max-w-2xl mx-auto text-base-content/70">
            Have a question, project idea, or feedback? Fill out the form below
            and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-base-300 bg-base-200 p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            <form className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-32"
                  placeholder="Write your message here"
                ></textarea>
              </div>

              <button className="btn btn-primary w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-base-300 bg-base-200 p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Contact Information</h3>
              <p className="text-base-content/70 leading-7">
                Reach out to us for support, business inquiries, or collaboration.
                We are always happy to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="mt-2 text-base-content/70">support@example.com</p>
              </div>

              <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="mt-2 text-base-content/70">+880 1234-567890</p>
              </div>

              <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
                <h4 className="font-semibold text-lg">Address</h4>
                <p className="mt-2 text-base-content/70">
                  123 Business Street, Dhaka, Bangladesh
                </p>
              </div>

              <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
                <h4 className="font-semibold text-lg">Working Hours</h4>
                <p className="mt-2 text-base-content/70">
                  Sat - Thu: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-base-300 bg-primary text-primary-content p-6 shadow-md">
              <h3 className="text-xl font-bold">Need Quick Help?</h3>
              <p className="mt-2 leading-7 text-primary-content/80">
                Our team is ready to answer your questions and help you find the
                right solution for your needs.
              </p>
              <button className="btn btn-base mt-4">Chat With Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage
