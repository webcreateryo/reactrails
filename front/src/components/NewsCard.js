import React from "react";
import axios from "axios";

class NewsCard extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    errors: null
  };

  getArticles() {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?"+'country=jp&'+'apiKey=c49cae2d89f64d52a53652878e8bf0a2'
    )
    .then(response => {
      return response.data.articles.map(article => ({
        date: `${article.publishedAt}`,
        title: `${article.title}`,
        url: `${article.url}`
      }));
    })
    .then(articles => {
      this.setState({
        articles,
        isLoading: false
      });
    })
    .catch(error => this.setState({ error, isLoading: false }));
}

  componentDidMount() {
    this.getArticles();
  }

  render() {
      const { isLoading, articles } = this.state;
      return (
        <React.Fragment>
          <h2>#AI</h2>
          <div>
            {!isLoading ? (
              articles.map(article => {
                const { date, title, url } = article;
                return (
                  <div key={title}>
                    <p>{date}</p>
                    <p>{title}</p>
                    <p>{url}</p>
                  </div>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </React.Fragment>
      );
    }
  }
  export default NewsCard;
