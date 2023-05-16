import React, { Component } from "react";
import NewsCard from "./NewsCard";

export class News extends Component {
   
  

  constructor() {
    
    super();
    this.state = {
      artData: [],
      //   lodding: false,
    };
  }
    async componentDidMount() {
      let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=607a0befd3ad4b63bad89db012c2de12";
      let data = await fetch(url);
      let passData = await data.json();
      console.log(passData);
      this.setState({ artData: passData.articles });
    }
  // componentDidMount() {
  //   fetch(
  //     "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=607a0befd3ad4b63bad89db012c2de12"
  //   )
  //     .then((response) => response.json())
  //     .then((arrList) => {
  //       console.log(arrList);
  //       this.setState({ artData: arrList });
  //     });
  // }

  render() {

    return (
      <div>
        <div className="container my-3">
          <div className="row">
            {/* {this.state.articles.map(article =>} */}

            {this.state.artData.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsCard
                    title={element.title}
                    discription={element.description}
                    imgurl={element.urlToImage}
                    url={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
