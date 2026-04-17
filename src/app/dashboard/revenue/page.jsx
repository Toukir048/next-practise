import React from 'react'

const RevenuePage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold">Revenue Overview</h1>
        <p className="text-base-content/70 mt-1">
          Track your earnings, performance, and recent transactions
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        
        <div className="bg-base-200 p-5 rounded-2xl border border-base-300">
          <h3 className="text-sm text-base-content/70">Total Revenue</h3>
          <p className="text-2xl font-bold mt-1">₱45,200</p>
        </div>

        <div className="bg-base-200 p-5 rounded-2xl border border-base-300">
          <h3 className="text-sm text-base-content/70">This Month</h3>
          <p className="text-2xl font-bold mt-1">₱12,800</p>
        </div>

        <div className="bg-base-200 p-5 rounded-2xl border border-base-300">
          <h3 className="text-sm text-base-content/70">Orders</h3>
          <p className="text-2xl font-bold mt-1">156</p>
        </div>

      </div>

      {/* Revenue Table */}
      <div className="bg-base-200 rounded-2xl border border-base-300 p-5">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Apr 10</td>
                <td>#1023</td>
                <td>Maria Santos</td>
                <td>₱1,200</td>
                <td><span className="badge badge-success">Paid</span></td>
              </tr>

              <tr>
                <td>Apr 09</td>
                <td>#1022</td>
                <td>Juan Dela Cruz</td>
                <td>₱950</td>
                <td><span className="badge badge-warning">Pending</span></td>
              </tr>

              <tr>
                <td>Apr 08</td>
                <td>#1021</td>
                <td>Ana Reyes</td>
                <td>₱2,300</td>
                <td><span className="badge badge-success">Paid</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default RevenuePage