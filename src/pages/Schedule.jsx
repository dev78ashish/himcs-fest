import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

// Sample schedule data
const scheduleData = {
  'Day 1': [
    {
      id: 1,
      title: 'Opening Ceremony',
      time: '9:00 AM - 10:30 AM',
      location: 'Main Auditorium',
      description: 'Inauguration of Festivo 2025 with special guests and performances.'
    },
    {
      id: 2,
      title: 'Technical Symposium',
      time: '11:00 AM - 1:00 PM',
      location: 'Tech Hub',
      description: 'Panel discussion on emerging technologies with industry experts.'
    },
    {
      id: 3,
      title: 'Coding Competition',
      time: '2:00 PM - 5:00 PM',
      location: 'Computer Labs',
      description: 'Solve challenging coding problems and compete for prizes.'
    },
    {
      id: 4,
      title: 'Battle of Bands',
      time: '6:00 PM - 10:00 PM',
      location: 'Open Air Theatre',
      description: 'Live music competition featuring talented college bands.'
    }
  ],
  'Day 2': [
    {
      id: 5,
      title: 'Hackathon Kickoff',
      time: '9:00 AM',
      location: 'Tech Hub',
      description: '24-hour coding marathon begins with team formation and problem statements.'
    },
    {
      id: 6,
      title: 'Robotics Workshop',
      time: '10:00 AM - 12:00 PM',
      location: 'Engineering Block',
      description: 'Hands-on workshop on building and programming robots.'
    },
    {
      id: 7,
      title: 'Debate Competition',
      time: '2:00 PM - 5:00 PM',
      location: 'Seminar Hall',
      description: 'Engage in thought-provoking debates on contemporary issues.'
    },
    {
      id: 8,
      title: 'Cultural Night',
      time: '7:00 PM - 11:00 PM',
      location: 'Main Auditorium',
      description: 'Showcase of dance, music, and theatrical performances.'
    }
  ],
  'Day 3': [
    {
      id: 9,
      title: 'Hackathon Ends',
      time: '9:00 AM',
      location: 'Tech Hub',
      description: 'Submission deadline for hackathon projects.'
    },
    {
      id: 10,
      title: 'Project Showcase',
      time: '10:00 AM - 1:00 PM',
      location: 'Exhibition Hall',
      description: 'Display of innovative projects and prototypes by students.'
    },
    {
      id: 11,
      title: 'Fashion Show',
      time: '3:00 PM - 5:00 PM',
      location: 'Central Plaza',
      description: 'Showcase of creative fashion designs by student designers.'
    },
    {
      id: 12,
      title: 'Closing Ceremony',
      time: '6:00 PM - 8:00 PM',
      location: 'Main Auditorium',
      description: 'Award distribution and closing remarks for Festivo 2025.'
    }
  ]
}

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('Day 1')

  const days = Object.keys(scheduleData)

  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   transition={{ duration: 0.5 }}
    //   className="pt-24 pb-20"
    // >
    //   <div className="container mx-auto px-4">
    //     <h1 className="section-title" data-aos="fade-up">Event <span className="text-primary">Schedule</span></h1>
    //     <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
    //       Plan your Festivo 2025 experience with our detailed schedule
    //     </p>

    //     {/* Day Tabs */}
    //     <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
    //       <div className="inline-flex rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 p-1">
    //         {days.map((day) => (
    //           <button
    //             key={day}
    //             className={`px-6 py-3 text-sm font-medium rounded-md transition-colors ${
    //               activeDay === day 
    //                 ? 'bg-primary text-white' 
    //                 : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
    //             }`}
    //             onClick={() => setActiveDay(day)}
    //           >
    //             {day}
    //           </button>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Schedule Timeline */}
    //     <div className="max-w-4xl mx-auto">
    //       <div className="relative">
    //         {/* Timeline Line */}
    //         <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

    //         {/* Events */}
    //         {scheduleData[activeDay].map((event, index) => (
    //           <motion.div 
    //             key={event.id}
    //             className="relative flex gap-6 mb-8"
    //             initial={{ opacity: 0, x: -20 }}
    //             animate={{ opacity: 1, x: 0 }}
    //             transition={{ delay: index * 0.1 }}
    //             data-aos="fade-up"
    //             data-aos-delay={index * 100}
    //           >
    //             {/* Timeline Dot */}
    //             <div className="absolute left-8 w-4 h-4 -ml-2 rounded-full bg-primary z-10"></div>

    //             {/* Time */}
    //             <div className="w-32 pt-1 text-right flex-shrink-0">
    //               <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
    //                 {event.time.split(' - ')[0]}
    //               </span>
    //             </div>

    //             {/* Event Card */}
    //             <div className="flex-grow bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    //               <h3 className="text-xl font-bold mb-2">{event.title}</h3>
    //               <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>

    //               <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
    //                 <div className="flex items-center">
    //                   <FaClock className="mr-2 text-primary" />
    //                   <span>{event.time}</span>
    //                 </div>
    //                 <div className="flex items-center">
    //                   <FaMapMarkerAlt className="mr-2 text-primary" />
    //                   <span>{event.location}</span>
    //                 </div>
    //               </div>
    //             </div>
    //           </motion.div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Download Schedule */}
    //     <div className="text-center mt-16" data-aos="fade-up">
    //       <button className="btn-outline">
    //         <FaCalendarAlt className="inline-block mr-2" />
    //         Download Full Schedule
    //       </button>
    //     </div>
    //   </div>
    // </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      <div className="container mx-auto px-4">
        <h1 className="section-title" data-aos="fade-up">Coming <span className="text-primary">Soon</span></h1>
      </div>
    </motion.div>
  )
}

export default Schedule