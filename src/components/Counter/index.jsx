import React from 'react'
import { Button, Paper } from '@material-ui/core';
import './styles.scss';

export default function Counter({start}) {
  const [ value, setValue ] = React.useState(start||0)
  return (
    <Paper className="ctapp-counter">
      <Button variant="contained" onClick={_=>setValue(value+1)}>+</Button>
      <div className="text_">{value}</div>
      <Button variant="contained" onClick={_=>setValue(value-1)}>-</Button>
    </Paper>
  )
}
