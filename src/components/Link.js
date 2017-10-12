import React from 'react'
import PT from 'prop-types'

const propTypes = {
  active: PT.bool.isRequired,
  children: PT.node.isRequired,
  onClick: PT.func.isRequired
}

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = propTypes;

export default Link