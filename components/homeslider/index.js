import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import styles from './styles.module.css'

const myLoader = ({ src }) => {
  return `${src}`
}

const Slider = () => {
  return (
    <Swiper
      className={styles.slidecontainer}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <div className="">
          <div className="bgWrap">
            <Image
              loader={myLoader}
              alt="Mountains"
              src="/image/slider/bg_1.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className={styles.overlay}></div>
          <div className={styles.textcontainer}>
            <div className={styles.slidertext}>
              <div className={styles.text}>
                <h1 className={styles.texthead}>Education Needs Complete Solution</h1>
                <p className={styles.textp}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <p className={styles.textp}><a href="#" className={styles.textbutton + ' button-default'} >Contact Us</a></p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-item">
          <div className="bgWrap">
            <Image
              loader={myLoader}
              alt="Mountains"
              src="/image/slider/bg_2.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className={styles.overlay}></div>
          <div className={styles.textcontainer}>
            <div className={styles.slidertext}>
              <div className={styles.text}>
                <h1 className={styles.texthead}>Education Needs Complete Solution</h1>
                <p className={styles.textp}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <p className={styles.textp}><a href="#" className={styles.textbutton + ' button-default'} >Contact Us</a></p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider
