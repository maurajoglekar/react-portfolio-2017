/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import classNames from 'classnames';
import React from 'react'
import PropTypes from 'prop-types';

//merge the Button class name with any (if any) class names passed as properties
const Button = props => 
  props.href
    ? <a {...props} className={classNames('Button', props.className)}/>
    : <button {...props} className={classNames('Button', props.className)}/>


Button.propTypes = {
  href: PropTypes.string,
};

export default Button

