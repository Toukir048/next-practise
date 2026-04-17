import React from 'react'

const DesignerPage = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold lg:text-3xl">Designer Workspace</h1>
        <p className="mt-1 text-base-content/70">
          Manage creative projects, design tasks, and recent artwork updates from one place.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-base-300 bg-base-200 p-5 shadow-sm">
          <p className="text-sm text-base-content/70">Active Projects</p>
          <h3 className="mt-2 text-3xl font-bold">18</h3>
          <p className="mt-2 text-sm text-success">+3 this week</p>
        </div>

        <div className="rounded-2xl border border-base-300 bg-base-200 p-5 shadow-sm">
          <p className="text-sm text-base-content/70">Pending Reviews</p>
          <h3 className="mt-2 text-3xl font-bold">7</h3>
          <p className="mt-2 text-sm text-warning">Need feedback</p>
        </div>

        <div className="rounded-2xl border border-base-300 bg-base-200 p-5 shadow-sm">
          <p className="text-sm text-base-content/70">Completed Designs</p>
          <h3 className="mt-2 text-3xl font-bold">46</h3>
          <p className="mt-2 text-sm text-info">This month</p>
        </div>

        <div className="rounded-2xl border border-base-300 bg-base-200 p-5 shadow-sm">
          <p className="text-sm text-base-content/70">New Requests</p>
          <h3 className="mt-2 text-3xl font-bold">12</h3>
          <p className="mt-2 text-sm text-success">Updated today</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-base-300 bg-base-200 p-5 shadow-sm lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Design Tasks</h2>
            <button className="btn btn-sm btn-ghost">View All</button>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Client</th>
                  <th>Status</th>
                  <th>Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Homepage Redesign</td>
                  <td>Studio Nova</td>
                  <td>
                    <span className="badge badge-info">In Progress</span>
                  </td>
                  <td>Apr 20</td>
                </tr>
                <tr>
                  <td>Brand Kit</td>
                  <td>Pixel Craft</td>
                  <td>
                    <span className="badge badge-warning">Review</span>
                  </td>
                  <td>Apr 22</td>
                </tr>
                <tr>
                  <td>Mobile App UI</td>
                  <td>Creative Flow</td>
                  <td>
                    <span className="badge badge-success">Completed</span>
                  </td>
                  <td>Apr 16</td>
                </tr>
                <tr>
                  <td>Social Media Banner</td>
                  <td>Bloom Media</td>
                  <td>
                    <span className="badge badge-secondary">Draft</span>
                  </td>
                  <td>Apr 19</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-base-300 bg-base-200 p-5 shadow-sm">
          <h2 className="text-xl font-semibold">Quick Actions</h2>

          <div className="mt-4 space-y-3">
            <button className="btn btn-primary w-full rounded-xl">New Project</button>
            <button className="btn btn-outline w-full rounded-xl">Upload Design</button>
            <button className="btn btn-outline w-full rounded-xl">Client Feedback</button>
          </div>

          <div className="mt-6 rounded-2xl border border-base-300 bg-base-100 p-4">
            <p className="text-sm text-base-content/70">Creative Note</p>
            <p className="mt-2 text-sm">
              Focus on review deadlines first, then move completed concepts into final delivery to keep the workflow smooth.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignerPage