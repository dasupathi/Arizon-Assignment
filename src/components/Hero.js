import React from 'react'

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-[600px] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Hero background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Amazing Products
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Explore our curated collection of high-quality items at unbeatable prices.
          </p>
          <a
            href="/products"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero