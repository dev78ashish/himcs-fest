import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const sponsors = [
  {
    id: 1,
    name: 'TechCorp',
    logo: 'https://placehold.co/200x100/4F46E5/FFFFFF?text=TechCorp',
    type: 'Platinum'
  },
  {
    id: 2,
    name: 'InnovateLabs',
    logo: 'https://placehold.co/200x100/EC4899/FFFFFF?text=InnovateLabs',
    type: 'Gold'
  },
  {
    id: 3,
    name: 'FutureWorks',
    logo: 'https://placehold.co/200x100/3B82F6/FFFFFF?text=FutureWorks',
    type: 'Gold'
  },
  {
    id: 4,
    name: 'CreativeMinds',
    logo: 'https://placehold.co/200x100/10B981/FFFFFF?text=CreativeMinds',
    type: 'Silver'
  },
  {
    id: 5,
    name: 'DigitalSolutions',
    logo: 'https://placehold.co/200x100/F59E0B/FFFFFF?text=DigitalSolutions',
    type: 'Silver'
  },
  {
    id: 6,
    name: 'NextGen',
    logo: 'https://placehold.co/200x100/6366F1/FFFFFF?text=NextGen',
    type: 'Silver'
  },
  {
    id: 7,
    name: 'GlobalTech',
    logo: 'https://placehold.co/200x100/8B5CF6/FFFFFF?text=GlobalTech',
    type: 'Bronze'
  },
  {
    id: 8,
    name: 'SmartSystems',
    logo: 'https://placehold.co/200x100/EC4899/FFFFFF?text=SmartSystems',
    type: 'Bronze'
  }
]

const SponsorSlider = () => {
  return (
    <div className="py-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {sponsors.map((sponsor) => (
          <SwiperSlide key={sponsor.id}>
            <div className="flex flex-col items-center">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <p className="text-xs text-gray-500 mt-2">{sponsor.type} Sponsor</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SponsorSlider