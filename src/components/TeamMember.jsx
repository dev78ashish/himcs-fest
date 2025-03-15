import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const TeamMember = ({ member }) => {
  const { name, role, image, bio, social } = member

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-primary font-medium">{role}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{bio}</p>
        
        <div className="flex space-x-4">
          {social.linkedin && (
            <a 
              href={social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
          )}
          {social.twitter && (
            <a 
              href={social.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <FaTwitter size={20} />
            </a>
          )}
          {social.email && (
            <a 
              href={`mailto:${social.email}`}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default TeamMember