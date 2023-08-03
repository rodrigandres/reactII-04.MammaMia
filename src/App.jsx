import Layout from "./layout/Layout";
import RingLoader from "react-spinners/RingLoader";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <RingLoader
          color={"#80128a"}
          loading={loading}
          className="spinner spinner-margen"
          size={200}
        />
      ) : (
        <Layout />
      )}
    </>
  );
}

export default App;
