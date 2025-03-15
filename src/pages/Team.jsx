import { motion } from 'framer-motion'
import TeamMember from '../components/TeamMember'

// Sample team data
const teamData = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Festival Coordinator',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'Alex leads the overall coordination and management of Festivo 2025, bringing 5 years of experience in event management.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'alex@festivo2025.edu'
    }
  },
  {
    id: 2,
    name: 'Samantha Lee',
    role: 'Technical Events Head',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    bio: 'Samantha oversees all technical competitions and workshops, with expertise in programming and robotics.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'samantha@festivo2025.edu'
    }
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Cultural Events Head',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    bio: 'Michael manages all cultural performances and competitions, with a background in music and performing arts.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'michael@festivo2025.edu'
    }
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'Marketing Head',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
    bio: 'Priya leads the marketing and promotion strategies for Festivo 2025, specializing in digital marketing and brand management.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'priya@festivo2025.edu'
    }
  },
  {
    id: 5,
    name: 'David Wilson',
    role: 'Sponsorship Coordinator',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'David manages partnerships and sponsorships, building relationships with companies and organizations to support the fest.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'david@festivo2025.edu'
    }
  },
  {
    id: 6,
    name: 'Sophia Rodriguez',
    role: 'Design Head',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'Sophia leads the design team, creating the visual identity and materials for Festivo 2025 with her creative expertise.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'sophia@festivo2025.edu'
    }
  }
]

const Team = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 font-display"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Meet Our <span className="text-yellow-300">Team</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              The dedicated individuals who work tirelessly to make Festivo 2025 an unforgettable experience
            </motion.p>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="dark:fill-gray-900"
            >
            </path>
          </svg>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20 bg-light dark:bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title" data-aos="fade-up">Core <span className="text-primary">Team</span></h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
              Meet the leaders behind Festivo 2025
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member, index) => (
              <motion.div 
                key={member.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <TeamMember member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="section-title">Our <span className="text-primary">Volunteers</span></h2>
            <p className="section-subtitle">
              Festivo 2025 is powered by over 200 dedicated volunteers
            </p>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Event Coordinators</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dedicated teams managing every event, ensuring smooth operations and exceptional experiences for all participants.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Logistics Team</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The backbone of our festival, handling venue setup, equipment management, and all physical arrangements.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Support Team</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Always ready to assist, our support volunteers ensure participants and visitors have all the information and help they need.
                </p>
              </div>
            </div>
            
            <div className="mt-16" data-aos="fade-up">
              <a href="#volunteer-form" className="btn-primary">
                Join Our Volunteer Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Form */}
      <section id="volunteer-form" className="py-20 bg-light dark:bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="section-title">Become a <span className="text-primary">Volunteer</span></h2>
              <p className="section-subtitle">
                Join our team and be a part of making Festivo 2025 an unforgettable experience
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="100">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="college" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">College/University</label>
                  <input
                    type="text"
                    id="college"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                    placeholder="Your institution"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="team" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Team</label>
                  <select
                    id="team"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Select your preferred team</option>
                    <option value="event">Event Coordination</option>
                    <option value="logistics">Logistics</option>
                    <option value="support">Support</option>
                    <option value="marketing">Marketing</option>
                    <option value="technical">Technical</option>
                    <option value="design">Design</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Why do you want to volunteer?</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                    placeholder="Tell us about yourself and why you'd like to join our team"
                    required
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button type="submit" className="btn-primary w-full md:w-auto">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title" data-aos="fade-up">Volunteer <span className="text-primary">Experiences</span></h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
              Hear from our past volunteers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Volunteer"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Mira Patel</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Volunteer 2024</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "Being a volunteer at Festivo was one of the most rewarding experiences of my college life. I made amazing friends and gained valuable skills that helped me in my career."
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Volunteer"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Ryan Kim</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Volunteer 2023</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "The teamwork and problem-solving experience I gained while volunteering at Festivo was invaluable. It's incredible to see your hard work culminate in such an amazing event."
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Volunteer"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Emma Torres</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Volunteer 2024</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "From setting up stages to coordinating with performers, every moment as a volunteer was filled with learning and fun. Would definitely recommend this experience to everyone!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display" data-aos="fade-up">
            Ready to Be Part of Something Amazing?
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Join our team of passionate volunteers and help us create an unforgettable experience for thousands of participants.
          </p>
          <div data-aos="fade-up" data-aos-delay="200">
            <a href="#volunteer-form" className="btn-secondary">
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Team