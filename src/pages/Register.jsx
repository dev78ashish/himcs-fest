import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaEnvelope, FaPhone, FaSchool, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa'

const Register = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    college: '',
    course: '',
    year: '',
    events: [],
    accommodation: false,
    tshirtSize: '',
    hearAbout: '',
    agreeTerms: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [registrationComplete, setRegistrationComplete] = useState(false)
  
  const eventOptions = [
    { id: 'e1', name: 'Battle of Bands', category: 'Cultural' },
    { id: 'e2', name: 'Hackathon 2025', category: 'Technical' },
    { id: 'e3', name: 'Fashion Show', category: 'Cultural' },
    { id: 'e4', name: 'Robotics Competition', category: 'Technical' },
    { id: 'e5', name: 'Dance Competition', category: 'Cultural' },
    { id: 'e6', name: 'Startup Pitch', category: 'Workshop' },
    { id: 'e7', name: 'Photography Contest', category: 'Cultural' },
    { id: 'e8', name: 'Debate Competition', category: 'Literary' },
    { id: 'e9', name: 'Gaming Tournament', category: 'Technical' }
  ]
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      if (name === 'agreeTerms' || name === 'accommodation') {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }))
      } else {
        // For event checkboxes
        if (checked) {
          setFormData(prev => ({
            ...prev,
            events: [...prev.events, value]
          }))
        } else {
          setFormData(prev => ({
            ...prev,
            events: prev.events.filter(event => event !== value)
          }))
        }
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }
  
  const nextStep = () => {
    setStep(prev => prev + 1)
    window.scrollTo(0, 0)
  }
  
  const prevStep = () => {
    setStep(prev => prev - 1)
    window.scrollTo(0, 0)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setRegistrationComplete(true)
    }, 2000)
  }
  
  // Render different form steps
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  First Name*
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Last Name*
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone Number*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="college" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                College/University*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSchool className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Course/Degree*
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaGraduationCap className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Year of Study*
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="text-gray-400" />
                  </div>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="5+">5+ Year</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                className="btn-primary"
                onClick={nextStep}
              >
                Next Step
              </button>
            </div>
          </div>
        )
      
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Event Selection</h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Select the events you would like to participate in. You can select multiple events.
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Technical Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {eventOptions.filter(event => event.category === 'Technical').map(event => (
                  <div key={event.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={event.id}
                      name="events"
                      value={event.name}
                      checked={formData.events.includes(event.name)}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor={event.id} className="ml-2 text-gray-700 dark:text-gray-300">
                      {event.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Cultural Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {eventOptions.filter(event => event.category === 'Cultural').map(event => (
                  <div key={event.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={event.id}
                      name="events"
                      value={event.name}
                      checked={formData.events.includes(event.name)}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor={event.id} className="ml-2 text-gray-700 dark:text-gray-300">
                      {event.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Other Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {eventOptions.filter(event => !['Technical', 'Cultural'].includes(event.category)).map(event => (
                  <div key={event.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={event.id}
                      name="events"
                      value={event.name}
                      checked={formData.events.includes(event.name)}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor={event.id} className="ml-2 text-gray-700 dark:text-gray-300">
                      {event.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium transition-all duration-300"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn-primary"
                onClick={nextStep}
              >
                Next Step
              </button>
            </div>
          </div>
        )
      
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
            
            <div className="mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="accommodation"
                  name="accommodation"
                  checked={formData.accommodation}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary focus:ring-primary"
                />
                <label htmlFor="accommodation" className="ml-2 text-gray-700 dark:text-gray-300">
                  I require accommodation during the fest
                </label>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 ml-6">
                Accommodation will be provided on a first-come, first-served basis for a nominal fee.
              </p>
            </div>
            
            <div className="mb-4">
              <label htmlFor="tshirtSize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                T-Shirt Size (for participants)
              </label>
              <select
                id="tshirtSize"
                name="tshirtSize"
                value={formData.tshirtSize}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select Size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                How did you hear about Festivo 2025?
              </label>
              <select
                id="hearAbout"
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select Option</option>
                <option value="Social Media">Social Media</option>
                <option value="Friends">Friends</option>
                <option value="College/University">College/University</option>
                <option value="Email">Email</option>
                <option value="Website">Website</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="mb-6">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                </div>
                <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a> of Festivo 2025
                </label>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium transition-all duration-300"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting || !formData.agreeTerms}
              >
                {isSubmitting ? 'Registering...' : 'Complete Registration'}
              </button>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }
  
  // Registration success screen
  if (registrationComplete) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Registration Successful!</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Thank you for registering for Festivo 2025! We've sent a confirmation email to <span className="font-semibold">{formData.email}</span> with all the details.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Your Registration Details</h2>
              <div className="text-left">
                <p className="mb-2"><span className="font-medium">Registration ID:</span> FEST2025-{Math.floor(100000 + Math.random() * 900000)}</p>
                <p className="mb-2"><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</p>
                <p className="mb-2"><span className="font-medium">Email:</span> {formData.email}</p>
                <p className="mb-2"><span className="font-medium">College:</span> {formData.college}</p>
                <p className="mb-2"><span className="font-medium">Events:</span> {formData.events.join(', ') || 'None selected'}</p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Please save your registration ID for future reference. You'll need it to check in at the event.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-primary">
                Download Registration Details
              </button>
              <button className="btn-outline" onClick={() => window.location.href = '/'}>
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    )
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
        <h1 className="section-title" data-aos="fade-up">Register for <span className="text-primary">Festivo 2025</span></h1>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Join us for three days of excitement, innovation, and entertainment
        </p>
        
        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center w-full max-w-2xl">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex-1 relative">
                  <div 
                    className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                      step >= item ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {item}
                  </div>
                  <div className="text-xs text-center mt-2">{
                    item === 1 ? 'Personal Info' : 
                    item === 2 ? 'Event Selection' : 
                    'Additional Info'
                  }</div>
                  
                  {item < 3 && (
                    <div 
                      className={`absolute top-5 left-1/2 w-full h-0.5 ${
                        step > item ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Registration Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              {renderStep()}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Register