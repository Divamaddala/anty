import React, { useState } from "react";
import { Menu, Search, Star, Mail, MapPin } from "lucide-react";

const StonepediaHomepage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const featuredCategories = [
    {
      name: "Geological Formations",
      description: "Explore unique rock formations worldwide",
      icon: "🏔️",
    },
    {
      name: "Mineral Collection",
      description: "Discover rare and beautiful minerals",
      icon: "💎",
    },
    {
      name: "Geological Research",
      description: "Latest findings and scientific insights",
      icon: "🔬",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Rockwell",
      role: "Geologist",
      quote:
        "Stonepedia is an invaluable resource for geological enthusiasts and professionals alike.",
      rating: 5,
    },
    {
      name: "Alex Stone",
      role: "Mineral Collector",
      quote:
        "The most comprehensive platform for rock and mineral information.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="/api/placeholder/50/50"
              alt="Stonepedia Logo"
              className="h-10 w-10 rounded-full"
            />
            <h1 className="text-2xl font-bold text-gray-800">Stonepedia</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="hover:text-gray-600 transition">
              Home
            </a>
            <a href="#categories" className="hover:text-gray-600 transition">
              Categories
            </a>
            <a href="#about" className="hover:text-gray-600 transition">
              About
            </a>
            <div className="relative">
              <input
                type="text"
                placeholder="Search minerals..."
                className="pl-8 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <Search
                className="absolute left-2 top-3 text-gray-500"
                size={18}
              />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 p-4 shadow-md">
            <a href="#home" className="block py-2 border-b">
              Home
            </a>
            <a href="#categories" className="block py-2 border-b">
              Categories
            </a>
            <a href="#about" className="block py-2 border-b">
              About
            </a>
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search minerals..."
                className="w-full pl-8 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <Search
                className="absolute left-2 top-3 text-gray-500"
                size={18}
              />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-24 pb-16 px-4 text-center bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Discover the World of Stones
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Your ultimate guide to geological wonders, mineral collections, and
            scientific insights
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition transform hover:-translate-y-1 hover:scale-110">
              Explore Now
            </button>
            <button className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition transform hover:-translate-y-1 hover:scale-110">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Featured Categories */}
      <section id="categories" className="container mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Explore Our Categories
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                {category.name}
              </h4>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Experts Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src="/api/placeholder/50/50"
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic mb-4 text-gray-700">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-16 px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Contact Us
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="text-gray-700" />
              <p>info@stonepedia.in</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-gray-700" />
              <p>Geological Research Center, Earth Campus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Stonepedia. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StonepediaHomepage;
