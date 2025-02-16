import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselComponent = () => {
  return (
    <>
      <main className="h-full w-full flex flex-col justify-center items-center bg-[#ffffff] border my-4 p-4">
      <h1 className="text-5xl text-center my-4 text-gray-700">Carousel</h1>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="text-9xl text-center bg-white">1</CarouselItem>
            <CarouselItem className="text-9xl text-center bg-white">2</CarouselItem>
            <CarouselItem className="text-9xl text-center bg-white">3</CarouselItem>
            <CarouselItem className="text-9xl text-center bg-white">4</CarouselItem>
            <CarouselItem className="text-9xl text-center bg-white">5</CarouselItem>
            <CarouselItem className="text-9xl text-center bg-white">6</CarouselItem>
            <CarouselItem className="text-9xl text-center bg-white">7</CarouselItem>
            <CarouselItem className="text-9xl text-center bg-white">8</CarouselItem>
            <CarouselItem className="text-9xl text-center bg-white">9</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
    </>
  );
};

export default CarouselComponent;
