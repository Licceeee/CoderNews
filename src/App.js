import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import ArticlePage from './components/ArticlePage';


function App() {

  const [data, setData ] = useState();
  const [search, setSearch] = useState("");
  const [articleID, setArticleID] = useState();

  useEffect(() => {
    fetchData();
    const intervalID = setInterval(() => {
      fetchData();
    }, 300000);

    return () => clearInterval(intervalID);
  }, []);


  const fetchData = async (userInput) => {
    let url = `https://hn.algolia.com/api/v1/search?tags=front_page`;
    if (userInput) {
      url = `https://hn.algolia.com/api/v1/search?query=${search}`;
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

  const getSearchInput = ({target}) => {
    setArticleID();
    setSearch(target.value);
  }

  return (
    <>
      <NavBar getSearchInput={getSearchInput} search={search} fetchData={fetchData}/>
      {!articleID ? <Main data={data} setArticleID={setArticleID}/> : <ArticlePage articleID={articleID} />}
      
      <Footer />
    </>
  );
}

export default App;
