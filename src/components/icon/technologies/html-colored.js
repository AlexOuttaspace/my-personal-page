import React from 'react'
import PropTypes from 'prop-types'

export const HtmlColored = ({ height, width, ...otherProps }) => (
  <svg
    role="img"
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 452 520"
    {...otherProps}
  >
    <path fill="RGB(227,79,38)" d="M 41,460 L 0,0 451,0 410,460 225,512" />
    <path fill="RGB(239,101,42)" d="M 226,472 L 375,431 410,37 226,37" />
    <path
      fill="RGB(236,237,238)"
      d="M 226,208 L 151,208 146,150 226,150 226,94 84,94 99,265 226,265 z M 226,355 L162,338 158,293 102,293 109,382 226,414 z"
    />
    <path
      fill="RGB(255,255,255)"
      d="M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L226,150 362,150 367,94 z"
    />
  </svg>
)

HtmlColored.defaultProps = {
  height: '1.5rem',
  width: '1.5rem'
}

HtmlColored.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string
}