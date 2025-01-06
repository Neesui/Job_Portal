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
        </>
    )
}

export default HeroSection
