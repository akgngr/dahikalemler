import Layout from '../../components/layout';
import styles from './styles.module.css';
import HeroWrap from '../../components/herowrap';
import { attributes, react as FooterContent } from '../../content/footer.md';
import { Component } from 'react';
import Iframe from 'react-iframe';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Seo from '../../partials/seo';

class yazkursu extends Component {
  render() {
    let {
      sube1_title,
      sube1_map,
      sube1_tel,
      sube1_sabit,
      sube1_mail,
      sube2_title,
      sube2_map,
      sube2_tel,
      sube2_sabit,
      sube2_mail,
      sube3_title,
      sube3_map,
      sube3_tel,
      sube3_sabit,
      sube3_mail,
    } = attributes;
    return (
      <>
        <Seo
          title="Vip Dahi Kalemler Yaz Kursu Kayıt Formu"
          description="Yaz kursu kayıtı için bizimle iletişime geçin. İsterseniz iletişim bilgilerinizi girin biz sizi arayalım."
        />
        <Layout>
          <HeroWrap title="Yaz Kursu Başvuru Formu" />
          <section className={styles.section}>
            <article className={styles.form}>
              <header className="mb-6">
                <h2 className="font-semibold text-yellow-700 text-2xl pb-2">Yaz Kursu Başvuru Formu</h2>
                <p className="font-light">
                  Yaz kursu kayıtı için iletişim bilgilerinizi bırakın sizinle iletişime geçelim..
                </p>
              </header>
              <div className={styles.contactform}>
                <form method="POST" name="yazkursu" action="/success" netlify-honeypot="bot-field" data-netlify="true">
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                  </p>
                  <input type="hidden" name="form-name" value="yazkursu" />
                  <div className={styles.formControl}>
                    <label htmlFor="name">
                      <b>Adınız Soyadınız</b>
                    </label>
                    <input type="text" name="name" id="name" placeholder="Adınız Soyadınız" required={true} />
                  </div>
                  <div className={styles.formControl}>
                    <label htmlFor="email">
                      <b>E-posta Adresiniz</b>
                    </label>
                    <input type="email" name="email" id="email" placeholder="Varsa e-posta adresiniz" />
                  </div>
                  <div className={styles.formControl}>
                    <label htmlFor="telefon">
                      <b>Telefon Numaranız</b>
                    </label>
                    <input type="tel" name="telefon" id="telefon" placeholder="Telefon numaranız" required={true} />
                  </div>
                  <div className={styles.formControl}>
                    <label>
                      <b>Öğrencinin Sınıfı</b>
                    </label>
                    <select className={styles.select} id="sinif" name="sinif" required={true}>
                      <option>--Seçim Yapınız--</option>
                      <option value="5. Sınıf">5. Sınıf</option>
                      <option value="6. Sınıf">6. Sınıf</option>
                      <option value="8. Sınıf">8. Sınıf</option>
                      <option value="9. Sınıf">9. Sınıf</option>
                      <option value="10. Sınıf">10. Sınıf</option>
                      <option value="12. Sınıf">12. Sınıf</option>
                      <option value="Mezun">Mezun</option>
                    </select>
                  </div>
                  <div className={styles.formControl}>
                    <label htmlFor="mesaj">
                      <b>Mesajınız</b>
                    </label>
                    <textarea name="mesaj" id="mesaj" placeholder="Varsa bir mesajınız buraya yazın."></textarea>
                  </div>
                  <div className="mt-4">
                    <button type="submit">Gönder</button>
                  </div>
                </form>
              </div>
            </article>
            <div className={styles.haritalar}>
              <div className={styles.iletisimalt}>
                <div>
                  <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96309.97948803555!2d29.105437570294924!3d41.032106354094026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf9c0348e6ef%3A0x329c1536e6fdf92a!2zVklQIERBSMSwIEtBTEVNTEVSIMOHRUtNRUvDllkgxZ5VQkVTxLA!5e0!3m2!1str!2str!4v1618516625589!5m2!1str!2str"
                    width="100%"
                    height="355"
                    style="border:0;"
                    allowFullScreen=""
                    loading="lazy"
                  ></Iframe>
                </div>
                <div>
                  <h3>{sube1_title}</h3>
                  <div>
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    <span>{sube1_map}</span>
                  </div>
                  <div>
                    <span>
                      <FaPhone />
                    </span>
                    <span>
                      <a href={'tel:' + sube1_tel}>{sube1_tel}</a>
                    </span>
                  </div>
                  <div>
                    <span>
                      <FaPhone />
                    </span>
                    <span>
                      <a href={'tel:' + sube1_sabit}>{sube1_sabit}</a>
                    </span>
                  </div>
                  <div>
                    <span>
                      <FaEnvelope />
                    </span>
                    <span>
                      <a href={'mailto:' + sube1_mail}>{sube1_mail}</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.iletisimalt}>
                <div>
                  <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387.25810902885723!2d29.182020427943957!3d41.031730272023694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf035a568e93%3A0x25f2eabdcba12e2b!2zS2_Dp3RhxZ8gRml4!5e0!3m2!1str!2str!4v1618909534026!5m2!1str!2str"
                    width="100%"
                    height="355"
                    style="border:0;"
                    allowFullScreen=""
                    loading="lazy"
                  ></Iframe>
                </div>
                <div>
                  <h3>{sube2_title}</h3>
                  <div>
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    <span>{sube2_map}</span>
                  </div>
                  <div>
                    <span>
                      <FaPhone />
                    </span>
                    <span>
                      <a href={'tel:' + sube2_tel}>{sube2_tel}</a>{' '}
                    </span>
                  </div>
                  <div>
                    <span>
                      <FaPhone />
                    </span>
                    <span>
                      <a href={'tel:' + sube2_sabit}>{sube2_sabit}</a>
                    </span>
                  </div>
                  <div>
                    <span>
                      <FaEnvelope />
                    </span>
                    <span>
                      <a href={'mailto:' + sube2_mail}>{sube2_mail}</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.iletisimalt}>
                <div>
                  <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.309103960204!2d29.078346315152483!3d41.01849292674551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9b3e0cba229%3A0xe98af6b3e14516ec!2sVIP%20DAH%C4%B0%20KALEMLER%20BULGURLU%20%C5%9EUBES%C4%B0!5e0!3m2!1str!2str!4v1618909854643!5m2!1str!2str"
                    width="100%"
                    height="355"
                    style="border:0;"
                    allowFullScreen=""
                    loading="lazy"
                  ></Iframe>
                </div>
                <div>
                  <h3>{sube3_title}</h3>
                  <div>
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    <span>{sube3_map}</span>
                  </div>
                  <div>
                    <span>
                      <FaPhone />
                    </span>
                    <span>
                      <a href={'tel:' + sube3_tel}>{sube3_tel}</a>{' '}
                    </span>
                  </div>
                  <div>
                    <span>
                      <FaPhone />
                    </span>
                    <span>
                      <a href={'tel:' + sube3_sabit}>{sube3_sabit}</a>
                    </span>
                  </div>
                  <div>
                    <span>
                      <FaEnvelope />
                    </span>
                    <span>
                      <a href={'mailto:' + sube3_mail}>{sube3_mail}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}

export default yazkursu;
