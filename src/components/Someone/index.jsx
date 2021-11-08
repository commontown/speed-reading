import React from 'react'
import { useSelector } from "react-redux"
import { dispatch } from "framework"
import { Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.scss';

export default function Someone() {
  const { results } = useSelector(({ someone }) => someone) || {};
  React.useEffect(()=>{
    dispatch('someone/fetch', { count: 4 });
  },[]);

  const handleRefresh = () => {
    dispatch('someone/store', { data: {results:null} } );
    dispatch('someone/fetch', { count: 4 });
  }

  const cards = results && results.map(({name, location, dob, cell, picture}, i)=>{
    return (
      <Paper key={i} className="person_" onClick={handleRefresh}>
        <img src={picture.large} alt="person pic"/>
        <div className="name_">{`${name.first} ${name.last}`}</div>
        <div>☎️ {cell||'-'}</div>
        <div>🌍 {location.street.number} {location.street.name}</div> 
        <div>{location.city}, {location.country}</div>
      </Paper>
    );
  })

  return (
    <div className="ctapp-someone">
      {cards || <CircularProgress />}
    </div>
  );
}
