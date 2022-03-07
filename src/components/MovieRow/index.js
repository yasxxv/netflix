import React, { useState } from "react";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import './MovieRow.css';

export default ({ title, items }) => {

    const [scrollx, setScrollx] = useState(0);

    const handleLeftArrow = () => {

    }

    const handleRightArrow = () => {

    }


    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <MdKeyboardArrowLeft style={{ fontSize: 50 }} />

            </div>

            <div className="movieRow--right" onClick={handleRightArrow}>
                <MdKeyboardArrowRight style={{ fontSize: 50 }} />
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

