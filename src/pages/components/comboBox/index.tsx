// components/BrokerComboBox.js
import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { BrokerType } from 'src/types/forms/reactDatepickerTypes';

const brokers = ['Alpari','Amarkets','Capital Xtend','Aron groups'];

const BrokerComboBox = ({ value, onChange } : {value : BrokerType , onChange : (val : any) => void}) => {
  return (
    <Autocomplete
      options={brokers}
      getOptionLabel={(option) => option}
      value={value}
      onChange={(event, newValue) => onChange(newValue)}
      renderInput={(params) => <TextField {...params} label="بروکر" variant="outlined" />}
    />
  );
};

export default BrokerComboBox;
