import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      adminEmail: "tamilsanmia@gmail.com", // Sending message to Admin
    };

    const res = await fetch("https://formspree.io/f/myzgzolg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section id="contact-section" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
        <p className="text-lg mb-10">Let’s <b>Talk About Ideas</b></p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="text-left">
            <p className="mb-4"><b>Address:</b> Dharmapuri, Tamil Nadu, India</p>
            <p className="mb-4"><b>Freelance:</b> Available Right Now</p>
            <p className="mb-4"><b>Email:</b> tamilsanmia@gmail.com</p>
            <p className="mb-4"><b>Phone:</b> +91 9585 - 998 - 228</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <input type="text" name="name" placeholder="Your Full Name *" required className="w-full p-3 bg-gray-800 rounded" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email Address *" required className="w-full p-3 bg-gray-800 rounded" value={formData.email} onChange={handleChange} />
            <input type="text" name="subject" placeholder="Your Subject *" required className="w-full p-3 bg-gray-800 rounded" value={formData.subject} onChange={handleChange} />
            <textarea name="message" placeholder="Your Message *" required className="w-full p-3 bg-gray-800 rounded h-32" value={formData.message} onChange={handleChange}></textarea>
            <button type="submit" className="w-full bg-blue-500 py-3 rounded font-bold">Send Message</button>
          </form>
        </div>

        {success && <p className="text-green-400 mt-4">Thanks, your message is sent successfully. Admin will also receive a copy.</p>}
      </div>
    </section>
  );
}
