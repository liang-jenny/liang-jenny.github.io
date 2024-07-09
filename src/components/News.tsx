import React from 'react';
import { Bold, hasData } from './shared';

const newsData = require('../data/news.json');

const News = () => (
    <React.Fragment>
        {hasData(newsData) && 
            <React.Fragment>
                <h3>News 📰</h3>
                <ul>
                    {newsData
                        .map((e: {date: string, description: string}, i: number ) => {
                            return <li key={i}> <Bold>[{e.date}]</Bold> {e.description}</li>     
                        })
                    }
                </ul>
            </React.Fragment>
        }
    </React.Fragment>
);

export default News;