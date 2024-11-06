import React from 'react'

const Home = () => {
  return (
    <>
    {/* Header */}
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600"> PET...</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            About Us{" "}
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Blog
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Shop
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Contact
          </a>
        </nav>
        <button className="md:hidden text-gray-600 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
    {/* Hero Section */}
    <section
      className="bg-cover bg-center h-screen text-center"
      style={{ backgroundImage: 'url("data:image/jpeg' }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-3xl md:text-6xl font-bold">
          Welcome to Our Website
        </h1>
        <h4 className="text-white text-2xl md:text-5xl font-bold">
          Every Pet Deserves a Loving Home.
        </h4>
        <h3 className="text-white text-2xl md:text-5xl font-bold">
          Adopt a Pet Today
        </h3>
        <p className="text-white mt-4 text-lg md:text-xl">
          Browse our avilable animal's and learn more about the adoptation
          process.Together,we can rescue,rehabilitate ,and rehome pets in need.
          Thankyou for supporting our mission to bring joy to families through pet
          adoption.{" "}
        </p>
        <a
          href="#"
          className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </a>
      </div>
    </section>
    {/* Services Section */}
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Planning to Adopt a Pet?{" "}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600">
              Checklist for New Adopters
            </h3>
            <p className="mt-4 text-gray-600">
              Help make the trasition as smooth as possible.
            </p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600">
              COVID-19: How You Can Help{" "}
            </h3>
            <p className="mt-4 text-gray-600">
              {" "}
              Local shelters and rescues groups are strugglings to care for pets
              in need. but you can help.
            </p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600">
              Pet Adoptation FAQs
            </h3>
            <p className="mt-4 text-gray-600">
              Get answers to questions you haven't throught of.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Testimonials Section */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <p className="text-gray-600">
              "This service has been a game changer for my business!"
            </p>
            <h4 className="mt-4 text-gray-800 font-semibold">- Jane Doe</h4>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <p className="text-gray-600">
              "Professional, efficient, and reliable. Highly recommended!"
            </p>
            <h4 className="mt-4 text-gray-800 font-semibold">- John Smith</h4>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <p className="text-gray-600">
              "Top-notch service from start to finish!"
            </p>
            <h4 className="mt-4 text-gray-800 font-semibold">- Emily Johnson</h4>
          </div>
        </div>
      </div>
    </section>
    {/* Newsletter Section */}
    <section className="py-16 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Join Our Newsletter</h2>
        <p className="text-lg mb-6">
          Subscribe to get the latest updates right in your inbox.
        </p>
        <form action="#" className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md px-4 py-2 rounded-l-lg text-gray-900"
          />
          <button className="bg-white text-blue-600 px-4 py-2 rounded-r-lg hover:bg-gray-200">
            Subscribe
          </button>
        </form>
      </div>
    </section>
    {/* Footer */}
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>© 2024 PET.. . All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  </>
  

  )
}

export default Home