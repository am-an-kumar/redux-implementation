import React from 'react'
import PropTypes from 'prop-types'

const Heading = ({ text }) => <h2 className='heading'>{text}</h2>

Heading.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Heading
