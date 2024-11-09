import React from 'react'

const Home = () => {
  return (
    <>
      <section
        className="bg-cover bg-center h-screen text-center"
        style={{ backgroundImage: 'url("https://www.doggies.com/blog/wp-content/uploads/2017/10/pet-montage-1024x1024.jpg")'}}
      >
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-3xl md:text-6xl font-bold">
            Welcome to Our Website
          </h1>
          <h4 className="text-white text-2xl md:text-5xl font-bold">
            ANIMALS NEED 
          </h4>
          <h3 className="text-white text-2xl md:text-5xl font-bold">
            Your Help!
          </h3>
          <p className="text-white mt-4 text-lg md:text-xl">
            You can chip in with money and effort!
             Cats, Dogs and Even Raccoons Adopt Any Pet They Like!{" "}
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
                "Fast they also have a grooming service and moderate pricing"
              </p>
              <h4 className="mt-4 text-gray-800 font-semibold">- Jane Doe</h4>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
              <p className="text-gray-600">
                "So impressive with the work they do"
              </p>
              <h4 className="mt-4 text-gray-800 font-semibold">- John Smith</h4>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
              <p className="text-gray-600">
                "I adopter Zero from y'all a year ago and we are so happy together. Thank you so much!!!"
              </p>
              <h4 className="mt-4 text-gray-800 font-semibold">- Emily Johshon</h4>
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
          <p>© 2024 PET ADOPTATION... All rights reserved.</p>
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
