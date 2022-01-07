import React from 'react'

const Select = props => {
  const { onChange, orgs, orgEmissor, name } = props;

  return (
    <select 
      name={name} 
      onChange={onChange}
      value={ orgEmissor }
    >
      {orgs.map((org) => 
        (
          <option 
            key={org.value} 
            value={org.value}
          >
            {org.label}
          </option>
          )
        )
      }
    </select>
  )
}

export default Select
