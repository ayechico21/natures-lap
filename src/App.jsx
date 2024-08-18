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
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export default App;
