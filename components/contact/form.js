import React from 'react';
import styles from './styles.module.css';

const ContactForm = () => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };
  return (
    <form
      className={styles.form}
      method="POST"
      action="/success"
      name="contact"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <input name="name" placeholder="Adınız Soyadınız" required={true} />
      </div>
      <div>
        <input name="email" placeholder="E-posta adresiniz" required={true} />
      </div>
      <div>
        <input name="telefon" placeholder="Telefon numaranız" required={true} />
      </div>
      <div>
        <textarea name="name" placeholder="Mesajınız" required={true}></textarea>
      </div>
      <div className="mt-4">
        <button type="submit">Gönder</button>
      </div>
    </form>
  );
};

export default ContactForm;
