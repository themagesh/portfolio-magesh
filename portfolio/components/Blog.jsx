import Image from 'next/image';
import Link from 'next/link';
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });

const BlogSection = () => {
  const blogPosts = [
    {
      title: "FastAPI: Full Course Basics",
      date: "18 January 2025",
      href: "/fastapi/2025/01/18/prometheus/",
      imgSrc: "/assets/img/blog/prometheus-grafana.png",
      description: "FastAPI is a modern, high-performance web framework for building APIs with Python 3.7+ based on standard Python type hints...",
    },
  ];

  return (
    <section className={`py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white ${jost.className}`} id="blog-section">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Latest Blog</h2>
          <p className="text-lg text-[#ff64ab] font-bold">MY <span className="font-[Caveat] font-bold text-[#ffffff] text-2xl"> Articles and Advice</span></p>
        </div>

        {/* Blog Posts */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <Link href={post.href}>
                <Image
                  src={post.imgSrc}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover hover:opacity-80 transition"
                />
              </Link>
              <div className="p-6">
                <p className="text-sm text-gray-400">{post.date}</p>
                <h5 className="text-xl font-semibold mt-2">
                  <Link href={post.href} className="hover:text-blue-400">{post.title}</Link>
                </h5>
                <p className="text-gray-300 mt-2">{post.description}</p>
                <div className="mt-4">
                  <Link href={post.href} className="text-blue-400 hover:underline">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <Link href="/blog/" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            View Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
