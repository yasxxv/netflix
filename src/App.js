import React, { useEffect, useState } from 'react';

import Tmdb from './Tmdb';
import MovieRow from './componets/MovieRow';

import './App.css';

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className='page'>
      Header
      Destaque
      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      Rodape
    </div>
  )
}