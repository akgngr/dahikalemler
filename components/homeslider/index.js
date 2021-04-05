import { Component } from 'react'
import SwiperCore, { Navigation, Pagination, Autoplay, A11y, Lazy, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.css'
import { attributes, react as SliderContent } from '../../content/slider.md';

SwiperCore.use([Navigation, Pagination, Autoplay, A11y, Lazy, EffectFade]);

export default class Slider extends Component {

  render(){
    let { title, slider } = attributes;
    return (
      <>
      <Swiper
        navigation
        className={styles.slidecontainer}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true}
        lazy={true}
        effect={"fade"}
        loop={true}
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
      <SliderContent />
      <ul>
      {slider.map((slides, k) => (
        <li key={k}>
          <h2>{slides.title}</h2>
          <p>{slides.description}</p>
          <p>{slides.image}</p>
          <p>{slides.url}</p>
        </li>
      ))}
    </ul>
    </>
    );
  }
}
