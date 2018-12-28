import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const iconRenderer = iconClassName => (
  <span className={iconClassName} />
);

const Button = (props) => {
  const {
    icon, type, variant, children, onClick, disabled,
  } = props;
  const isIconButton = icon != null;

  const content = isIconButton ? iconRenderer(icon) : children;

  const buttonVariant = isIconButton ? 'icon' : Button.variants[variant];
  const buttonVariantClassName = buttonVariant ? `Button--${buttonVariant}` : '';

  return (
    <button
      type={type}
      className={`Button ${buttonVariantClassName}`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

Button.variants = {
  icon: 'icon',
  send: 'send',
  primary: 'primary',
  transparent: 'transparent',
};

Button.propTypes = {
  onClick: PropTypes.func,
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
  children: null,
  onClick: null,
  icon: null,
};


export default Button;
