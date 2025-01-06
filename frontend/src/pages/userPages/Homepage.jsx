import React from 'react';

const Homepage = () => {
    return (
        <>


            {/* Categories Section */}
            <div className="py-12 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">Browse Job Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {["Technology", "Finance", "Healthcare", "Education"].map((category, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md p-6 rounded-md text-center hover:shadow-lg transition"
                            >
                                <h3 className="font-medium text-lg">{category}</h3>
                            </div>
                        ))}
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
    );
};

export default Homepage;
