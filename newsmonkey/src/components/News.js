import React, { Component } from "react";

import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Simon Burnton",
      title:
        "The Yorkshire racism scandal: how did we get here and what’s next?",
      description:
        "With the CDC hearings taking place next month these are the key questions in a complicated and high-profile caseLast June, after a “thorough and complex investigation”, the England and Wales Cricket Board charged seven individuals, then unnamed, and Yorkshire…",
      url: "https://www.theguardian.com/sport/2023/feb/07/yorkshire-racism-scandal-cricket-hearings-what-next",
      urlToImage:
        "https://i.guim.co.uk/img/media/84df5abcd5d8e6d9ee22ca4b0eb202ef6c87448f/0_138_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4581f60f6f67d101be9bd64ba47b16ee",
      publishedAt: "2023-02-07T22:25:14Z",
      content:
        "Whats going on?\r\nLast June, after a thorough and complex investigation, the England and Wales Cricket Board charged seven individuals, then unnamed, and Yorkshire Cricket Club with bringing the game … [+4731 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Women's cricket awaits birth of a superpower with game set to take ... - Reuters",
      description:
        "Women's cricket looks poised to step out of the imposing shadow of the men's game in India, and the rest of the world is bracing for the birth of a superpower in the sport.",
      url: "https://www.reuters.com/lifestyle/sports/womens-cricket-awaits-birth-superpower-with-game-set-take-off-india-2023-02-02/",
      urlToImage:
        "https://www.reuters.com/resizer/w9j1RMJ8W83YI1bniKAZBOrx7uM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HZGU7QHJDFO55DR6YZPG5ZEZSA.jpg",
      publishedAt: "2023-02-02T04:22:00Z",
      content:
        "NEW DELHI, Feb 2 (Reuters) - Women's cricket looks poised to step out of the imposing shadow of the men's game in India, and the rest of the world is bracing for the birth of a superpower in the spor… [+2981 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Australia's Khawaja flies out to India after visa approved - Reuters",
      description:
        "Australia opener Usman Khawaja will join his test team mates in India later on Thursday following a delayed approval of his visa, Cricket Australia said.",
      url: "https://www.reuters.com/lifestyle/sports/australias-khawaja-flies-out-india-after-visa-approved-2023-02-02/",
      urlToImage:
        "https://www.reuters.com/resizer/8IY9xAtO7YjFeuUe4vLh9xLtS6s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3YXKPM4CMNMYXIHJK4NKGZ3IHE.jpg",
      publishedAt: "2023-02-02T00:17:00Z",
      content:
        "MELBOURNE, Feb 2 (Reuters) - Australia opener Usman Khawaja will join his test team mates in India later on Thursday following a delayed approval of his visa, Cricket Australia said.\r\nPakistan-born K… [+949 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Australia batsman Khawaja misses flight to India after visa delay - Reuters",
      description:
        "Australia opener Usman Khawaja missed the team's flight to India on Wednesday for their four-test tour due to a visa delay, Cricket Australia (CA) said.",
      url: "https://www.reuters.com/lifestyle/sports/australia-batsman-khawaja-misses-flight-india-after-visa-delay-2023-02-01/",
      urlToImage:
        "https://www.reuters.com/resizer/xwY-ID25YaA_3bwdJNMlVwj-9e8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/O7RV5GFOINJN7M36ORQ4QM4TRU.jpg",
      publishedAt: "2023-02-01T04:14:00Z",
      content:
        "MELBOURNE, Feb 1 (Reuters) - Australia opener Usman Khawaja missed the team's flight to India on Wednesday for their four-test tour due to a visa delay, Cricket Australia (CA) said.\r\nA CA spokesman s… [+911 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "S Africa's Kapp on compassionate leave after wife van Niekerk ... - Reuters",
      description:
        "The South Africa women's cricket team have given all-rounder Marizanne Kapp compassionate leave after her wife Dane van Niekerk was dropped from the Women's Twenty20 World Cup squad.",
      url: "https://www.reuters.com/lifestyle/sports/s-africas-kapp-compassionate-leave-after-wife-van-niekerk-dropped-wc-squad-2023-02-01/",
      urlToImage:
        "https://www.reuters.com/resizer/8f-ZVuuDXRufJPoFVb9yrz85pwE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MNNZIUSGK5NV5CYVKHYLYHN4IE.jpg",
      publishedAt: "2023-02-01T17:45:00Z",
      content:
        "Feb 1 (Reuters) - The South Africa women's cricket team have given all-rounder Marizanne Kapp compassionate leave after her wife Dane van Niekerk was dropped from the Women's Twenty20 World Cup squad… [+908 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am from the News component");

    this.state = {
      articles: [],
      loading: false,
      page:1,
    };
  }

  async componentDidMount() {
    console.log("cmd");
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=ee6d572b3b8f4078ac9bb72702c39ff7&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles});
  }




  handlePrevBtn = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ee6d572b3b8f4078ac9bb72702c39ff7&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
    console.log("Prev");
  };



  handleNextBtn = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ee6d572b3b8f4078ac9bb72702c39ff7&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
    });
  };




  render() {
    return (
      <div className="container my-3 ">
        <h2 className="text-center">NewsMonkey - Top headline</h2>
        <Spinner/>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://th.bing.com/th/id/R.d69e50d41e8c41af204d60a7ebf64e6e?rik=11eaj38wHdxXRQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-T_u7AixkhT8%2fTuXA0QKoMpI%2fAAAAAAAAFas%2fBDrVxQK_BLs%2fs1920%2fAudi-cars-wallpaper.JPG&ehk=QjY4VlAHaeE0Nmg%2f%2f1Mx%2fSqTB2zkCRAnswcForbGtZo%3d&risl=&pid=ImgRaw&r=0"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-dark"
              onClick={this.handlePrevBtn}
            >
              &larr; Previous
            </button>
            <button  className="btn btn-dark" onClick={this.handleNextBtn}>
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
