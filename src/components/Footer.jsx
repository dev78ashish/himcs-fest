import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold font-display mb-4">
              MAGNIFEST <span className="text-primary">2025</span>
            </h3>
            <p className="text-gray-300 mb-4">
              The biggest cultural and technical fest of the year. Join us for two days of excitement, innovation, and entertainment.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-primary transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-primary transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-300 hover:text-primary transition-colors">Schedule</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-primary transition-colors">Our Team</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Events</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/events" className="text-gray-300 hover:text-primary transition-colors">Technical Events</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-primary transition-colors">Cultural Events</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-primary transition-colors">Workshops</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-primary transition-colors">Competitions</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-primary transition-colors">Talks & Seminars</Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-primary transition-colors">Register Now</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
                <span className="text-gray-300">University Campus, College Road, City, State - 123456</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary mr-3" />
                <span className="text-gray-300">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary mr-3" />
                <span className="text-gray-300">info@festivo2025.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Magnifest 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer