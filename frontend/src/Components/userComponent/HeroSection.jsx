import React from 'react'

const HeroSection = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="h-[89vh] w-full overflow-hidden relative">
                <img
                    src="https://www.einfachganzleben.de/sites/default/files/styles/media_image/public/2018-03/berufung-so-findest-du-in-deinem-job-erfuellung.jpg?h=125a58ae"
                    alt="Full Screen Image"
                    className="object-cover w-full h-full"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 text-white">
                    <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
                    <p className="mb-6">Explore thousands of job opportunities tailored to your skills and interests.</p>
                    <div className="flex justify-center items-center gap-2">
                        <input
                            type="text"
                            placeholder="Search for jobs, roles, or companies"
                            className="p-3 w-80 rounded-md focus:outline-none"
                        />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Featured Jobs Section */}
            <div className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">Featured Jobs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md p-6 rounded-md hover:shadow-lg transition"
                            >
                                <h3 className="font-semibold text-lg mb-2">Job Title {index + 1}</h3>
                                <p className="text-gray-600 mb-4">Company Name</p>
                                <p className="text-sm text-gray-500">Location: City, Country</p>
                                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
