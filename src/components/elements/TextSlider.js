import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.elementType,
  color: PropTypes.string,
  size: PropTypes.string,
  loading: PropTypes.bool,
  wide: PropTypes.bool,
  wideMobile: PropTypes.bool,
  disabled: PropTypes.bool
}

const defaultProps = {
  tag: 'slider',
  color: '',
  size: '',
  loading: false,
  wide: false,
  wideMobile: false,
  disabled: false
}

const TextSlider = ({
  className,
  tag,
  color,
  size,
  loading,
  wide,
  wideMobile,
  disabled,
  ...props
}) => {

  const classes = classNames(
    'button',
    color && `button-${color}`,
    size && `button-${size}`,
    loading && 'is-loading',
    wide && 'button-block',
    wideMobile && 'button-wide-mobile',
    className
  );

  return (
    <div className='slideshow'>
      <div className='slideshowSlider'>
        {["#0088FE", "#00C49F", "#FFBB28"].map((bgColor, idx) => ( 
          <div className='slide' key={idx} style={{ background: bgColor}}/>
        ))}
      </div>
    </div>
  );
}

TextSlider.propTypes = propTypes;
TextSlider.defaultProps = defaultProps;

export default TextSlider