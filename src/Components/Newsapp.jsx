import React, { useEffect, useState } from "react";
import Card from "./Card";

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]);

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=5b6eae97b4754db6a6b2392d700581b6`
    );
    const jsonData = await response.json();
    // console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  const userInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          {/* <a>All News</a> */}
          <a>Trending News</a>
        </ul>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            onChange={handleInput}
            value={search}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div className="categoryBtn">
        <div className="keyWords">KeyWords to search News</div>
        <div className="button">
          <button onClick={userInput} value="sports" id="btn-1">
            Sports
          </button>
          <button onClick={userInput} value="politics" id="btn-2">
            Politics
          </button>
          <button onClick={userInput} value="entertainment" id="btn-3">
            Entertainment
          </button>
          <button onClick={userInput} value="health" id="btn-4">
            Health
          </button>
          <button onClick={userInput} value="fitness" id="btn-5">
            Fitness
          </button>
          <button onClick={userInput} value="technology" id="btn-6">
            Technology
          </button>
          <button onClick={userInput} value="properties" id="btn-7">
            Properties
          </button>
          <button onClick={userInput} value="nature" id="btn-8">
            Nature
          </button>
          <button onClick={userInput} value="education" id="btn-9">
            Education
          </button>
          <button onClick={userInput} value="disaster" id="btn-10">
            Disaster
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="heading-info">
          <p>Stay updated with the TrendyNews</p>
        </div>
        <div>
          <Card data={newsData} />
        </div>
      </div>
    </div>
  );
};

export default Newsapp;
