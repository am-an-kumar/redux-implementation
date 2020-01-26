import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ item, toggleItem, removeItem, handleItemKeyDown }) => (
  <li className='list-item'>
    <span
      role='switch'
      aria-checked={item.completed}
      tabIndex='0'
      className='text'
      style={{
        textDecoration: item.completed ? 'line-through' : 'none',
      }}
      onClick={() => toggleItem(item.id)}
      onKeyDown={event => handleItemKeyDown(event, item.id)}
    >
      {item.name}
    </span>
    <button className='remove' onClick={() => removeItem(item)}></button>
  </li>
)

ListItem.propTypes = {
  item: PropTypes.object,
  removeItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
  handleItemKeyDown: PropTypes.func.isRequired,
}

export default ListItem
