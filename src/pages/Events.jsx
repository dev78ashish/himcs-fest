import { useState } from 'react'
import { motion } from 'framer-motion'
import EventCard from '../components/EventCard'

// Sample events data
const eventsData = [
  {
    id: 1,
    title: 'Battle of Bands',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'March 15, 2025',
    location: 'Main Auditorium',
    time: '6:00 PM - 10:00 PM',
    description: 'Witness the ultimate showdown of musical talent as bands compete for glory and amazing prizes.'
  },
  {
    id: 2,
    title: 'Hackathon 2025',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'March 16, 2025',
    location: 'Tech Hub',
    time: '9:00 AM - 9:00 PM',
    description: '24-hour coding marathon to build innovative solutions for real-world problems.'
  },
  {
    id: 3,
    title: 'Fashion Show',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'March 17, 2025',
    location: 'Central Plaza',
    time: '7:00 PM - 9:00 PM',
    description: 'Showcase your style and creativity on the ramp with the latest fashion trends.'
  },
  {
    id: 4,
    title: 'Robotics Competition',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'March 16, 2025',
    location: 'Engineering Block',
    time: '10:00 AM - 4:00 PM',
    description: 'Design, build and program robots to complete challenging tasks and compete for the championship.'
  },
  {
    id: 5,
    title: 'Dance Competition',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    date: 'March 15, 2025',
    location: 'Open Air Theatre',
    time: '5:00 PM - 8:00 PM',
    description: 'Showcase your dance moves and choreography skills in solo and group categories.'
  },
  {
    id: 6,
    title: 'Startup Pitch',
    category: 'Workshop',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'March 17, 2025',
    location: 'Business School',
    time: '11:00 AM - 2:00 PM',
    description: 'Pitch your startup idea to a panel of investors and industry experts for feedback and potential funding.'
  },
  {
    id: 7,
    title: 'Photography Contest',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    date: 'March 15-17, 2025',
    location: 'Art Gallery',
    time: 'All Day',
    description: 'Capture the essence of the fest through your lens and win exciting prizes.'
  },
  {
    id: 8,
    title: 'Debate Competition',
    category: 'Literary',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'March 16, 2025',
    location: 'Seminar Hall',
    time: '2:00 PM - 5:00 PM',
    description: 'Engage in thought-provoking debates on contemporary issues and showcase your oratory skills.'
  },
  {
    id: 9,
    title: 'Gaming Tournament',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'March 15-17, 2025',
    location: 'Gaming Arena',
    time: '10:00 AM - 8:00 PM',
    description: 'Compete in popular esports titles and prove your gaming prowess.'
  }
]

const Events = () => {
  const [filter, setFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  
  const categories = ['All', 'Cultural', 'Technical', 'Workshop', 'Literary']
  
  const filteredEvents = eventsData.filter(event => {
    const matchesCategory = filter === 'All' || event.category === filter
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
          Discover the exciting lineup of events at Festivo 2025
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category 
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