import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/Carousel'

const category = [
    "Forntend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Developer",
    "UI/UX Designer"
]

const CategorySection = () => {
    return (
        <>
            <div>
                <Carousel className="w-full max-w-xl mx-auto my-20">
                    <CarouselContent>
                        {
                            category.map((cat, index) => (
                                <CarouselItem className="md:basse-1/2 lg-basis-1/3">
                                    <Buttn>{cat}</Buttn>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                </Carousel>
            </div>
        </>
    )
}

export default CategorySection
