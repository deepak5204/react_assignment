import { useEffect, useState } from "react";
import Home from "./component/Home";

function App() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const url = "http://demo2211087.mockable.io/mock";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({}),
      });

      const data = await response.json();
      setValues(data.companies);
    }

    getUsers();
  }, []);

  return (
    <div className="App">
      <h2>
        <Home data={values} />
       
      </h2>
    </div>
  );
}

export default App;
