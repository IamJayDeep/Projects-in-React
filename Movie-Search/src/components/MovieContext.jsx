import { createContext, useContext, useEffect, useState } from "react";

export const QueryContext = createContext();

export const MovieProvider = ({ children }) => {
  const [queries, setQueries] = useState([]);
  const [info, setInfo] = useState({});
  const [input, setInput] = useState("");
  const [getId, setGetId] = useState("");
  const [className, setClassName] = useState("details-wrapper-off");

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://imdb.iamidiotareyoutoo.com/justwatch?q=${input}`
      );

      const data = await res.json();

      //to remove the data that do not have image or information
      const finalData = data.description.filter(
        (data) => data.photo_url.length > 0
      );
      setQueries(finalData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const detailData = async () => {
    await fetch(`http://www.omdbapi.com/?apikey=2533437b&i=${getId}&plot=full`)
      .then((response) => response.json())
      .then((data) => setInfo(data));
  };

  const handleClick = (e) => {
    setGetId(e.currentTarget.id);
    setClassName("details-wrapper-on");
  };

  useEffect(() => {
    fetchData();
  }, [input]);
  useEffect(() => {
    detailData();
    setClassName("details-wrapper-off");
  }, [getId, setInfo]);

  return (
    <QueryContext.Provider
      value={{
        queries,
        setQueries,
        setInput,
        input,
        setGetId,
        info,
        handleClick,
        setClassName,
        className,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

export default function useQuery() {
  return useContext(QueryContext);
}
