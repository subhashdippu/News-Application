import React, { useState, useEffect, useCallback } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = ({ country, category, setProgress }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = useCallback(async () => {
        try {
            setProgress(0);
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=843746d56f8a4018a7f351d14bded79f&page=${page}&category=${category}`;
            setProgress(20);
            setLoading(true);

            const response = await fetch(url);
            const data = await response.json();

            setProgress(60);
            setArticles(prevArticles => [...prevArticles, ...data.articles]);
            setTotalResults(data.totalResults);
            setProgress(100);
        } catch (error) {
            console.error('Error fetching news:', error);
            setProgress(100);
        } finally {
            setLoading(false);
        }
    }, [country, category, page, setProgress]);

    const fetchMoreData = () => {
        setPage(prevPage => prevPage + 1);
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(category)} - NewsApp`;
        updateNews();
    }, [category, country, updateNews]);

    return (
        <div className='container'>
            <h1 className='text-center' style={{ margin: "25px 0px", marginTop: "90px" }}>
                NewsApp - Top {capitalizeFirstLetter(category)} Headlines
            </h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={loading && <Spinner />}
            >
                <div className='row'>
                    {articles.map((article, index) => (
                        <div className='col-md-4' key={index}>
                            <NewsItems
                                title={article.title}
                                desc={article.description}
                                image={article.urlToImage}
                                date={article.publishedAt}
                                url={article.url}
                                source={article.source.name}
                                author={article.author}
                            />
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

News.defaultProps = {
    country: "in",
    category: "general",
};

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    setProgress: PropTypes.func.isRequired,
};

export default News;
