import React, { Component } from "react";
import NewsList from "./NewsList";
import Spinner from "./Spinner";
import propTypes from 'prop-types';

export class News extends Component {

  static  defaultProps = {
    country: 'in',
    pageSize : 0,
    category: 'general',
  }

  static propTypes = {
    country: propTypes.string,
    pageSize : propTypes.number,
    category: propTypes.string,
  }

  //  articles =
  // [
  //   {
  //     "source": {
  //       "id": "techcrunch",
  //       "name": "TechCrunch"
  //     },
  //     "author": "Lauren Forristal",
  //     "title": "Bye-bye bots: Altera's game-playing AI agents get backing from Eric Schmidt | TechCrunch",
  //     "description": "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the fray to build this new guard of AI Research company Altera raised $9 million to build AI agents that can play video games alongside other player…",
  //     "url": "https://techcrunch.com/2024/05/08/bye-bye-bots-alteras-game-playing-ai-agents-get-backing-from-eric-schmidt/",
  //     "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/05/Minecraft-keyart.jpg?resize=1200,720",
  //     "publishedAt": "2024-05-08T15:14:57Z",
  //     "content": "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the fray to build this new guard of AI agents.\r\nThe company announced Wednesday that it … [+6416 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "techcrunch",
  //       "name": "TechCrunch"
  //     },
  //     "author": "Alex Wilhelm and Theresa Loconsolo",
  //     "title": "$450M for Noname, two billion-dollar rounds, and good news for crypto startups | TechCrunch",
  //     "description": "This morning on Equity, not only do we have good news for crypto founders, we're also digging into Akamai spending $450 million for API security firm Noname, and billion dollar deals from Wiz and Wayve.",
  //     "url": "https://techcrunch.com/2024/05/08/450m-for-noname-two-billion-dollar-rounds-and-good-news-for-crypto-startups/",
  //     "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-942480316.jpg?resize=1200,835",
  //     "publishedAt": "2024-05-08T15:01:51Z",
  //     "content": "Good news, crypto founders: Venture capital activity is picking up in your sector after falling to multi-year lows in late 2023. Put another way, venture folks appear more web3-bullish than before, e… [+1599 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "techcrunch",
  //       "name": "TechCrunch"
  //     },
  //     "author": "Alex Wilhelm",
  //     "title": "Watch: When did iPads get as expensive as MacBooks?",
  //     "description": "Would you switch out your MacBook for an iPad with an M4 chip and OLED display? With the increase in price, Apple seems to be arguing these are comparable but we’re curious to see if consumers will make the change.",
  //     "url": "https://techcrunch.com/2024/05/08/techcrunch-minute-when-did-ipads-get-as-expensive-as-macbooks/",
  //     "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/05/ipad-noplay.png?resize=1200,675",
  //     "publishedAt": "2024-05-08T14:52:26Z",
  //     "content": "Apple’s iPad event had a lot to like. New iPads with new chips and new sizes, a new Apple Pencil, and even some software updates. If you are a big fan of Apple hardware, well, it was probably a good … [+1385 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "techcrunch",
  //       "name": "TechCrunch"
  //     },
  //     "author": "Rebecca Bellan",
  //     "title": "Uber promises member exclusives as Uber One passes $1B run-rate | TechCrunch",
  //     "description": "Uber plans to deliver more perks to Uber One members, like member-exclusive events, in a bid to gain more revenue through subscriptions.  “You will see",
  //     "url": "https://techcrunch.com/2024/05/08/uber-promises-member-exclusives-as-uber-one-passes-1b-run-rate/",
  //     "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1142304853-a.jpg?resize=1200,675",
  //     "publishedAt": "2024-05-08T14:41:36Z",
  //     "content": "Uber plans to deliver more perks to Uber One members, like member-exclusive events, in a bid to gain more revenue through subscriptions. \r\nYou will see more member-exclusives coming up where members … [+4676 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "techcrunch",
  //       "name": "TechCrunch"
  //     },
  //     "author": "Mike Butcher",
  //     "title": "Checkfirst raises $1.5M pre-seed, applying AI to remote inspections and audits | TechCrunch",
  //     "description": "Checkfirst enables businesses to schedule inspectors based on geographical location and qualifications, in addition to allowing for remote inspections.",
  //     "url": "https://techcrunch.com/2024/05/08/checkfirst-raises-1-5m-pre-seed-applying-ai-to-remote-inspections-and-audits/",
  //     "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/05/Checkfirst-team.jpg?w=960",
  //     "publishedAt": "2024-05-08T13:02:12Z",
  //     "content": "Weve all seen them. The inspector with a clipboard, walking around a building, ticking off the last time the fire extinguishers were checked, or if all the lights are working. They work in the TICC (… [+3279 chars]"
  //   }
  //  ]

  constructor() {
    super();
    console.log("this is a constructor class console output");
    this.state = {
      // articles: this.articles /// when use line lo 5 for no return empty data then use this line otherwise use second method
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&country=${this.props.country}&apiKey=6a1a7dbdd41543a78540de840ccf3382&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  handlepPrevClick = async () => {
    console.log("this is a previus button ");
    console.log("this is a next button");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&country=${this.props.country}&apiKey=6a1a7dbdd41543a78540de840ccf3382&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // this.setState({articles: parsedData.articles}) // remove line no 104 then work this
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles, // remove line no 101 then work this line
    });
  };

  handleNextClick = async () => {
    console.log("this is a next button");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&country=${this.props.country}&apiKey=6a1a7dbdd41543a78540de840ccf3382&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
       // this.setState({loading: false}) // when use line no loding: false line no 125 then comment this 
      // this.setState({articles: parsedData.articles}) // remove line no 104 then work this
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles, // remove line no 101 then work this line
        loading: false //  when use this.setState({loading: false}) line no 120 then comment this 
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        console.log("this is a newsJS")
        <h2 className="text- mb-4 my-5">News Monkey - Top HeadLines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row justify-content-center g-3">
          {!this.state.loading && this.state.articles && this.state.articles.map((element) => {
            return (
              <div className="col-md-4">
                <NewsList
                  key={element.url}
                  title={element.title}
                  description={element.description}
                  imgurl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlepPrevClick}
          >
            &larr; Previus
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
