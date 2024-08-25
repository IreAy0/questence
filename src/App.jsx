import "./styles/global.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import MainArea from "./components/Main/Index";

function App() {

  return (
    <>
      <Layout>
        <MainArea />
      </Layout>
      <Header />
    </>
  );
}

export default App;
