import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const Dersler = ({ file }) => (
  <div>
    {file.map(f => {
      return (
        <div key={f.props.htmlString.slug}>
          <Link href={'/ders/' + f.props.htmlString.slug}>
            <a>{f.props.htmlString.title}</a>
          </Link>
        </div>
      );
    })}
    -
  </div>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync('_posts/dersler');
  console.log(files);

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

export default Dersler;
