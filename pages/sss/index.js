import { Component } from 'react';
import { attributes, react as SssContent } from '../../content/sss.md';
import HeroWrap from '../../components/herowrap';
import Tabs from '../../components/disclosure';
import Layout from '../../components/layout';
import Seo from '../../partials/seo';

class Sss extends Component {
  render() {
    let { title, description, sorular } = attributes;
    return (
      <>
        <Seo title={title} description={description} />
        <Layout>
          <HeroWrap title={title} />
          <section className="w-9/12 m-auto pt-12 pb-8">
            <h2 className="font-semibold text-lg text-yellow-700 pb-4">{title}</h2>
            <p>{description}</p>

            <div className="w-full px-4 pt-16">
              <div className="w-full max-w-4xl p-2 mx-auto bg-white rounded-2xl">
                {sorular.map((sss, k) => (
                  <span className="my-2 block" key={k}>
                    <Tabs soru={sss.soru} text={sss.text} />
                  </span>
                ))}
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }
}

export default Sss;
