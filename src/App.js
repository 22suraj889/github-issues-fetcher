import { useEffect, useState } from "react";
import "./App.css";
import Issues from "./Component/Issues/Issues";
import Loading from "./Component/Loading/Loading";

function App() {
  const [data, setData] = useState([]);

  const fetchIssues = async () => {
    const url = "https://api.github.com/repos/PHP-FFMpeg/PHP-FFMpeg/issues";
    try {
      const fetchedData = await fetch(url);
      const parsedData = await fetchedData.json();
      console.log(parsedData);
      setData(parsedData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []); //No dependency to trigger in each page load

  return (
    <div className="App">
      {data.length !== 0 ? <Issues data={data} /> : <Loading />}
    </div>
  );
}

export default App;
