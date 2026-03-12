import React from "react";
import { Form, Input, Button, Layout } from "antd";
import type { FormProps } from "antd";
import styles from "./Login.module.scss";

const { Header, Content } = Layout;

interface ILoginFormValues {
  username: string;
  password: string;
  remember?: boolean;
}

const Login: React.FC = () => {
  const onFinishFailed: FormProps<ILoginFormValues>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.error("Login submit failed", { errorInfo });
  };

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>Login</Header>
      <Content className={styles.content}>
        <Form
          name="login"
          className={styles.form}
          initialValues={{ remember: true }}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username or email!",
              },
            ]}
          >
            <Input placeholder="Username/Email" className={styles.input} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" className={styles.input} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginButton}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default Login;
