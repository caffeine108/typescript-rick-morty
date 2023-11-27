import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';


function App() {
  return (
    <>
      <Header title="Rick and Morty w React" />
      <PostList />
      <Footer author="Kala Wyroslak" copyright="2023 Kala Wyroslak" />
    </>
  );
}
export default App
