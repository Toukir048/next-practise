import React from 'react'
    const DevelopersPage = () => {
      const developers = [
        {
          id: 1,
          name: "Arafat Hasan",
          role: "Frontend Developer",
          desc: "Builds clean, responsive, and user-friendly interfaces using modern React and Tailwind tools."
        },
        {
          id: 2,
          name: "Nusrat Jahan",
          role: "Backend Developer",
          desc: "Handles APIs, server logic, and database structure to keep the application fast and reliable."
        },
        {
          id: 3,
          name: "Tanvir Ahmed",
          role: "UI/UX Designer",
          desc: "Designs smooth layouts, better user journeys, and visually balanced sections for the product."
        }
      ];

      return (
        <div className="bg-base-100 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <div className="badge badge-primary badge-outline mb-4">Our Team</div>
              <h1 className="text-3xl sm:text-4xl font-bold">Meet Our Developers</h1>
              <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
                Our development team combines creativity, technical skill, and problem-solving
                to build modern web experiences that are fast, responsive, and easy to use.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {developers.map((developer) => (
                <div
                  key={developer.id}
                  className="card bg-base-200 shadow-lg border border-base-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="card-body">
                    <div className="flex items-center justify-between">
                      <h2 className="card-title text-xl">{developer.name}</h2>
                      <div className="avatar placeholder">
                        <div className="bg-primary text-primary-content rounded-full w-12">
                          <span className="text-lg">
                            {developer.name.split(" ")[0][0]}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm font-medium text-primary">{developer.role}</p>
                    <p className="text-base-content/70 leading-7">{developer.desc}</p>

                    <div className="card-actions justify-end mt-4">
                      <button className="btn btn-primary btn-sm">View Profile</button>
                      <button className="btn btn-soft btn-sm">Contact</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-base-200 border border-base-300 p-8 text-center shadow-md">
              <h3 className="text-2xl font-bold">Want to Work With Our Team?</h3>
              <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
                We create practical and attractive digital solutions with strong attention
                to performance, design, and user experience.
              </p>
              <button className="btn btn-primary mt-5">Join Our Team</button>
            </div>
          </div>
        </div>
      );
    };


export default DevelopersPage
