import Layout from '../components/layout/index';
import Slider from '../components/homeslider';
import Etkinlik from '../components/etkinlik';
import About from '../components/about';
import Hizmetler from '../components/hizmetler';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import SwiperCore, { Navigation, Autoplay, Lazy, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Contact from '../components/contact';
import Ogrenciyorumlari from '../components/ogrenciyorumlari';
import Seo from '../partials/seo';
import Popup from '../components/popup';

const { INSTA_URL } = process.env;


SwiperCore.use([Navigation, Autoplay, Lazy, EffectFade]);

const Home = ({ file, instadata }) => (
  <Layout>
    <Seo
      title="Vip Dahi Kalemler İstanbul"
      description="19 yılı aşmış tecrübemizle ve deneyimli eğitim kadromuzla öğrencilerimizin hedeflerine ulaşmaları konusunda rehber olmaktan gurur duyuyoruz."
    />
    <Popup />
    <Slider />
    <Hizmetler />
    <Etkinlik />
    <About />
    <section className={styles.section}>
      <div className={styles.title}>
        <h2>Kurslarımız</h2>
        <p>
          Dershanelerimizde vermiş olduğumuz kurslarımız. Uzman Öğretmen kadrolarımızla Öğrencileriniz emin ellerde.
        </p>
      </div>
      <Swiper
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
        {file.map(f => {
          return (
            <SwiperSlide className={styles.items} key={f.props.htmlString.slug}>
              <div className={styles.img} style={{ background: `url(${f.props.htmlString.image})` }}></div>
              <h3>
                <Link href={'/kurs/' + f.props.htmlString.slug}>
                  <a>{f.props.htmlString.title}</a>
                </Link>
              </h3>
              <p>{f.props.htmlString.description}</p>
              <Link href={'/kurs/' + f.props.htmlString.slug}>
                <a className={styles.button}>Devamını Oku</a>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
    <Contact />
    <Ogrenciyorumlari />

    <section id="instafeed" className={styles.instafeedsection}>
          <Swiper
            slidesPerView={4}
            autoplay={true}
            lazy={true}
            loop={true}
            spaceBetween={10}
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
            {instadata.data.map(d => {
                    return( 
                        <SwiperSlide key={d.id}>
                        <div className={styles.instafeedcontainer}
                          style={{backgroundImage:`url(${d.media_url})`}}
                        >
                        <a target="_blank" href={d.permalink}><span>{d.caption}</span></a>
                        </div>
                    </SwiperSlide>
                    )
                }).slice(0, 10)}
                
            </Swiper>
        </section>
  </Layout>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync('_posts/dersler');
  const instaresult = await fetch( INSTA_URL, {
    method: "GET"
  });

  const instafeed = await instaresult.json();


  const filesread = files.map(file => {
    const markdownWithData = fs.readFileSync(path.join('_posts/dersler', file)).toString();
    const parsedMarkdown = matter(markdownWithData);
    return {
      props: {
        htmlString: parsedMarkdown.data,
      },
    };
  });

  return {
    props: {
      slugs: files.map(filename => filename.replace('.md', '')),
      file: filesread,
      instadata: instafeed 
    },
  };
};

export default Home;
