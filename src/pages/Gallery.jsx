import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaTimes } from 'react-icons/fa'

// Sample gallery data - removed year property
const galleryData = [
  {
    id: 1,
    title: 'MAGNIFEST',
    category: 'HIMCS',
    image: '/assets/home images/IMG_5282.JPG'
  },
  {
    id: 2,
    title: 'MAGNIFEST',
    category: 'HIMCS',
    image: '/assets/home images/IMG_5309.JPG'
  },
  {
    id: 3,
    title: 'MAGNIFEST',
    category: 'HIMCS',
    image: '/assets/home images/IMG_5306.JPG'
  },
  {
    id: 4,
    title: 'Robotics Exhibition',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 5,
    title: 'Fashion Show',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 6,
    title: 'Startup Pitch',
    category: 'Workshop',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 7,
    title: 'Photography Exhibition',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: 8,
    title: 'Debate Finals',
    category: 'Literary',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 9,
    title: 'Gaming Tournament',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 10,
    title: 'Cultural Night',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 11,
    title: 'Award Ceremony',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: 12,
    title: 'Tech Exhibition',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }
]

const Gallery = () => {
  const [filter, setFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)
  
  const categories = ['All', 'Cultural', 'Technical', 'Workshop', 'Literary']
  
  const filteredImages = galleryData.filter(image => {
    return filter === 'All' || image.category === filter
  })

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      <div className="container mx-auto px-4">
        <h1 className="section-title" data-aos="fade-up">Event <span className="text-primary">Gallery</span></h1>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Relive the memories from our previous editions
        </p>
        
        {/* Filters - removed year filter section */}
        <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-wrap gap-2 justify-center">
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
        
        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <div className="gallery-grid">
            {filteredImages.map((item, index) => (
              <motion.div 
                key={item.id}
                className="relative overflow-hidden rounded-lg cursor-pointer group"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                whileHover={{ scale: 1.02 }}
                onClick={() => openLightbox(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <FaSearch className="text-white text-2xl mx-auto mb-2" />
                    <h3 className="text-white font-bold">{item.title}</h3>
                    <p className="text-gray-200 text-sm">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">No images found</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Try adjusting your filters to see more images.
            </p>
            <button 
              className="btn-primary"
              onClick={() => setFilter('All')}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button 
            className="absolute top-4 right-4 text-white text-2xl z-10"
            onClick={closeLightbox}
          >
            <FaTimes />
          </button>
          
          <div className="max-w-4xl w-full">
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title} 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.category}</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Gallery