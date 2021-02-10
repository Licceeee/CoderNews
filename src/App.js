import React, { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import MySpinner from './components/MySpinner';
import ArticlePage from './components/ArticlePage';
import ErrorMsg from './components/ErrorMsg';


function App() {

  const [data, setData ] = useState();
  const [search, setSearch] = useState("");
  const [articleID, setArticleID] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useRef(() => {})

  fetchData.current = async (userInput) => {
    setIsLoading(true);
    setArticleID();
    let url = `https://hn.algolia.com/api/v1/search_by_date?tags=front_page&hitsPerPage=100`;
    if (userInput) {
      url = `https://hn.algolia.com/api/v1/search_by_date?query=${search}&tags=story&hitsPerPage=100`;
    }
    try {
      const response = await fetch(url);
      if (response.ok) {
        const res = await response.json();
        setIsLoading(false);
        res.hits.length === 0 ? setError(true) : setError(false)
        res && setData(res.hits);
        
      } else {
        throw new Error("Request failed!");
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchData.current();
    const intervalID = setInterval(() => {
      fetchData.current();
    }, 300000);

    return () => clearInterval(intervalID);
  }, []);


  const getSearchInput = ({target}) => {
    setSearch(target.value);
  }

  return (
    <>
      <NavBar getSearchInput={getSearchInput} search={search} fetchData={fetchData.current}/>
      {!articleID ? 
          !isLoading ? error ? <ErrorMsg /> : <Main data={data} setArticleID={setArticleID}/>: <MySpinner />
          : <ArticlePage articleID={articleID}/>}
      
      <Footer />
    </>
  );
}

export default App;
