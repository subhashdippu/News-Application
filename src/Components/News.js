import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    let { country, category } = props
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=843746d56f8a4018a7f351d14bded79f&page=${page}&category=${category}`
        setLoading(true)
        let data = await fetch(url)
        let parsadData = await data.json()
        setLoading(false)
        setArticles(articles.concat(parsadData.articles));
    }
    const fetchMoreData = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=843746d56f8a4018a7f351d14bded79f&page=${page}&category=${category}`
        setLoading(true)
        let data = await fetch(url)
        let parsadData = await data.json()
        setLoading(false)
        setArticles(articles.concat(parsadData.articles));
        setTotalResults(parsadData.totalResults);
    };
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    document.title = ` ${capitalizeFirstLetter(
        props.category
    )} - NewsApp`;
    useEffect(() => {
        updateNews();
    }, []);
    return (
        <div className='container '>
            <h1 className='text-center' style={{ margin: "25px 0px", marginTop: "90px" }}>NewsApp - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles !== totalResults}
                loader={loading && <Spinner />}
            >

                <div className='row'>
                    {articles.map((element) => {
                        return (

                            <div className='col-md-4'>
                                <NewsItems title={element.title}
                                    desc={element.description}
                                    image={element.urlToImage}
                                    date={element.publishedAt}
                                    url={element.url}
                                    source={element.source.name}
                                    author={element.author}
                                />
                            </div>
                        )
                    })}

                </div>
            </InfiniteScroll >
        </div>
    )
}

export default News