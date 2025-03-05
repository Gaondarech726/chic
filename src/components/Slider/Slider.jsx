import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './slider.scss';

import { useMediaQuery } from '@mui/material';

const Man = require('../../img/slider/Man.png');
const Ped = require('../../img/slider/Ped.jpg');
const Far = require('../../img/slider/Far.jpg');
const Str = require('../../img/slider/Str.jpg');

const Slider = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <section className="slider">
      <Swiper
        modules={[A11y, Pagination, Navigation]}
        slidesPerView={isSmallScreen ? 1 : 3}
        spaceBetween={52}
        centeredSlides={true}
        loop={true}
        centeredSlidesBounds={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="custom-swiper-slider"
      >
        <SwiperSlide>
          <div className="slide">
            <p>Манікюр</p>
            <img src={Man} alt="Манікюр" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <p>Педикюр</p>
            <img src={Ped} alt="Педикюр" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <p>Стрижки</p>
            <img src={Str} alt="Стрижка" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <p>Фарбування</p>
            <img src={Far} alt="Фарбування" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
