import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Icon_Emal from '@site/static/img/email.svg';
import Icon_QQ from '@site/static/img/qq.svg';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <main className={styles.mainContainer}>
      <div className={styles.backgroundOverlay}></div>

      <div className={styles.contentContainer}>
        <div className={styles.avatarContainer}>
          <img
            src={require('@site/static/img/avatar.jpg').default}
            alt="AC Avatar"
            className={styles.avatar}
          />
        </div>

        <div className={styles.profileCard}>
          <h1 className={styles.title}>AC的个人空间</h1>
          <p className={styles.subtitle}>{siteConfig.tagline}</p>

          <Link
            className={clsx('button button--primary', styles.blogButton)}
            to="/blog">
            Go to Blog
          </Link>
        </div>

        <div className={styles.socialButtons}>
          <a
            href="mailto:dearhangyang@qq.com"
            className={styles.socialButton}
            title="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon_Emal title="Email" className={styles.socialIcon} />
          </a>

          <a
            href="https://wpa.qq.com/msgrd?v=3&uin=2050805629&site=qq&menu=yes"
            className={styles.socialButton}
            title="QQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon_QQ title="QQ" className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </main>
  );
}
