import { useEffect, useState } from "react";

import "./App.css";
import Searchbar from "./components/Searchbar";

function App() {
  const [data, setData] = useState(null);
  const getData = async () => {
    try {
      const response = await fetch(
        "http://hn.algolia.com/api/v1/search?query=react&tags=story"
      );
      const data = await response.json();
      setData(data.hits);
    } catch (error) {
      alert(`There was an error: ${error}`);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return <>{<Searchbar data={data} />} </>;
}

export default App;
