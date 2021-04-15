import styles from './styles.module.css';
import Layout from '../../components/layout';
import react, { Component } from 'react';
import { attributes, react as SubelerimizCompnent } from '../../content/subelerimiz.md';
import HeroWrap from '../../components/herowrap';

class Subelerimiz extends Component {
  render() {
    let { title } = attributes;
    return (
      <Layout>
        <HeroWrap title={title} />
        <section>
          <h1>{title}</h1>
        </section>
      </Layout>
    );
  }
}

export default Subelerimiz;
