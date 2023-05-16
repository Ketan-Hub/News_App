import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsCard extends Component {
    
  constructor(){
    super();
  }

  render() {
    let {title,discription,imgurl,url}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={imgurl} className="card-img-top" alt=".."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{discription}</p>
                <a href={url} className="btn btn-sm btn-primary">See More..</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsCard
