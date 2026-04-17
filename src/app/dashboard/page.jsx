import React from 'react'

const DashboardPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold">Dashboard Overview</h1>
        <p className="mt-1 text-base-content/70">
          Welcome back. Here is a quick summary of your account activity and recent updates.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-base-300 bg-base-200 p-5 shadow-sm">
          <p className="text-sm text-base-content/70">Total Orders</p>
          <h3 className="mt-2 text-3xl font-bold">124</h3>
          <p className="mt-2 text-sm text-success">+12% from last month</p>
        </div>

        <div className="rounded-2xl border border-base-300 bg-base-200 p-5 shadow-sm">
          <p className="text-sm text-base-content/70">Revenue</p>
          <h3 className="mt-2 text-3xl font-bold">$8,450</h3>
          <p className="mt-2 text-sm text-success">+8.4% growth</p>
        </div>

        <div className="rounded-2xl border border-base-300 bg-base-200 p-5 shadow-sm">
          <p className="text-sm text-base-content/70">New Customers</p>
          <h3 className="mt-2 text-3xl font-bold">36</h3>
          <p className="mt-2 text-sm text-info">This week</p>
        </div>

        <div className="rounded-2xl border border-base-300 bg-base-200 p-5 shadow-sm">
          <p className="text-sm text-base-content/70">Pending Deliveries</p>
          <h3 className="mt-2 text-3xl font-bold">9</h3>
          <p className="mt-2 text-sm text-warning">Need attention</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-base-300 bg-base-200 p-5 shadow-sm lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
            <button className="btn btn-sm btn-ghost">View All</button>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1001</td>
                  <td>John Smith</td>
                  <td>
                    <span className="badge badge-success">Completed</span>
                  </td>
                  <td>$120</td>
                </tr>
                <tr>
                  <td>#1002</td>
                  <td>Sarah Lee</td>
                  <td>
                    <span className="badge badge-warning">Pending</span>
                  </td>
                  <td>$85</td>
                </tr>
                <tr>
                  <td>#1003</td>
                  <td>Michael Tan</td>
                  <td>
                    <span className="badge badge-info">Shipped</span>
                  </td>
                  <td>$210</td>
                </tr>
                <tr>
                  <td>#1004</td>
                  <td>Emma Clark</td>
                  <td>
                    <span className="badge badge-success">Completed</span>
                  </td>
                  <td>$95</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-base-300 bg-base-200 p-5 shadow-sm">
          <h2 className="text-xl font-semibold">Quick Actions</h2>

          <div className="mt-4 space-y-3">
            <button className="btn btn-primary w-full rounded-xl">Add New Order</button>
            <button className="btn btn-outline w-full rounded-xl">Update Profile</button>
            <button className="btn btn-outline w-full rounded-xl">Check Revenue</button>
          </div>

          <div className="mt-6 rounded-2xl border border-base-300 bg-base-100 p-4">
            <p className="text-sm text-base-content/70">Today’s Note</p>
            <p className="mt-2 text-sm">
              Keep track of pending deliveries and follow up with new customer inquiries for better conversion.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage