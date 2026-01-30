import React from 'react';
import clsx from 'clsx';
import styles from './about.module.css';
import Layout from '@theme/Layout';

const AboutPage = () => {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div className={styles.container}>
        <div className={styles.profileCard}>
          <div className={styles.avatarContainer}>
            <img
              src="/img/avatar.jpg"
              alt="Avatar"
              className={styles.avatar}
            />
          </div>
          <div className={styles.profileInfo}>
            <h2>你好！我是一个热情、开朗的大男孩</h2>
            <p className={styles.tagline}>
              爱专研技术，乐于助人，遇到喜欢的话题会滔滔不绝
            </p>
            <p>
              我对技术充满好奇，喜欢探索各种编程语言和技术栈。在学习和工作中，我总是保持着积极向上的态度，
              乐于帮助他人解决问题，并且善于深入研究各种技术难题。
            </p>
          </div>
        </div>

        {/* 兴趣爱好 */}
        <div className={styles.hobbiesSection}>
          <h2>兴趣爱好</h2>
          <div className={styles.hobbiesGrid}>
            <div className={styles.hobbyItem}>
              <div className={styles.hobbyIcon}>
                <span className={styles.iconText}>💻</span>
              </div>
              <h3>编程</h3>
              <p>热爱算法和编程竞赛，喜欢挑战各种技术难题</p>
            </div>
            <div className={styles.hobbyItem}>
              <div className={styles.hobbyIcon}>
                <span className={styles.iconText}>🔢</span>
              </div>
              <h3>数学</h3>
              <p>喜欢数学的逻辑性和挑战性，是编程竞赛的基础</p>
            </div>
            <div className={styles.hobbyItem}>
              <div className={styles.hobbyIcon}>
                <span className={styles.iconText}>♟️</span>
              </div>
              <h3>围棋</h3>
              <p>喜欢围棋的策略性，培养逻辑思维能力</p>
            </div>
            <div className={styles.hobbyItem}>
              <div className={styles.hobbyIcon}>
                <span className={styles.iconText}>🎨</span>
              </div>
              <h3>画画</h3>
              <p>通过绘画表达创意，放松身心</p>
            </div>
            <div className={styles.hobbyItem}>
              <div className={styles.hobbyIcon}>
                <span className={styles.iconText}>🏀</span>
              </div>
              <h3>打篮球</h3>
              <p>享受团队合作和运动的乐趣</p>
            </div>
            <div className={styles.hobbyItem}>
              <div className={styles.hobbyIcon}>
                <span className={styles.iconText}>🏸</span>
              </div>
              <h3>打羽毛球</h3>
              <p>喜欢快速反应和精准控制的运动</p>
            </div>
          </div>
        </div>

        {/* 竞赛经历时间线 */}
        <div className={styles.timelineSection}>
          <h2>竞赛经历</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2024年3月</h3>
                <p>开始学习C++，踏上编程竞赛之路</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2025年10月</h3>
                <p>获得CSP-J一等奖，CSP-S二等奖</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2026年</h3>
                <p>未完待续...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;