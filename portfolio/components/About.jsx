"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  { title: "Python Development", description: "Expert in building scalable and efficient Python applications tailored to your business needs." },
  { title: "Web Development", description: "Crafting high-performance, SEO-optimized websites with modern web technologies." },
  { title: "WordPress Development", description: "Professional WordPress solutions, from custom themes to full-scale website development." },
  { title: "API Development & Integration", description: "Building and integrating RESTful and PostgreSQL APIs to power seamless applications." },
  { title: "Django Development", description: "Developing robust and scalable web applications using Django and Django REST Framework." },
  { title: "FastAPI Development", description: "Creating high-performance APIs with FastAPI for modern web and mobile applications." },
  { title: "Ecommerce Development", description: "Building feature-rich online stores that drive conversions and enhance user experience." },
  { title: "Cloud Solutions", description: "Offering cloud-based solutions with AWS scalable applications." },
  { title: "Redis Development", description: "Optimizing caching and real-time data processing using Redis for high-performance applications." },
  { title: "Data Analytics & Visualization", description: "Transforming raw data into actionable insights with Python and visualization tools." }
];

export default function ServicesSection() {
  return (
    <section className="relative bg-gray-900 text-white py-16" id="services-section">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">What I Do</h2>
        <p className="text-xl text-white">
          <span className="text-[#ff64ab] font-bold">MY</span> 
          <span className="font-[Caveat] font-bold text-[#ffffff] text-2xl"> Services</span>
        </p>
      </div>

      <div className="container mx-auto mt-12 px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className={`relative border border-gray-700 pb-2 bg-gray-800 p-6 rounded-lg transition-all duration-300 
                hover:border-blue-400 hover:shadow-lg h-[240px] flex flex-col justify-between ${
                  index % 2 === 0 ? "shadow-lg shadow-blue-500/60" : "shadow-lg shadow-pink-500/60"
                }`}
              >
                <h5 className="text-xl font-semibold text-white">{service.title}</h5>
                <p className="text-white mt-2 text-sm">{service.description}</p>
                <Link href="#pricing-section" className="flex items-center justify-center mt-4 text-[#ff64ab] font-semibold hover:underline cursor-pointer">
                  See Pricing <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
