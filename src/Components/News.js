import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

const News = () => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const updateNews = async () => {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=843746d56f8a4018a7f351d14bded79f"
        setLoading(true)
        let data = await fetch(url)
        let parsadData = await data.json()
        setLoading(false)
        setArticles(parsadData.articles);
    }

    useEffect(() => {
        updateNews();
    }, []);
    return (
        <div className='container'>
            <h1 className='text-center my-4'>News Application</h1>
            <div className='row'>
                {articles.map((element) => {
                    return (

                        <div className='col-md-4'>
                            <NewsItems title={element.title} desc={element.description} image={element.urlToImage} />
                        </div>
                    )
                })}

            </div>
            {loading && <Spinner />}

        </div>
    )
}

export default News