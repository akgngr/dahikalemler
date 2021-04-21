import Layout from '../../components/layout';
import { Component } from 'react';
import { attributes, react as FarkimizCompnent } from '../../content/farkimiz.md';
import HeroWrap from '../../components/herowrap';
import Seo from '../../components/seo';

class farkimiz extends Component {
  render() {
    let { title, description } = attributes;
    return (
      <>
        <Seo title={title} description={description} />
        <Layout>
          <HeroWrap title={title} />
          <section className="w-8/12 m-auto text-justify">
            <article className="prose prose-lg prose-yellow w-full mt-20">
              <div dangerouslySetInnerHTML={{ __html: FarkimizCompnent }} />
            </article>
          </section>
        </Layout>
      </>
    );
  }
}

export default farkimiz;
