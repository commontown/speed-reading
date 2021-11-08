import React from 'react'
import { Button, Paper } from '@material-ui/core';
import './styles.scss';

interface CounterProps {
  start: number
}

const Counter:React.FC<CounterProps> = ({start}):JSX.Element => {
  const [ value, setValue ] = React.useState(start||0)
  return (
    <Paper className="ctapp-counter">
      <Button variant="contained" onClick={_=>setValue(value+1)}>+</Button>
      <div className="text_">{value}</div>
      <Button variant="contained" onClick={_=>setValue(value-1)}>-</Button>
      <div>typescript version</div>
    </Paper>
  )
}

export default Counter
