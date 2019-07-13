import React from 'react'
import PropTypes from 'prop-types'

export const JavascriptColored = ({ height, width, ...otherProps }) => (
  <svg
    role="img"
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 452 520"
    {...otherProps}
  >
    <path fill="RGB(229,162,40)" d="M 0,0 L 451,0 410,460 225,512 41,460" />
    <path fill="RGB(241,191,38)" d="M 226,472 L375,431 410,37 226,37" />
    <path
      fill="RGB(236,237,238)"
      d="M 226,94 L 113,94 102,265 226,265 226,208 160,208 165,150 226,150 z M 226,355 L 162,338 158,293 102,293 109,382 226,414 z"
    />
    <path
      fill="RGB(255,255,255)"
      d="M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L 339,94 357,180 301,180 293,150 226,150 z"
    />
  </svg>
)

JavascriptColored.defaultProps = {
  height: '1.5rem',
  width: '1.5rem'
}

JavascriptColored.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string
}
