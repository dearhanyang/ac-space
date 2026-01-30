import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <main className={styles.mainContainer}>
      <div className={styles.backgroundOverlay}>
        <div className={styles.treeLeft}></div>
        <div className={styles.treeRight}></div>
        <div className={styles.mountains}></div>
        <div className={styles.deer}></div>
        <div className={styles.hexagons}></div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.avatarContainer}>
          <img
            src="https://github.com/dearhanyang.png"
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
            <img src="/img/email.svg" alt="Email" className={styles.socialIcon} />
          </a>

          <a
            href="https://wpa.qq.com/msgrd?v=3&uin=2050805629&site=qq&menu=yes"
            className={styles.socialButton}
            title="QQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/qq.svg" alt="QQ" className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </main>
  );
}