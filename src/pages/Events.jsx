import { useState } from 'react'
import { motion } from 'framer-motion'
import EventCard from '../components/EventCard'

const eventsData = [
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
    title: 'Programming Contest',
    category: 'Technical',
    image: '/assets/events/programming.jpg',
    date: 'March 16, 2025',
    location: 'Tech Hub',
    time: '9:00 AM - 3:00 PM',
    description: 'Test your coding skills and compete against other programmers to solve complex algorithmic challenges.'
  },
  {
    id: 3,
    title: 'Fashion Show Contest',
    category: 'Cultural',
    image: '/assets/images/fashion1.jpg',
    date: 'March 17, 2025',
    location: 'Central Plaza',
    time: '7:00 PM - 9:00 PM',
    description: 'Showcase your style and creativity on the ramp with the latest fashion trends.'
  },
  {
    id: 4,
    title: 'Debugging Contest',
    category: 'Technical',
    image: '/assets/events/debugging.jpg',
    date: 'March 16, 2025',
    location: 'Engineering Block',
    time: '10:00 AM - 4:00 PM',
    description: 'Find and fix bugs in code under time pressure to showcase your debugging skills.'
  },
  {
    id: 5,
    title: 'Solo Dance',
    category: 'Cultural',
    image: '/assets/events/solo.jpg',
    date: 'March 15, 2025',
    location: 'Open Air Theatre',
    time: '5:00 PM - 8:00 PM',
    description: 'Showcase your dance moves and performance skills in this solo dance competition.'
  },
  {
    id: 6,
    title: 'Business Plan',
    category: 'Management',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'March 17, 2025',
    location: 'Business School',
    time: '11:00 AM - 2:00 PM',
    description: 'Present your innovative business ideas and compete for the best business plan.'
  },
  {
    id: 7,
    title: 'Photography Contest',
    category: 'Management',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    date: 'March 15-17, 2025',
    location: 'Art Gallery',
    time: 'All Day',
    description: 'Capture the essence of the fest through your lens and win exciting prizes.'
  },
  {
    id: 8,
    title: 'E-Gaming BGMI',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'March 15-17, 2025',
    location: 'Gaming Arena',
    time: '10:00 AM - 8:00 PM',
    description: 'Compete in Battlegrounds Mobile India tournament and prove your gaming prowess.'
  },
  {
    id: 9,
    title: 'Starlets',
    category: 'Cultural',
    image: '/assets/events/starlet.jpg',
    date: 'March 16, 2025',
    location: 'Performing Arts Center',
    time: '3:00 PM - 6:00 PM',
    description: 'Group dance competition showcasing coordination, choreography and creativity.'
  },
  {
    id: 10,
    title: 'Inquisitor',
    category: 'Management',
    image: '/assets/events/inquisitor.jpg',
    date: 'March 17, 2025',
    location: 'Conference Room',
    time: '9:00 AM - 12:00 PM',
    description: 'Solve complex case studies and present your findings to industry experts.'
  },
  {
    id: 11,
    title: 'Curtain Raiser',
    category: 'Cultural',
    image: '/assets/events/curtain.jpg',
    date: 'March 15, 2025',
    location: 'Drama Theater',
    time: '4:00 PM - 7:00 PM',
    description: 'Showcase your dramatic talent through plays, dramas and mono-acts.'
  },
  {
    id: 12,
    title: 'Technical Quiz',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'March 16, 2025',
    location: 'Lecture Hall',
    time: '2:00 PM - 4:00 PM',
    description: 'Test your technical knowledge across various domains in this challenging quiz.'
  },
  {
    id: 13,
    title: 'Just Dance',
    category: 'Cultural',
    image: '/assets/events/dance.jpg',
    date: 'March 15, 2025',
    location: 'Recreation Center',
    time: '6:00 PM - 8:00 PM',
    description: 'Showcase your spontaneous dance skills in this on-the-spot dance competition.'
  },
  {
    id: 14,
    title: 'Zenith',
    category: 'Management',
    image: '/assets/events/zenith.jpg',
    date: 'March 17, 2025',
    location: 'Management Center',
    time: '10:00 AM - 5:00 PM',
    description: 'Compete for the title of Best Manager through multiple rounds of management challenges.'
  },
  {
    id: 15,
    title: 'Sur Sangam',
    category: 'Cultural',
    image: '/assets/images/singing1.jpg',
    date: 'March 16, 2025',
    location: 'Music Hall',
    time: '5:00 PM - 8:00 PM',
    description: 'Showcase your vocal talent in this singing competition spanning various genres.'
  },
  {
    id: 16,
    title: 'Ultimate Turmoil',
    category: 'Management',
    image: '/assets/events/turmoil.jpg',
    date: 'March 16, 2025',
    location: 'Debate Hall',
    time: '1:00 PM - 4:00 PM',
    description: 'Engage in intense debates on contemporary topics and showcase your oratory skills.'
  },
  {
    id: 17,
    title: 'Happiness Heroes',
    category: 'Cultural',
    image: '/assets/events/heroes.jpg',
    date: 'March 17, 2025',
    location: 'Amphitheater',
    time: '4:00 PM - 7:00 PM',
    description: 'Express yourself through poetry, shayari, stand-up comedy or mimicry.'
  },
  {
    id: 18,
    title: 'Ad Making',
    category: 'Management',
    image: '/assets/events/add.jpg',
    date: 'March 15, 2025',
    location: 'Media Lab',
    time: '10:00 AM - 5:00 PM',
    description: 'Create compelling advertisements for given products and showcase your marketing skills.'
  },
  {
    id: 19,
    title: 'Logo Making',
    category: 'Management',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'March 16, 2025',
    location: 'Design Studio',
    time: '9:00 AM - 1:00 PM',
    description: 'Design creative logos for given brands and showcase your graphic design skills.'
  },
  {
    id: 20,
    title: 'Poster Making',
    category: 'Management',
    image: '/assets/events/poster.jpg',
    date: 'March 15, 2025',
    location: 'Art Center',
    time: '9:00 AM - 1:00 PM',
    description: 'Join our poster design workshop to create compelling visual content. Learn professional design techniques and compete for prizes with your creative masterpieces.'
  },
  {
    id: 21,
    title: 'Treasure Love',
    category: 'Management',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'March 15, 2025',
    location: 'Art Center',
    time: '9:00 AM - 1:00 PM',
    description: 'An exciting treasure hunt with a romantic twist! Team up with your partner or find new connections as you solve clues and discover hidden gems throughout the venue.'
  }
]

const Events = () => {
  const [filter, setFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'Cultural', 'Technical', 'Management']

  const filteredEvents = eventsData.filter(event => {
    const matchesCategory = filter === 'All' || event.category === filter
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const openRulebook = () => {
    // You can replace this with your actual PDF file path or URL
    window.open('/assets/RULE-BOOK-25.pdf', '_blank');
    // Alternative implementation: window.open('/path-to-your-rulebook.pdf', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      <div className="container mx-auto px-4">
        <h1 className="section-title" data-aos="fade-up">Our <span className="text-primary">Events</span></h1>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Discover the exciting lineup of events at Magnifest 2025
        </p>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4" data-aos="fade-up" data-aos-delay="200">
          <div className="w-full md:w-auto">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Rulebook Line and Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 mb-8" data-aos="fade-up" data-aos-delay="250">
          <p className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
            To view rules for each and every event, check out our complete rulebook:
          </p>
          <button
            onClick={openRulebook}
            className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            View Rulebook
          </button>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div key={event.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <EventCard event={event} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">No events found</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              className="btn-primary"
              onClick={() => {
                setFilter('All')
                setSearchTerm('')
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Events