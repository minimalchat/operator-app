import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const iconRenderer = iconClassName => (
  <span className={iconClassName} />
);

const Button = (props) => {
  const isIconButton = props.icon != null;

  const type = props.type === 'submit' ? 'submit' : 'button';
  const content = isIconButton ? iconRenderer(props.icon) : props.children;

  const variant = isIconButton ? 'icon' : Button.variants[props.variant];
  const classNames = {
    variantModifer: variant ? `Button--${variant}` : '',
  };

  return (
    <button
      type={type}
      className={`Button ${classNames.variantModifer}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >{content}</button>
  );
};

Button.variants = {
  icon: 'icon',
  send: 'send',
  primary: 'primary',
  transparent: 'transparent',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  type: PropTypes.string,
  variant: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  variant: '',
  disabled: false,
};


export default Button;
