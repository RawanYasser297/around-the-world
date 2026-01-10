import { useEffect, useState } from "react";

export const URL =
  "https://restcountries.com/v3.1/independent?status=true&fields=name,languages,capital,region,flags,population";

export const useFetchData = (url) => {
  const [result, setResult] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(false);
  const getStoredCountries = JSON.parse(localStorage.getItem("countries"));

  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Data Not Found");
      }
      const data = await res.json();
      setResult(data);
      url === URL &&
        !getStoredCountries &&
        localStorage.setItem("countries", JSON.stringify(data));
    } catch (err) {
      setFetchError(err.message);
      setResult(JSON.parse(localStorage.getItem("countries")));
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { result, loading, fetchError };
};
