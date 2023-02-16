import React, { useState, useEffect } from "react";
import routeMain from "./routes";

import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";
// import newsListMocks from "components/fixtures/newsListMocks";
import getNews from "services/getNews/getNews";

import './styles.scss';

const NewsListPage = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        getNews().then (response => {
            setNewsList(response.data.articles)
        })
    }, [])

    return (
        <section className="newsListPage">
            <PageTitle
            title = {
                <h2>
                    Быть <br/> в курсе <span> событий </span>
                </h2>
            }
            />
            {newsList/*newsListMocks*/.length > 0 && <NewsList list = {newsList/*newsListMocks*/}/>}
        </section>
    )

}

export {routeMain};

export default NewsListPage;