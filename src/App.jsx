import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainView from "./components/MainView";
import "./app.css"
function App() {
  return (
    <Wrapper>
      <Header />
      <MainView />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 4px dotted red;
`;

export default App;
