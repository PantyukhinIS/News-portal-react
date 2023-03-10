import React from "react";

import NewsItem from "./components";

import './styles.css';

const NewsList = props => (
    <div className="newsList">
        {props.list.map(news => (
            <NewsItem key={news._id} item = {news}/>
        ))}
    </div>
)

export default NewsList;