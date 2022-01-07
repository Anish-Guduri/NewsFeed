
import React, { Component } from 'react'

export class NewsItem extends Component {
    // 
    render() {
        let {title,description,imgUrl,newsUrl} =this.props
        return (
            <div>
                {/* This News item Components */}
                <div className="card" style={{width: '18rem', height: '28rem'}}>
                    <img src={imgUrl} className="card-img-top" alt="..."  style={{height:'26vh'}}/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a className="fixed-bottom" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
