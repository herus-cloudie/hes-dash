import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { BrokerType } from 'src/types/forms/reactDatepickerTypes';

const brokers = ['Alpari','Amarkets','Capital Xtend','Aron groups'];
const version = ['4' , '5']
const ComboBox = ({ value, onChange } : {value : BrokerType | '4' | '5', onChange : (val : any) => void}) => {
  const typeIsBroker = value != '4' && value != '5';

  return (
    <Autocomplete
      style={{width : typeIsBroker ? '200px' : '100px'}}
      options={typeIsBroker ? brokers : version}
      getOptionLabel={(option) => option}
      value={value}
      onChange={(e, newValue) => onChange(newValue)}
      renderInput={(params) => <TextField {...params} label={typeIsBroker ? "بروکر" : 'ورژن متا تریدر'} variant="outlined" />}
    />
  );
};

export default ComboBox;
