import "./App.css";

import "./App.css";
import useFetch from "./useFetch";

function App() {
  const { data, loading, error } = useFetch("https://v2.jokeapi.dev/joke/Any");

  if (loading) return <h2>Loading ...</h2>;

  if (error) console.log(error);

  return (
    <div className="text-box">
      <div className="first-box">
        <h2 className="heading-secondary">{data?.category}</h2>
        <p className="description">{data?.setup}</p>
      </div>
      <div className="first-box">
        <h2 className="heading-secondary">{data?.category}</h2>
        <p className="description">{data?.setup}</p>
      </div>
      <div className="first-box">
        <h2 className="heading-secondary">{data?.category}</h2>
        <p className="description">{data?.setup}</p>
      </div>
    </div>
  );
}

export default App;
