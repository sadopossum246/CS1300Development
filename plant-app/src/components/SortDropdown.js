import { Select } from 'antd';
import React from 'react';

class SortDropdown extends React.Component{
  constructor(props) {
    super(props)
  }
  render (){
    return (
      <Select
        
        placeholder="Sort Price By:"
        defaultValue={{ value: 'none', label: 'None' }}
        optionFilterProp="children"
        onChange={this.props.select}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
          {
            value: 'none',
            label: 'None',
          },
          {
            value: 'lowHigh',
            label: 'Low to High',
          },
          {
            value: 'Highlow',
            label: 'High to Low',
          },
        ]}
        style= {{marginLeft: '4%', marginRight: '4%'}}
    />
    );
  }
  
}

export default SortDropdown;