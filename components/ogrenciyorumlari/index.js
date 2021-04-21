import { Component } from 'react';
import { attributes, react as YorumCompnent } from '../../content/ogrenciyorumlari.md';
import styles from './styles.module.css';
import SwiperCore, { Pagination, Autoplay, A11y, Lazy, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from 'react-icons/fa';

SwiperCore.use([Pagination, Autoplay, A11y, Lazy, EffectFade]);

class yorumlar extends Component {
  render() {
    let { comment } = attributes;
    return (
      <section className={styles.section}>
        <Swiper
          className={styles.slidecontainer}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={true}
          lazy={true}
          effect={'fade'}
          loop={true}
        >
          {comment.map((yorum, k) => (
            <SwiperSlide key={k}>
              <div className={styles.card}>
                <div className={styles.cardimg}>
                  <img src={yorum.image} />{' '}
                </div>
                <div className={styles.cardbody}>
                  <div className={styles.quote}>
                    <FaQuoteLeft size={100} />
                  </div>
                  <div className={styles.mesaj}>{yorum.mesaj}</div>
                  <div className={styles.name}>{yorum.name}</div>
                  <div className={styles.statu}>{yorum.statu}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }
}

export default yorumlar;
