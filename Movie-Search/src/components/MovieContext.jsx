import { createContext, useContext, useEffect, useState } from "react";

export const QueryContext = createContext();

export const MovieProvider = ({ children }) => {
  const [queries, setQueries] = useState([]);
  const [input, setInput] = useState("");
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://imdb.iamidiotareyoutoo.com/justwatch?q=${input}`
      );
      // const res = await fetch(`http://www.omdbapi.com/?apikey=2533437b&t=star&plot=full`);
      // console.log(res);
      const data = await res.json();

      //to remove the data that do not have image or information
      console.log(data);
      const finalData = data.description.filter(
        (data) => data.photo_url.length > 0
      );
      console.log(finalData);
      setQueries(finalData);
      // console.log(data.description);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [input]);
  useEffect(() => {
    console.log(queries);
    console.log(input);
  }, [setInput]);
  return (
    <QueryContext.Provider value={{ queries, setQueries, setInput, input }}>
      {children}
    </QueryContext.Provider>
  );
};

export default function useQuery() {
  return useContext(QueryContext);
}
