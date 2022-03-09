
import React, { Component } from 'react'

export class NewsItem extends Component {
    // 
    render() {
        let {title,description,imgUrl,newsUrl,author,source,date} =this.props;
        return (
            <div>
                {/* This News item Components */}
                <div className="card" style={{height: '28rem'}}>
                {/* <span class="position-absolute top-0  translate-middle badge rounded-pill bg-info " style={{width:'8rem',height:'1.4rem',left:'80%',zIndex:'1'}}>{source}</span> */}
                <span className=" position-absolute top-0  translate-middle badge bg-dark" style={{width:'8rem',height:'1.4rem',left:'78%',zIndex:'1'}}>{source}</span>
                    <img src={imgUrl} className="card-img-top" alt="..."  style={{height:'26vh'}}/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small>By {author} on {new Date(date).toGMTString()}</small></p>
                            <a className="fixed-bottom" href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
