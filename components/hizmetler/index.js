import styles from './styles.module.css'
import { Component } from 'react'
import SwiperCore, { Navigation, Autoplay, Lazy, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { attributes, react as HizmetComponent } from '../../content/hizmetler.md';

SwiperCore.use([Navigation, Autoplay, Lazy, EffectFade]);


class Hizmetler extends Component {
  render(){
    let { hizmet1,
          description1,
          hizmet2,
          description2,
          hizmet3,
          description3,
          hizmet4,
          description4 } = attributes;

    return(
      <section className={styles.section}>
        <Swiper
          className={styles.slidecontainer}
          slidesPerView={4}
          autoplay={true}
          lazy={true}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            360: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <div className={styles.hizmet1}>
              <span>
                <object type="image/svg+xml"
                        data="/svg/teacher.svg"
                        className={styles.icon}>
                  icon
                </object>
              </span>
              <h3 className={styles.baslik}>{hizmet1}</h3>
              <p className={styles.p}>
                {description1}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.hizmet2}>
              <span>
                <object type="image/svg+xml"
                        data="/svg/meeting.svg"
                        className={styles.icon}>
                  icon
                </object>
              </span>
              <h3 className={styles.baslik}>{hizmet2}</h3>
              <p className={styles.p}>
                {description2}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.hizmet1}>
              <span>
                <object type="image/svg+xml"
                        data="/svg/books.svg"
                        className={styles.icon}>
                  icon
                </object>
              </span>
              <h3 className={styles.baslik}>{hizmet3}</h3>
              <p className={styles.p}>
                {description3}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.hizmet2}>
              <span>
                <object type="image/svg+xml"
                        data="/svg/certificate.svg"
                        fill="#fff"
                        className={styles.icon}>
                  icon
                </object>
              </span>
              <h3 className={styles.baslik}>{hizmet4}</h3>
              <p className={styles.p}>
                {description4}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    )
  }
}

export default Hizmetler
