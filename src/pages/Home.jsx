import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa'
import CountdownTimer from '../components/CountdownTimer'
import EventCard from '../components/EventCard'
import SponsorSlider from '../components/SponsorSlider'
import BackgroundSlideshow from '../components/BackgroundSlideShow'
import { useEffect, useState } from 'react'

// Sample featured events
const featuredEvents = [
  {
    id: 1,
    title: 'Battle of Bands',
    category: 'Cultural',
    image: '/assets/images/WhatsApp Image 2025-03-22 at 13.23.24_77acc154.jpg',
    date: 'March 15, 2025',
    location: 'Main Auditorium',
    time: '6:00 PM - 10:00 PM',
    description: 'Witness the ultimate showdown of musical talent as bands compete for glory and amazing prizes.'
  },
  {
    id: 2,
    title: 'Fashion Show',
    category: 'Cultural',
    image: '/assets/images/fashion3.jpg',
    date: 'March 17, 2025',
    location: 'Central Plaza',
    time: '7:00 PM - 9:00 PM',
    description: 'Showcase your style and creativity on the ramp with the latest fashion trends.'
  },
  {
    id: 3,
    title: 'Programming Contest',
    category: 'Technical',
    image: '/assets/events/programming.jpg',
    date: 'March 16, 2025',
    location: 'Tech Hub',
    time: '9:00 AM - 3:00 PM',
    description: 'Test your coding skills and compete against other programmers to solve complex algorithmic challenges.'
  },
  
]



const Home = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const festivalImages = [
    { url: "/assets/home images/IMG_5282.JPG", alt: "Festival crowd at night" },
    { url: "/assets/home images/IMG_5291.JPG", alt: "Concert stage with lights" },
    { url: "/assets/home images/IMG_5305.JPG", alt: "Festival performance" },
    { url: "/assets/home images/IMG_5306.JPG", alt: "Colorful festival celebration" },
    { url: "/assets/home images/IMG_5309.JPG", alt: "Technical exhibit" },
    { url: "/assets/home images/IMG_5326.JPG", alt: "Technical exhibit" },
    { url: "/assets/home images/IMG_5481.JPG", alt: "Technical exhibit" },
    { url: "/assets/home images/IMG_5659.JPG", alt: "Technical exhibit" },
    { url: "/assets/home images/IMG_5666.JPG", alt: "Technical exhibit" },
    { url: "/assets/home images/IMG_5750.JPG", alt: "Technical exhibit" },
    { url: "/assets/home images/IMG_5831.JPG", alt: "Technical exhibit" }
  ];



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section
        className={`relative ${isMobile ? "" : "min-h-screen"
          } py-24 flex items-center justify-center overflow-hidden`}
      >        {/* Replace video with slideshow component */}
        <BackgroundSlideshow images={festivalImages} interval={6000} />

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-display"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            MAGNIFEST <span className="text-primary">2025</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            The biggest management, cultural and technical  fest of the year! 🎉🚀💼
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center text-white">
              <FaCalendarAlt className="mr-2 text-primary" />
              <span>April 18-19, 2025</span>
            </div>
            <div className="hidden md:block w-2 h-2 rounded-full bg-primary"></div>
            <div className="flex items-center text-white">
              <FaMapMarkerAlt className="mr-2 text-primary" />
              <span>Hindustan Campus, Farah, Mathura</span>
            </div>
            <div className="hidden md:block w-2 h-2 rounded-full bg-primary"></div>
            <div className="flex items-center text-white">
              <FaTicketAlt className="mr-2 text-primary" />
              <span>3000+ Participants</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <CountdownTimer />
          </motion.div>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link to="/register" className="btn-primary">
              Register Now
            </Link>
            <Link to="/events" className="btn-outline">
              Explore Events
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="#about"
              className="text-white flex flex-col items-center"
            >
              <span className="mb-2">Scroll Down</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-light dark:bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="section-title">About <span className="text-primary">Magnifest</span></h2>
            <p className="section-subtitle">
              Two days of excitement, innovation, and entertainment
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Cultural Events */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Cultural Events</h3>
                <p className="text-gray-600 dark:text-gray-300">Where Art Meets Passion! Experience the vibrancy of music, dance, drama, and fashion.</p>
              </div>

              {/* Management Events */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Management Events</h3>
                <p className="text-gray-600 dark:text-gray-300">Think. Create. Lead! Dive into the world of business, marketing, and innovation.</p>
              </div>

              {/* Technical Events */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Technical Events</h3>
                <p className="text-gray-600 dark:text-gray-300">Code. Compete. Conquer! Take on the challenges of coding, gaming, and problem-solving.</p>
              </div>
            </div>


            <div className="mt-12">
              <Link to="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="section-title" data-aos="fade-up">Featured <span className="text-primary">Events</span></h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Don't miss out on our most anticipated events of the year
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredEvents.map((event) => (
              <div key={event.id} data-aos="fade-up" data-aos-delay={event.id * 100}>
                <EventCard event={event} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/events" className="btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">50+</h3>
              <p className="text-primary-100">Events</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">3000+</h3>
              <p className="text-primary-100">Participants</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">20+</h3>
              <p className="text-primary-100">Colleges</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">₹5L+</h3>
              <p className="text-primary-100">Prize Pool</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-light dark:bg-dark">
        <div className="container mx-auto px-4">
          <h2 className="section-title" data-aos="fade-up">Event <span className="text-primary">Gallery</span></h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Glimpses from our previous editions
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="grid gap-4" data-aos="zoom-in" data-aos-delay="100">
              <div>
                <img className="h-auto max-w-full rounded-lg object-cover" src="/assets/home images/IMG_5282.JPG" alt="Gallery image" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg object-cover" src="/assets/home images/IMG_5831.JPG" alt="Gallery image" />
              </div>
            </div>
            <div className="grid gap-4" data-aos="zoom-in" data-aos-delay="200">
              <div>
                <img className="h-auto max-w-full rounded-lg object-cover" src="/assets/home images/IMG_5291.JPG" alt="Gallery image" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg object-cover" src="/assets/old/old1.jpg" alt="Gallery image" />
              </div>
            </div>
            <div className="grid gap-4" data-aos="zoom-in" data-aos-delay="300">
              <div>
                <img className="h-auto max-w-full rounded-lg object-cover" src="/assets/home images/IMG_5481.JPG" alt="Gallery image" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg object-cover" src="/assets/old/old2.jpg" alt="Gallery image" />
              </div>
            </div>
            <div className="grid gap-4" data-aos="zoom-in" data-aos-delay="400">
              <div>
                <img className="h-auto max-w-full rounded-lg object-cover" src="/assets/home images/IMG_5326.JPG" alt="Gallery image" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg object-cover" src="/assets/old/old3.jpg" alt="Gallery image" />
              </div>
            </div>
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/gallery" className="btn-outline">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="section-title" data-aos="fade-up">Our <span className="text-primary">Sponsors</span></h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Partnering with industry leaders to bring you the best experience
          </p>

          <div data-aos="fade-up" data-aos-delay="200">
            <SponsorSlider />
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/sponsors" className="btn-outline">
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display" data-aos="fade-up">
            Ready to Join the Excitement?
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Register now and be a part of the biggest college fest of the year. Limited spots available!
          </p>
          <div data-aos="fade-up" data-aos-delay="200">
            <Link to="/register" className="btn-secondary">
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home