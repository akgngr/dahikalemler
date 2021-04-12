import styles from './styles.module.css';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

const HeroWrap = props => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.herocontent}>
        <h1 className="text-4xl mb-4 font-black">{props.title}</h1>
        <div className={styles.breadcrumbs}>
          <span>
            <Link href="/">
              <a className="flex items-center border-b-2 border-yellow-500">
                Anasayfa <IoIosArrowForward />
              </a>
            </Link>
          </span>
          <span>{props.title}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroWrap;
