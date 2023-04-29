import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import { getPosts } from './api/postApi'

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await getPosts();
      console.log(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <HomePage></HomePage>
    </>
  );
}

export default App;
