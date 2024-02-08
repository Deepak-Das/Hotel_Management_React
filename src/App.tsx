// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Layout, Flex, ConfigProvider, Button } from "antd";

import { Sidebar2 } from "./components/Sidebar2";

const { Header, Content } = Layout;


const layoutStyle: React.CSSProperties = {
  height: '100vh'
};


function App() {
  return (
    <Layout style={layoutStyle}>
    <Sidebar2></Sidebar2>
    <Layout style={layoutStyle}>
      <Header >
        header
      </Header>
      <Content >Content</Content>
    </Layout>
  </Layout>
  );
}

export default App;
