import React from 'react';
import PropTypes from 'prop-types';

class BadgeSingle extends React.Component {
  render() {
    return (
      <div className='badge-single'>
        <h1>{this.props.badge}</h1>
      </div>
    );
  }
}

BadgeSingle.propTypes = {
  badge: PropTypes.object,
};

export default BadgeSingle;
