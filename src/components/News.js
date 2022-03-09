
import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        apiKey: '875311693ad34e95bf094ba88f198ada',
        pageSize: 12,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        apiKey: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        console.log("Hello I am a constructor")
        this.state = {
            articles: [],
            loading:true,
            page: 1,
            totalResults:0
        }
        document.title = `NewsFeed - ${this.capitalizeFirstLetter(this.props.category)}`;
    }

    async UpdateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.props.setProgress(30);
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(60);
        let parsedData = await data.json();
        console.log(parsedData.json);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.UpdateNews();
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData.json);
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading:false
        // })
    }

    // handleNextClick = async () => {
    //     console.log("Next")
    //     this.setState({ page: ++this.state.page })
    //     // if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
    //     //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     //     this.setState({loading:true})
    //     //     let data = await fetch(url);
    //     //     let parsedData = await data.json();
    //     //     console.log(parsedData.json);
    //     //     this.setState({
    //     //         page: this.state.page + 1,
    //     //         articles: parsedData.articles,
    //     //         loading:false
    //     //     })
    //     // }

    //     this.UpdateNews();
    // }
    // handlePreviousClick = async () => {
    //     console.log("pevious")
    //     this.setState({ page: --this.state.page })
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     // this.setState({loading:true})
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json();
    //     // console.log(parsedData.json);
    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parsedData.articles,
    //     //     loading:false
    //     // })   
    //     this.UpdateNews();
    // }
    fetchMoreData = async()=> {
         this.setState({page:this.state.page + 1})   
         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        //  this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData.json);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    render() {
        console.log("render")
        return (
            <>
                <h2 className="text-center my-3" style={{ margin: '35px 0px' }}>NewsFeed - Top {this.capitalizeFirstLetter(this.props.category)}  Headlines</h2>
                {this.state.loading && <Spinner />}
                {/* spinner will be displayed if laoding is true only */}
                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                <div className="row my-3" >
                    {this.state.articles.map((element) => {
                        return <div className=" col-md-4 my-3 " key={element.url}>
                            <NewsItem title={element.title.slice(0, 40)} description={element.description ? element.description.slice(0, 96) : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://bit.ly/34mKXey"} newsUrl={element.url} author={element.author ? element.author : "Unknown"} source={element.source.name} date={element.publishedAt} /></div>
                    })}
                </div>
                </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}

export default News
