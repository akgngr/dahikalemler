import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../../components/layout';
import styles from './styles.module.css';
import HeroWrap from '../../components/herowrap';
import Seo from '../../partials/seo';

const Kurslarimiz = ({ file }) => (
  <>
    <Seo title="Kurslarımız" description="Bünyemizde eğitimini verdiğimiz kurslarımız." />
    <Layout>
      <HeroWrap title="Kurslarımız" />
      <section className={styles.section}>
        {file.map(f => {
          return (
            <div className={styles.card} key={f.props.htmlString.slug}>
              <div className={styles.img} style={{ background: `url(${f.props.htmlString.image})` }}></div>
              <h3>
                <Link href={'/kurs/' + f.props.htmlString.slug}>
                  <a>{f.props.htmlString.title}</a>
                </Link>
              </h3>
              <p>{f.props.htmlString.description}</p>
              <Link href={'/kurs/' + f.props.htmlString.slug}>
                <a className={styles.button}>Devamını Oku</a>
              </Link>
            </div>
          );
        })}
      </section>
    </Layout>
  </>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync('_posts/dersler');
  //console.log(files);

  const filesread = files.map(file => {
    const markdownWithData = fs.readFileSync(path.join('_posts/dersler', file)).toString();
    const parsedMarkdown = matter(markdownWithData);
    return {
      props: {
        htmlString: parsedMarkdown.data,
      },
    };
  });

  return {
    props: {
      slugs: files.map(filename => filename.replace('.md', '')),
      file: filesread,
    },
  };
};

export default Kurslarimiz;
