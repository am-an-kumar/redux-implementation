import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const List = ({ items, toggleItem, removeItem, handleItemKeyDown }) => {
  return items.length === 0 ? (
    <p className='info-no-item'>No todos added yet!!!</p>
  ) : (
    <ul className='list'>
      {items.map(item => (
        <ListItem
          key={item.id}
          item={item}
          removeItem={removeItem}
          toggleItem={toggleItem}
          handleItemKeyDown={handleItemKeyDown}
        />
      ))}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  toggleItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  handleItemKeyDown: PropTypes.func.isRequired,
}

export default List
