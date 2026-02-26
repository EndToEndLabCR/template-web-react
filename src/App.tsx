import React from 'react';
import styles from './App.module.scss';
import { Button, Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#001529', color: 'white', textAlign: 'center', fontSize: '1.5rem' }}>
        Welcome to Vite + React + AntD
      </Header>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className={styles.hello}>Hello World!</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Powered by React, TypeScript, Vite, and Ant Design
        <br />
        <Button type="primary" style={{ marginTop: '1rem' }}>Learn More</Button>
      </Footer>
    </Layout>
  );
};

export default App;