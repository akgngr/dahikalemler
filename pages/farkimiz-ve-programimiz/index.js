import Layout from '../../components/layout';
import { Component } from 'react';
import { attributes, react as FarkimizCompnent } from '../../content/farkimiz.md';
import HeroWrap from '../../components/herowrap';

class farkimiz extends Component {
  render() {
    let { title } = attributes;
    return (
      <Layout>
        <HeroWrap title={title} />
        <section className="w-11/12 m-auto text-justify">
          <article className="prose-lg w-full mt-20">
            <FarkimizCompnent />
          </article>
        </section>
      </Layout>
    );
  }
}

export default farkimiz;
