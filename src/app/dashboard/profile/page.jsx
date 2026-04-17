import React from 'react'

const ProfilePage = () => {
  return (
    <div className="max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold">My Profile</h1>
        <p className="text-base-content/70 mt-1">
          Manage your personal information and account settings
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-base-200 rounded-2xl p-6 shadow-sm border border-base-300">
        
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://i.pravatar.cc/150?img=3" alt="profile" />
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-sm text-base-content/70">johndoe@email.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          <div>
            <label className="label">
              <span className="label-text">Full Name</span>
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
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="Enter address"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-end">
          <button className="btn btn-primary rounded-xl px-6">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage