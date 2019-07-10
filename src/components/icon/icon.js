import React from 'react'
import PropTypes from 'prop-types'

import { Github, Linkedin, Gmail } from './brands'

const icons = {
  github: Github,
  linkedin: Linkedin,
  gmail: Gmail
}

export const Icon = ({ variant, ...iconProps }) => {
  const Icon = icons[variant]

  if (Icon === undefined) return null

  return <Icon {...iconProps} />
}

Icon.propTypes = {
  variant: PropTypes.oneOf(Object.keys(icons)).isRequired
}