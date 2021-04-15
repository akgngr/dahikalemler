import Layout from '../../components/layout';
import styles from './styles.module.css';
import HeroWrap from '../../components/herowrap';
import { attributes, react as FooterContent } from '../../content/footer.md';
import { Component } from 'react';
import Iframe from 'react-iframe';
import { Formik } from 'formik';

class iletisim extends Component {
  render() {
    let { subebir_map, sube1_tel, sube1_mail, sube2_map, sube2_tel, sube2_mail } = attributes;
    return (
      <Layout>
        <HeroWrap title="İletişim" />
        <section className={styles.section}>
          <div className={styles.iletisimust}>
            <div>
              <h3>Adresler</h3>
              <div>
                <span>
                  <h4>Çekmeköy Şubesi</h4>
                  <p>{subebir_map}</p>
                </span>
                <span>
                  <h4>Bulgurlu Şubesi</h4>
                  <p>{sube2_map}</p>
                </span>
              </div>
            </div>
            <div>
              <h3>Telefon</h3>
              <div>
                <span>
                  <h4>Çekmeköy Şubesi</h4>
                  <p>{sube1_tel}</p>
                </span>
                <span>
                  <h4>Bulgurlu Şubesi</h4>
                  <p>{sube2_tel}</p>
                </span>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3>E-posta</h3>
              <div>
                <span>
                  <h4>Çekmeköy Şubesi</h4>
                  <p>{sube1_mail}</p>
                </span>
                <span>
                  <h4>Bulgurlu Şubesi</h4>
                  <p>{sube2_mail}</p>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.iletisimalt}>
            <div>
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96309.97948803555!2d29.105437570294924!3d41.032106354094026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf9c0348e6ef%3A0x329c1536e6fdf92a!2zVklQIERBSMSwIEtBTEVNTEVSIMOHRUtNRUvDllkgxZ5VQkVTxLA!5e0!3m2!1str!2str!4v1618516625589!5m2!1str!2str"
                width="100%"
                height="555"
                style="border:0;"
                allowFullScreen=""
                loading="lazy"
              ></Iframe>
            </div>
            <div className={styles.form}>
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
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
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
                  <form onSubmit={handleSubmit} className={styles.form}>
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
                    <button type="submit" disabled={isSubmitting}>
                      Gönder
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default iletisim;
