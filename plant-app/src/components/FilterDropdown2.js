import { Select } from 'antd';
import React from 'react';

class FilterDropdown2 extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Select
        
        placeholder="Filter By:"
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
            value: 'seasonal',
            label: 'Seasonal',
          },
          {
            value: 'year-round',
            label: 'Year Round',
          },
        ]}
        style= {{marginLeft: '5%', marginRight: '5%'}}
    />
    );

  }


}

export default FilterDropdown2;