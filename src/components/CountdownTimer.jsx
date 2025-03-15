import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CountdownTimer = () => {
  // Set the date for the college fest (example: March 15, 2025)
  const festDate = new Date('April 18, 2025 09:00:00').getTime()
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = festDate - now
      
      if (distance < 0) {
        clearInterval(interval)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
        return
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])

  const countdownItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {countdownItems.map((item, index) => (
        <motion.div
          key={item.label}
          className="countdown-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <span className="text-2xl md:text-3xl font-bold text-primary">{item.value}</span>
          <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{item.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default CountdownTimer