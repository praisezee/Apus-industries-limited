import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Card, CardBody, Image } from 'react-bootstrap';
import img1 from '../assets/code.png'
import img2 from '../assets/mobile-app.png'
import img3 from '../assets/electrical.png'
import img4 from '../assets/test.png'

const Services = () => {
  return (
    <div className='bg-light py-5'>
      <p className="h1 my-5 text-center fw-bold text-capitalize">services we offer</p>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        } }
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        } }
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper my-5"
      >
        <SwiperSlide>
          <Card className='border-gradient'>
            <CardBody>
              <Image src={ img1 } width={ 30 } height={ 30 } className='rounded-circle border border-gradient' />
              <p className="text-gradient h4 text-capitalize my-3">web design & Development</p>
              <p>A website is an extension of yourself and we can help you to express it property. Your website is your number one marketing asset because we live in a digital age</p>
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className='border-gradient'>
            <CardBody>
              <Image src={ img3 } width={ 30 } height={ 30 } className='rounded-circle border border-gradient' />
              <p className="text-gradient h4 text-capitalize my-3">Industrial and Building Electrification</p>
              <p>Getting an expert to handle your full house or organisations building electrification and saftey tip or rerouting electrification path is a rare gem and is very essential</p>
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className='border-gradient'>
            <CardBody>
              <Image src={ img2 } width={ 30 } height={ 30 } className='rounded-circle border border-gradient' />
              <p className="text-gradient h4 text-capitalize my-3">Mobile App Development</p>
              <p>A mobile application is easily accessible by everyone lately. This is a strong extention of your business for easy accessiblity by everyone</p>
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className='border-gradient'>
            <CardBody>
              <Image src={ img4 } width={ 30 } height={ 30 } className='rounded-circle border border-gradient' />
              <p className="text-gradient h4 text-capitalize my-3">software testing services</p>
              <p>An application built without proper testing will give a poor user experience and will lead to a decline in sales, why not get experts?</p>
            </CardBody>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Services
