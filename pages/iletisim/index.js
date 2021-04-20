import Layout from '../../components/layout';
import styles from './styles.module.css';
import HeroWrap from '../../components/herowrap';
import { attributes, react as FooterContent } from '../../content/footer.md';
import { Component } from 'react';
import Iframe from 'react-iframe';
import { Formik } from 'formik';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

class iletisim extends Component {
  render() {
    let {
      sube1_title,
      sube1_map,
      sube1_tel,
      sube1_mail,
      sube2_title,
      sube2_map,
      sube2_tel,
      sube2_mail,
      sube3_title,
      sube3_map,
      sube3_tel,
      sube3_mail,
    } = attributes;
    return (
      <Layout>
        <HeroWrap title="İletişim" />
        <section className={styles.section}>
          <article className={styles.form}>
            <header>
              <h2 className="font-semibold text-yellow-700 text-2xl pb-2">İletişim Formu</h2>
              <p className="font-light">
                Bizimle iletişime geçin.. İsterseniz iletişim bilgilerinizi girin biz sizinle iletişime geçelim..
              </p>
            </header>
            <Formik
              initialValues={{ name: '', email: '', phone: '', sinif: '', mesaj: '' }}
              validate={values => {
                const errors = {};
                if (!values.email || !values.name || !values.phone || !values.sinif || !values.mesaj) {
                  errors.email = 'Gerekli';
                  errors.name = 'Gerekli';
                  errors.phone = 'Gerekli';
                  errors.mesaj = 'Gerekli';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                  errors.email = 'Hatalı Eposta Adresi';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: encode({ 'form-name': 'contact-demo', ...values }),
                  })
                    .then(() => {
                      alert('Success');
                      actions.resetForm();
                    })
                    .catch(() => {
                      alert('Error');
                    })
                    .finally(() => actions.setSubmitting(false));
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit} className={styles.form} data-netlify={true}>
                  <div className={styles.formControl}>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder="Ad, Soyad"
                    />
                    {errors.name && touched.name && (
                      <span className="p-2 text-white bg-yellow-600"> {errors.name} </span>
                    )}
                  </div>
                  <div className={styles.formControl}>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Eposta Adresiniz"
                    />
                    {errors.email && touched.email && (
                      <span className="p-2 text-white bg-yellow-600"> {errors.email} </span>
                    )}
                  </div>
                  <div className={styles.formControl}>
                    <input
                      type="tel"
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      placeholder="Telefon Numaranız"
                    />
                    {errors.phone && touched.phone && (
                      <div className="p-2 text-white bg-yellow-600"> {errors.phone} </div>
                    )}
                  </div>
                  <div className={styles.formControl}>
                    <textarea
                      name="mesaj"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mesaj}
                      placeholder="Mesajınız"
                      cols={6}
                    ></textarea>
                    {errors.mesaj && touched.mesaj && (
                      <span className="p-2 text-white bg-yellow-600"> {errors.mesaj} </span>
                    )}
                  </div>
                  <div className="pt-4">
                    <button type="submit" disabled={isSubmitting}>
                      Gönder
                    </button>
                  </div>
                </form>
              )}
            </Formik>
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
    );
  }
}

export default iletisim;
