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
            <div className={styles.ftcard}>
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
            <div className={styles.ftcard}>
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
                  <a href={'tel:' + sube2_sabit}>{sube2_sabit}</a>{' '}
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
            <div className={styles.ftcard}>
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
                  <a href={'tel:' + sube3_sabit}>{sube3_sabit}</a>{' '}
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
            <div className={styles.ftcard}>
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
          </div>
          <div className={styles.altfooter}>
            <div className={styles.altfootertext} dangerouslySetInnerHTML={{ __html: alt_footer }}></div>
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
        </footer>
      </>
    );
  }
}

export default Footer;
