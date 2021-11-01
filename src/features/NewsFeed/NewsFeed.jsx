import React, { useEffect, useState } from 'react';

import Card from "../../shared/Card";
import AddNews from './AddNews/AddNews';
import CreatePostBox from './../../shared/CreatePostBox/CreatePostBox'

const NewsFeed = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [filter, setFilter] = useState("all");
    const [feedData, setFeedData] = useState([]);
    
    const tags = [
        "News", "Diet", "LifeStyle", "Symptoms", "Treatment", "Testtopic"
    ];

    useEffect(() => {
        let feedData = localStorage.getItem('feed_data') || [];
        if(typeof feedData === "string"){
            feedData = JSON.parse(feedData);
            setFeedData(feedData);
        }
    }, []);

    return (
        <React.Fragment>
            <CreatePostBox setIsVisible={setIsVisible}/>
            {/*<button onClick={(e) => setIsVisible(true)} className='bg-blue-500 text-white p-2 rounded text-2xl font-bold'>Open Modal</button>*/}
            <div className="max-w-xl mx-auto m-3 px-4 py-2 bg-transparent rounded-lg">
            <div className={`text-sm mr-2 mt-2 leading-none border-1 rounded-full inline-flex  ${'all' === filter ?  `bg-green-100 border-green-600` : `bg-transparent border-gray-300`}`}>
                <button className="inline-flex items-center font-semibold text-xs transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2 active"
                    onClick={e => setFilter("all")}
                >
                    <span className="text-green-400">All Post</span>
                </button>
            </div>
            {tags.map((item, index) => (
                <div className={`text-sm mr-2 mt-2 leading-none border-1 rounded-full inline-flex ${item === filter ?  `bg-green-100 border-green-600` : `bg-transparent border-gray-300`}`}>
                    <button className="inline-flex items-center font-semibold text-xs transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2 active"
                        onClick={e => setFilter(item)}
                    >
                        <span className="text-green-400">{item}</span>
                    </button>
                </div>
            ))}
            <AddNews tags={tags} isVisible={isVisible} setIsVisible={setIsVisible} />
            {feedData.length > 0 && 
                feedData.map((item, index) => {
                    return (filter === 'all' || item.post_tags.includes(filter)) ?
                    <Card data={item} key={index}/>
                    :
                    []
                })
            }
            </div>
        </React.Fragment>
    );
}
 
export default NewsFeed;