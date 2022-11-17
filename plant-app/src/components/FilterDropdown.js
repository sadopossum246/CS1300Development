import { Select } from 'antd';
import React from 'react';

class FilterDropdown extends React.Component {
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
            value: 'flowers',
            label: 'Flowers',
          },
          {
            value: 'succulent',
            label: 'Succulent',
          },
          {
            value: 'trees',
            label: 'Trees',
          },
        ]}
        style= {{marginLeft: '5%', marginRight: '5%'}}
    />
    );

  }


}

export default FilterDropdown;