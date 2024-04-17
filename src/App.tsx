import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import { Header } from 'components/Header';
import { BlogPost } from 'components/BlogPost'

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
      <BlogPost 
        title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit" 
        body="quia et suscipit nsuscipit recusandae consequuntur expedita et cum nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"/>
    </Container>
  );
}

export default App;
