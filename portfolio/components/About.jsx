"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Add Autoplay module
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import the autoplay CSS

const services = [
  {
    title: "Web Designing",
    description:
      "Exquisitely crafted website designing services from concept to creation tailored to elevate your brand’s online presence.",
    image: "/assets/images/pat-2.png",
  },
  {
    title: "WordPress Development",
    description:
      "Innovative WordPress solutions by experienced developers that empower your business visibility online.",
    image: "/assets/images/pat-2.png",
  },
  {
    title: "Ecommerce Development",
    description:
      "Build a high-converting and stunning online store that drives sales with our professional ecommerce development services.",
    image: "/assets/images/pat-2.png",
  },
  {
    title: "B2B/SaaS Marketing",
    description:
      "Empowering your SAAS business with state-of-the-art B2B/SaaS marketing strategies for exponential business growth.",
    image: "/assets/images/pat-2.png",
  },
  {
    title: "Cloud Computing",
    description:
      "Provides the best cloud-neutral solution for hybrid and multi-cloud strategies.",
    image: "/assets/images/pat-2.png",
  },
  {
    title: "DevOps",
    description:
      "DevOps as a Service system helps businesses to ensure that the organization achieves desired outcomes.",
    image: "/assets/images/pat-2.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-gray-900 text-white py-16" id="services-section">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-yellow-400">What I Do</h2>
        <p className="text-xl text-gray-300">My <b>Services</b></p>
      </div>

      {/* Services Carousel */}
      <div className="container mx-auto mt-12 px-4">
        <Swiper
          modules={[Pagination, Autoplay]} // Include the Autoplay module
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings: 3 seconds per slide
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <div className="relative w-full h-40 bg-cover bg-center rounded-lg mb-4" style={{ backgroundImage: `url(${service.image})` }}></div>
                <h5 className="text-xl font-semibold text-yellow-400">{service.title}</h5>
                <p className="text-gray-300 mt-2">{service.description}</p>
                <Link href="#pricing-section">
                  <span className="inline-block mt-4 text-yellow-400 font-semibold hover:underline cursor-pointer">
                    See Pricing
                  </span>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
