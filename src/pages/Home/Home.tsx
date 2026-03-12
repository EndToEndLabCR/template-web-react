import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const { Header, Content } = Layout;

const Home: React.FC = () => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        Home Page
      </Header>
      <Content className={styles.content}>
        <h1>Hello</h1>
        <Link to="/login">Go to Login</Link>
      </Content>
    </Layout>
  );
};

export default Home;
