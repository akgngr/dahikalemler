import React from 'react';
import { Field, Form, Formik } from 'formik';
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
        onSubmit={(values, actions, { setSubmitting }) => {
          setTimeout(() => {
            fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: encode({ 'form-name': 'contact', ...values }),
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
        {({ errors, touched, isSubmitting }) => (
          <Form name="contact" className={styles.form} netlify-honeypot="bot-field" data-netlify={true}>
            <Field type="hidden" name="bot-field" />
            <Field type="hidden" name="contact" />
            <div className={styles.formControl}>
              <Field name="name" placeholder="Ad, Soyad" />
              {errors.name && touched.name && (
                <span className="p-2 text-white text-sm mt-2 block bg-yellow-600"> {errors.name} </span>
              )}
            </div>
            <div className={styles.formControl}>
              <Field name="email" placeholder="Eposta adresiniz" />
              {errors.email && touched.email && (
                <span className="p-2 text-white text-sm mt-2 block bg-yellow-600"> {errors.email} </span>
              )}
            </div>
            <div className={styles.formControl}>
              <Field name="phone" placeholder="Telefon numarnız" />
              {errors.phone && touched.phone && (
                <div className="p-2 text-white text-sm mt-2 block bg-yellow-600"> {errors.phone} </div>
              )}
            </div>
            <div className={styles.formControl}>
              <Field name="mesaj" placeholder="Mesajınız" component="textarea" />
              {errors.mesaj && touched.mesaj && (
                <span className="p-2 text-white text-sm mt-2 block bg-yellow-600"> {errors.mesaj} </span>
              )}
            </div>
            <div className="pt-4">
              <button type="submit" disabled={isSubmitting}>
                Gönder
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
