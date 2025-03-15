import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const EventCard = ({ event }) => {
  const { title, category, image, date, location, time, description } = event

  return (
    <motion.div 
      className="event-card"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        
        <div className="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-2 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <FaClock className="mr-2 text-primary" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-primary" />
            <span>{location}</span>
          </div>
        </div>
        
        <button className="mt-6 w-full btn-outline">View Details</button>
      </div>
    </motion.div>
  )
}

export default EventCard