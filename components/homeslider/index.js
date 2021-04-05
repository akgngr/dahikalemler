import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.css'

const Slider = () => {
  return (
    <Swiper
      className={styles.slidecontainer}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay= {{
        delay: 5000,
      }}
    >
      <SwiperSlide>
        <div className="">
          <div className="bgWrap">
            <img
              alt="Mountains"
              src="/image/slider/bg_1.jpg"
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
            <img
              alt="Mountains"
              src="/image/slider/bg_2.jpg"
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
