import React from 'react';
import NewsContext from '../contexts/NewsContext';

import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '327f4ad024a04b1ab5ed333d0fbbb1eb';

class NewsProvider extends React.Component {
  state = {
    allNews: [],
    headline: [],
    source: [],
    newsDetail: {},
  };

  getNewsFromAPI = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/everything?q=bitcoin&apiKey=${API_KEY}`,
      );
      this.setState({
        ...this.state,
        allNews: response.data.articles,
      });
      ///console.log(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  getSourcesFromAPI = async () => {};

  getHeadlineFromAPI = async () => {};

  setNewsDetail = news => {
    this.setState({
      ...this.state,
      newsDetail: news,
    });
  };

  render() {
    return (
      <NewsContext.Provider
        value={{
          ...this.state,
          getNews: this.getNewsFromAPI,
          getSources: this.getSourcesFromAPI,
          getHeadline: this.getHeadlineFromAPI,
          setNewsDetail: this.setNewsDetail,
        }}>
        {this.props.children}
      </NewsContext.Provider>
    );
  }
}

export default NewsProvider;
