import Layout from '../../components/layout';
import { Component } from 'react';
import { attributes, react as DuyurularCompnent } from '../../content/duyurular.md';
import HeroWrap from '../../components/herowrap';
import styles from './styles.module.css';
import Moment from 'moment';
import Seo from '../../partials/seo';

class duyurular extends Component {
  render() {
    Moment.locale('tr');
    let { title, description, duyurulist } = attributes;
    return (
      <>
        <Seo title={title} description={description} />
        <Layout>
          <HeroWrap title={title} />
          <section className="w-9/12 m-auto text-justify">
            <article className="prose prose-lg w-full mt-20">
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
            <div className={styles.etkinliklist}>
              {duyurulist
                .map((duyuru, k) => (
                  <div className={styles.card} key={k}>
                    <span className="col-span-3 leading-1">
                      <div className={styles.baslik}>
                        <h3 className="font-medium text-xl">{duyuru.name}</h3>
                        <span>
                          Etkinlik Tarihi: <strong>{Moment(duyuru.date).format('D.M.Y - H:D')}</strong>
                        </span>
                      </div>
                      <p className="leading-7">{duyuru.description}</p>
                    </span>
                  </div>
                ))
                .reverse()}
            </div>
          </section>
        </Layout>
      </>
    );
  }
}

export default duyurular;
