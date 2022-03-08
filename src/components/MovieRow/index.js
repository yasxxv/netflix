import React, { useState } from "react";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import './MovieRow.css';

export default ({ title, items }) => {

    const [scrollx, setScrollx] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollx + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollx(x);
    }

    const handleRightArrow = () => {
        let x = scrollx - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollx(x);
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
                <div className="movieRow--list" style={{
                    marginLeft: scrollx,
                    width: items.results.length * 150
                }}>
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

