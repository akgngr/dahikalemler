import { Component } from 'react';
import { attributes, react as AboutCompnent } from '../../content/about.md';
import styles from './styles.module.css';
import CountUp from 'react-countup';

class about extends Component {
  render() {
    let { title, description1, description2, ogretmen, ogrenci, sube, sinif } = attributes;
    return (
      <section className={styles.section}>
        <div className={styles.overlay}></div>
        <div className={styles.about}>
          <div className={styles.aboutimg}>
            <a
              href="https://vimeo.com/45830194"
              className="h-20 w-20 flex justify-center items-center rounded-full bg-white"
            >
              <span className={styles.iconplay}></span>
            </a>
          </div>
          <div className="z-10 mr-4 ml-4">
            <h1 className="text-4xl font-bold pb-8">{title}</h1>
            <p className="mb-6">{description1}</p>
            <p>{description2}</p>
          </div>
        </div>
        {/*
        <div className={styles.count}>
          <div className={styles.countelement}>
            <strong>
              <CountUp start={0} end={ogretmen} delay={0} duration={10} />
            </strong>
            <span>Öğretmen Sayımız</span>
          </div>
          <div className={styles.countelement}>
            <strong>
              <CountUp start={0} end={ogrenci} delay={0} duration={10} />
            </strong>
            <span>Öğrenci Sayımız</span>
          </div>
          <div className={styles.countelement}>
            <strong>
              <CountUp start={0} end={sube} delay={0} duration={10} />
            </strong>
            <span>Şubelerimiz</span>
          </div>
          <div className={styles.countelement}>
            <strong>
              <CountUp start={0} end={sinif} delay={0} duration={10} />
            </strong>
            <span>Sınıflarımız</span>
          </div>
        </div>
          */}
      </section>
    );
  }
}

export default about;
