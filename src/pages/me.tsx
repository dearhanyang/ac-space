import React from 'react';
import clsx from 'clsx';
import styles from './me.module.css';
import Layout from '@theme/Layout';

const MePage = () => {
  return (
    <Layout title="Hello" description="Hello Me">
      <div className={styles.container}>
        <div className={styles.profileCard}>
          <div className={styles.avatarContainer}>
            <img
              src="img/avatar.jpg"
              alt="Avatar"
              className={styles.avatar}
            />
          </div>
          <div className={styles.profileInfo}>
            <h2>你好，我是 AC</h2>
            <p className={styles.tagline}>
              一个相信代码与逻辑中藏有星辰大海的探索者。
            </p>
            <p>
              在代码与公式中寻找答案，在动漫与游戏中汲取灵感。我享受独自破解难题的成就感，更期待与理解这份热爱的人，分享沿途所见的风景与星辰
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
            <div className={styles.hobbyItem}>
              <div className={styles.hobbyIcon}>
                <span className={styles.iconText}>🎮</span>
              </div>
              <h3>游戏</h3>
              <p>喜欢策略类和益智类游戏，锻炼思维能力</p>
            </div>
            <div className={styles.hobbyItem}>
              <div className={styles.hobbyIcon}>
                <span className={styles.iconText}>📺</span>
              </div>
              <h3>动漫</h3>
              <p>欣赏优秀的动漫作品，感受不同的故事和世界观</p>
            </div>
            <div className={styles.hobbyItem}>
              <div className={styles.hobbyIcon}>
                <span className={styles.iconText}>✈️</span>
              </div>
              <h3>旅游</h3>
              <p>喜欢探索不同的地方，了解各地的文化和风景</p>
            </div>
          </div>
        </div>

        {/* 竞赛经历时间线 */}
        <div className={styles.timelineSection}>
          <h2>竞赛经历</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2026年</h3>
                <p>未完待续...</p>
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
                <h3>2024年3月</h3>
                <p>开始学习C++，踏上编程竞赛之路</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MePage;
