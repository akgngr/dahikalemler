import styles from './styles.module.css';
import { Component } from 'react';
import { attributes, react as FooterContent } from '../../content/footer.md';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTwitterSquare, FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { SiYoutubetv } from 'react-icons/si';
import Link from 'next/link';

class Footer extends Component {
  render() {
    let {
      subebir_map,
      sube1_tel,
      sube1_mail,
      sube2_map,
      sube2_tel,
      sube2_mail,
      alt_footer,
      twitter,
      facebook,
      instagram,
      youtube,
      linkler,
    } = attributes;
    return (
      <>
        <footer className={styles.footer}>
          <div className={styles.ftcontainer}>
            <div>
              <h3>Çekmeköy Şubemiz</h3>
              <div>
                <span>
                  <FaMapMarkerAlt />
                </span>
                <span>{subebir_map}</span>
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
            <div>
              <h3>Bulgurlu Şubemiz</h3>
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
            <div>
              <h3>Hızlı Erişim</h3>
              <ul className={styles.linkler}>
                {linkler.map(l => (
                  <li key={l.url}>
                    <Link href={l.url}>
                      <a>{l.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Bizi Takip Edin</h3>
              <div className={styles.takip}>
                <span>
                  <a href={'https://twitter.com/' + twitter}>
                    <FaTwitterSquare size="2em" />
                  </a>
                </span>
                <span>
                  <a href={'https://fb.com/' + facebook}>
                    <FaFacebookSquare size="2em" />
                  </a>
                </span>
                <span>
                  <a href={'https://instagram.com/' + instagram}>
                    <ImInstagram size="2em" />
                  </a>
                </span>
                <span>
                  <a href={'https://youtube.com/' + youtube}>
                    <SiYoutubetv size="2em" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.altfooter} dangerouslySetInnerHTML={{ __html: alt_footer }}></div>
        </footer>
      </>
    );
  }
}

export default Footer;
