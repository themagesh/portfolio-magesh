import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { Jost,Caveat,Roboto } from "next/font/google";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const formRef = useRef(null);

  const contactDetails = [
    { icon: MapPin, label: "Address", value: "Dharmapuri, Tamil Nadu, India" },
    { icon: User, label: "Freelance", value: "Available Right Now" },
    { icon: Mail, label: "Email", value: "themagesh.v@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 6381 - 114 - 501" },
  ];

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "message") {
      setCharCount(value.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const payload = { ...formData, adminEmail: "themagesh.v@gmail.com" };

    const res = await fetch("https://formspree.io/f/myzgzolg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setCharCount(0);
    }

    setLoading(false);
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      alert("Please fill in all fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email.");
      return false;
    }

    return true;
  };

  return (
    <section id="contact-section" className="py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
        <p className="fon-[joost] ttext-[#ff64ab] font-bold">
          Let’s<span className="font-[Caveat] font-bold text-[#ffffff] text-2xl"> Talk About Ideas</span>
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-8">
          {/* Left Side - Contact Info */}
          <div className="text-left space-y-6">
            {contactDetails.map(({ icon: Icon, label, value }, index) => (
              <div key={index}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#ff64ab] rounded-full">
                    <Icon className="text-white" size={20} />
                  </div>
                  <p><b>{label}:</b> {value}</p>
                </div>
                {index !== contactDetails.length - 1 && <hr className="border-gray-600" />}
              </div>
            ))}
          </div>

          {/* Right Side - Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-left p-6 rounded-2xl shadow-lg">
            <input type="text" name="name" placeholder="Your Full Name *" required
              className="w-full p-3 bg-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#ff64ab]"
              value={formData.name} onChange={handleChange} />

            <input type="email" name="email" placeholder="Your Email Address *" required
              className="w-full p-3 bg-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#ff64ab]"
              value={formData.email} onChange={handleChange} />

            <input type="text" name="subject" placeholder="Your Subject *" required
              className="w-full p-3 bg-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#ff64ab]"
              value={formData.subject} onChange={handleChange} />

            <textarea name="message" placeholder="Your Message *" required
              className="w-full p-3 bg-gray-700 rounded-xl text-white h-32 focus:outline-none focus:ring-2 focus:ring-[#ff64ab]"
              value={formData.message} onChange={handleChange}></textarea>

            <button type="submit"
              className="w-full bg-[#ff64ab] py-3 rounded-xl font-bold transition hover:bg-[#ff458c] disabled:opacity-50"
              disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {success && (
          <p className="text-green-400 mt-4 transition-opacity duration-500 ease-in-out opacity-100">
            Thanks, your message is sent successfully!
          </p>
        )}
      </div>
    </section>
  );
}
