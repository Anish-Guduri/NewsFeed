
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    constructor() {
        super();
        console.log("Hello I am a constructor")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    static defaultProps ={
        country:'in',
        apiKey:'875311693ad34e95bf094ba88f198ada',
        pageSize:12,
        category:'general'
    }
    static propTypes = {
        country: PropTypes.string,
        apiKey:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }
    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData.json);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading:false
        })
    }
    handleNextClick = async () => {
        console.log("Next")
        if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData.json);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false
            })
        }
    }
    handlePreviousClick = async () => {
        console.log("pevious")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData.json);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false
        })
    }
    render() {
        console.log("render")
        return (
            <div className="container my-3">
                <h2 className="text-center">NewsFeed - Top headlines</h2>
                {this.state.loading && <Spinner />}               
                 {/* spinner will be displayed if laoding is true only */}
                <div className="row my-3" >
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className=" col-md-4 my-3 " key={element.url}>
                            <NewsItem title={element.title.slice(0, 36)} description={element.description ? element.description.slice(0, 76) : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://bit.ly/34mKXey"} newsUrl={element.url} /></div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}  type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
