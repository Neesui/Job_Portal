import React from 'react';

const TopNiches = () => {
    // Sample data for top services
    const services = [
        {
            id: 1,
            title: 'Web Development',
            description: 'Building responsive and modern websites.',
            image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Web+Development'
        },
        {
            id: 2,
            title: 'Graphic Design',
            description: 'Creating visually appealing designs.',
            image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Graphic+Design'
        },
        {
            id: 3,
            title: 'Digital Marketing',
            description: 'Boosting your business presence online.',
            image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Digital+Marketing'
        },
        {
            id: 4,
            title: 'Mobile App Development',
            description: 'Developing user-friendly mobile applications.',
            image: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Mobile+Apps'
        },
    ];

    return (
        <section className="services p-8 bg-gray-50 font-[Poppins]">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Top Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="service-card bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-32 object-cover rounded-md mb-4"
                        />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopNiches;
