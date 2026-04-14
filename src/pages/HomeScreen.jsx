
import React from 'react'
import heroImg from "../assets/HeroImage.jpeg"
import Solutions from '../components/Solutions'
import WhyChoose from '../components/WhyChoose'


const HomeScreen = () => {
  return (
    <div className=' w-full relative overflow-hidden'>
        <div  className='relative
        '>

      {/* Background Image */}
      <img 
        src={heroImg} 
        alt="hero"
        className='w-full h-full object-cover scale-105'
      />

      {/* Dark Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20'></div>

      {/* Content Container */}
      <div className='absolute inset-0 flex items-center justify-between px-6 md:px-16'>

        {/* LEFT SIDE TEXT */}
        <div className='max-w-3xl text-white space-y-6'>

          {/* Tag */}
          <span className='inline-block px-4 py-2 text-sm bg-white/10 backdrop-blur-md rounded-full border border-white/20'>
            🚀 Intelligent Mobility Platform
          </span>

          {/* Heading */}
          <h1 className='text-3xl md:text-6xl font-extrabold leading-tight'>
            Integrated Intelligent <br />
            Mobility Infrastructure
          </h1>

          {/* Highlight */}
          <p className='text-lg md:text-2xl text-orange-400 font-medium'>
            Driving Road Safety & Real-Time Transport Governance
          </p>

          {/* Description */}
          <p className='text-gray-300 text-sm md:text-base max-w-lg'>
            Transforming transportation systems with smart automation, real-time analytics,
            and seamless digital infrastructure for safer and more efficient mobility.
          </p>

          {/* Buttons */}
          <div className='flex gap-4 mt-4'>
            <button className='px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold shadow-lg transition'>
              Explore Platform
            </button>

            <button className='px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition'>
              Learn More
            </button>
          </div>

        </div>

      </div>
      </div>
           <section className="py-20 px-6 md:px-16 text-gray-800">
        <div className="max-w-5xl mx-auto space-y-6">
          
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            About AntWorth
          </h2>

          <p className="text-lg leading-relaxed">
            AntWorth is a GovTech mobility solutions provider modernizing India’s transportation ecosystem 
            through integrated digital platforms. We connect vehicles, drivers, authorities, and infrastructure 
            to enable safer roads, efficient operations, and transparent transport systems at scale.
          </p>

        </div>
      </section>
      <Solutions/>
      <WhyChoose/>
    </div>
  )
}

export default HomeScreen