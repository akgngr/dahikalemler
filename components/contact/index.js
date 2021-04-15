import styles from './styles.module.css';
import Form from './form';

const Contact = () => {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>
      <div className={styles.govde}>
        <div></div>
        <div className={styles.formalani}>
          <h3>Bizimle İletişime Geçin</h3>
          <p>Akılınızda sorular mı var? Çekenmeden bize aklınızdaki soruları sorun.</p>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
