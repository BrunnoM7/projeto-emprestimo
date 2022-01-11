import React from 'react'

const Select = props => {
  const { onChange, orgs, orgEmissor, name, className } = props;

  return (
    <select 
      className={className}
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
            {org.label.toUpperCase()}
          </option>
          )
        )
      }
    </select>
  )
}

export default Select
