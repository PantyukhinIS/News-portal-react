import React, { useState, useEffect } from "react";
import routeMain from "./routes";

import { NavLink } from "react-router-dom";
import { routeMain as routeNewsListPage } from "pages/NewsListPage";

import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";
// import newsListMocks from "components/fixtures/newsListMocks";
import getNews from "services/getNews/getNews";

import './styles.scss';

const MainPage = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        getNews().then (response => {
            setNewsList(response.data.articles)
        })
    }, [])
    
    return (
        <section className="mainPage">
            <PageTitle
            title = {
                <h2>
                    Всегда <br/> свежие <span> новости </span>
                </h2>
            }
            />
            {newsList/*newsListMocks*/.length > 0 && <NewsList list = {newsList/*newsListMocks*/.slice(0, 6)}/>}
            <NavLink className="linkNewsListPage" to={routeNewsListPage()}>Быть в курсе событий</NavLink>
        </section>
    )
}

export {routeMain};

export default MainPage;