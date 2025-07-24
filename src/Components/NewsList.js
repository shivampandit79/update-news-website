import React, { Component } from "react";

export default class NewsList extends Component {
  render() {
    let { title, description, imgurl, newsUrl } = this.props;
    return (
      <div className="mx-3 my-3">
        <div className="card">
          <img
            src={!imgurl ? "https://images.wsj.net/im-65692990/social" : imgurl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
