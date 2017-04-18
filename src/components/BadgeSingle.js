import React from 'react';
import PropTypes from 'prop-types';

class BadgeSingle extends React.Component {
  render() {
    return (
      <div className='badge-single'>
        <img src={this.props.icon_src} alt="Badge Icon"/>
        <h2>{this.props.description}</h2>
        <p>{this.props.safe_extended_description}</p>
      </div>
    );
  }
}

BadgeSingle.propTypes = {
  description: PropTypes.string,
  icon_src: PropTypes.string,
  safe_extended_description: PropTypes.string,
};

export default BadgeSingle;
