import React from 'react';
import { Formik } from 'formik';
import styles from './styles.module.css';

const ContactForm = () => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };
  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', phone: '', sinif: '', mesaj: '' }}
        validate={values => {
          const errors = {};
          if (!values.email || !values.name || !values.phone || !values.sinif || !values.mesaj) {
            errors.email = 'Gerekli';
            errors.name = 'Gerekli';
            errors.phone = 'Gerekli';
            errors.sinif = 'Gerekli';
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
            <div>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Ad, Soyad"
              />
              {errors.name && touched.name && <span className="p-2 text-white bg-yellow-600"> {errors.name} </span>}
              <input
                type="text"
                name="sinif"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sinif}
                placeholder="Öğrencinin Sınıfı"
              />
              {errors.sinif && touched.sinif && <span className="p-2 text-white bg-yellow-600"> {errors.sinif} </span>}
              <textarea
                name="mesaj"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mesaj}
                placeholder="Mesajınız"
              ></textarea>
              {errors.mesaj && touched.mesaj && <span className="p-2 text-white bg-yellow-600"> {errors.mesaj} </span>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Eposta Adresiniz"
              />
              {errors.email && touched.email && <span className="p-2 text-white bg-yellow-600"> {errors.email} </span>}
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                placeholder="Telefon Numaranız"
              />
              {errors.phone && touched.phone && <div className="p-2 text-white bg-yellow-600"> {errors.phone} </div>}
              <button type="submit" disabled={isSubmitting}>
                Gönder
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
