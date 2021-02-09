import React, { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import ArticlePage from './components/ArticlePage';


function App() {

  const [data, setData ] = useState();
  const [search, setSearch] = useState("");
  const [articleID, setArticleID] = useState();

  const fetchData = useRef(() => {})

  fetchData.current = async (userInput) => {
    setArticleID();
    let url = `https://hn.algolia.com/api/v1/search?tags=front_page&tags=story`;
    if (userInput) {
      url = `https://hn.algolia.com/api/v1/search?query=${search}&tags=story`;
    }
    try {
      const response = await fetch(url);
      if (response.ok) {
        const res = await response.json();
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
      {!articleID ? <Main data={data} setArticleID={setArticleID}/> : <ArticlePage articleID={articleID}/>}
      
      <Footer />
    </>
  );
}

export default App;
