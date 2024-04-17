import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import { Header } from 'components/Header';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
  overflow: scroll;
`;


function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
