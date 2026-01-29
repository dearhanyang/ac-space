import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
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
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anime%20style%20boy%20with%20glasses%20wearing%20blue%20hoodie%20with%20cat%20ears%2C%20red%20bow%20tie%2C%20surprised%20expression%2C%20white%20background%2C%20cartoon%20style%2C%20high%20quality&image_size=square_hd" 
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
            <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          
          <a 
            href="https://wpa.qq.com/msgrd?v=3&uin=YOUR_QQ_NUMBER&site=qq&menu=yes" 
            className={styles.socialButton}
            title="QQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-13h4v2h-4V7zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2z"/>
            </svg>
          </a>
          
          <a 
            href="#" 
            className={styles.socialButton}
            title="WeChat"
            onClick={(e) => {
              e.preventDefault();
              alert('请扫描二维码添加微信');
            }}
          >
            <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.5 14.5c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm6 4.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/>
              <path d="M4 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm4 3c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}