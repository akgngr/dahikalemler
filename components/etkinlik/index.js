import { Component } from 'react'
import { attributes, react as HomeContent } from '../../content/etkinlik.md';
import styles from './styles.module.css'

class etkinlik extends Component {
    render() {
        let { title, description, image, etkinlikler } = attributes;
        return(
            <>
            <section className={styles.section}>

                <div className={styles.aboutleft}>
                    <div>
                        <h1 className="font-bold mb-4 text-3xl">{title}</h1>
                        <p>{description}</p>
                    </div>
                    <div className={styles.etkinliklist}>
                        {etkinlikler.map((etkinlik, k) => (
                          <span className={styles.span} key={k}>
                              <span className={styles.iconspan}>
                                  <object type="image/svg+xml"
                                          data={etkinlik.icon}
                                          className={styles.icon}>
                                    {etkinlik.icon}
                                  </object>
                              </span>
                              <span className="col-span-3 leading-1">
                                  <h2 className="font-medium text-xl">{etkinlik.name}</h2>
                                  <p className="leading-7">{etkinlik.description}</p>
                              </span>
                          </span>
                        ))}
                    </div>
                </div>

                <div className={styles.aboutright}>
                    <img src={image} />
                </div>

            </section>
            </>
        )
    }
}

export default etkinlik
