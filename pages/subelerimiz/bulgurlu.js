import Layout from '../../components/layout';
import { Component } from 'react';
import { attributes, react as BulgurluCompnent } from '../../content/bulgurlu.md';
import HeroWrap from '../../components/herowrap';
import styles from './styles.module.css';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import Seo from '../../partials/seo';

class bulgurlu extends Component {
  render() {
    let { title, description, galeri } = attributes;
    return (
      <>
        <Seo title={title} description={description} />
        <Layout>
          <HeroWrap title={title} />
          <section className="w-11/12 m-auto text-justify pb-24">
            <article className="prose-lg w-full mt-20">
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
            <SimpleReactLightbox>
              <SRLWrapper>
                <div className={styles.kapsayici}>
                  <h3>Kursumuzdan Görüntüler</h3>
                  <div className={styles.gallery}>
                    {galeri.map((gal, k) => (
                      <a key={k} href={gal.image}>
                        <img width="280" height="350" src={gal.image} alt={gal.title} />
                      </a>
                    ))}
                  </div>
                </div>
              </SRLWrapper>
            </SimpleReactLightbox>
          </section>
        </Layout>
      </>
    );
  }
}

export default bulgurlu;
