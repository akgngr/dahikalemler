import react from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import styles from './styles.module.css';
import Layout from '../../components/layout';
import Hero from '../../components/herowrap';
import Seo from '../../partials/seo';

const Dersler = ({ contents, data }) => {
  return (
    <>
      <Seo title={data.title} description={data.description} />
      <Layout>
        <Hero title={data.title} />
        <article className={styles.article}>
          <img src={data.image} width="100%" />
          <div dangerouslySetInnerHTML={{ __html: contents }} />
        </article>
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync('_posts/dersler');
  //console.log(files);

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));
  //console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithData = fs.readFileSync(path.join('_posts/dersler', slug + '.md')).toString();
  const parsedMarkdown = matter(markdownWithData);
  const htmlString = marked(parsedMarkdown.content);
  return {
    props: {
      contents: htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Dersler;
