import React from 'react'
import { useSelector } from "react-redux"
import { Button, Paper } from '@material-ui/core';
import { dispatch } from 'framework';
import './styles.scss';

export default function Counter({start}) {
  React.useEffect(()=>{
    dispatch('counter/init', { value: start||0 });
  },[]);

  const handleInc = delta => dispatch('counter/incr', { delta })
  const { value } = useSelector(({ counter }) => counter) || {};

  return (
    <Paper className="ctapp-counter">
      <Button variant="contained" onClick={_=>handleInc(1)}>+</Button>
      <div className="text_">{value}</div>
      <Button variant="contained" onClick={_=>handleInc(-1)}>-</Button>
      <div>redux version</div>
    </Paper>
  )
}
