import React, { useState } from 'react';
import { Box, Stack, TextField, Button } from '@mui/material';

const Calclate = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [res, setRes] = useState<number>(0);

  const handleCalc = (t: 'plus' | 'minus' | 'multi' | 'divi') => {
    switch (t) {
      case 'plus': setRes(num1 + num2); break;
      case 'minus': setRes(num1 - num2); break;
      case 'multi': setRes(num1 * num2); break;
      case 'divi': setRes(num1 / num2); break;
    }
  }

  const boxStyle = {
    marginBottom: '10px',
    marginTop: '10px'
  }

  return (
    <div>
      <Box sx={boxStyle}>
        <TextField
          type="number"
          onChange={(e) => setNum1(Number(e.target.value))}
          value={num1}
        />
        <TextField
          type="number"
          onChange={(e) => setNum2(Number(e.target.value))}
          value={num2}
        />
      </Box>
      <Stack 
        spacing={2}
        direction="row"
        justifyContent="center"
      >
        <Button
          variant="contained"
          onClick={() => handleCalc('plus')}
        >+</Button>
        <Button
          variant="contained"
          onClick={() => handleCalc('minus')}
        >-</Button>
        <Button
          variant="contained"
          onClick={() => handleCalc('multi')}
        >x</Button>
        <Button
          variant="contained"
          onClick={() => handleCalc('divi')}
        >÷</Button>
      </Stack>
      <Box sx={boxStyle}>
        <TextField
          label="合計"
          type="number"
          disabled={true}
          value={res}
        ></TextField>
      </Box>
    </div>
  )
}

export default Calclate;