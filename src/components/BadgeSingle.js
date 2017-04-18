import React from 'react';
import PropTypes from 'prop-types';

class BadgeSingle extends React.Component {
  render() {
    const classNames = `badge-single col-xs-12 col-sm-6 ${this.props.index % 2 ? '' : 'clear'}`;

    return (
      <div className={classNames}>
        <img src={this.props.icon_src} alt="Badge Icon"/>
        <span className='title'>{this.props.description}</span>
        <p>{this.props.safe_extended_description}</p>
      </div>
    );
  }
}

BadgeSingle.propTypes = {
  description: PropTypes.string,
  icon_src: PropTypes.string,
  index: PropTypes.number,
  safe_extended_description: PropTypes.string,
};

export default BadgeSingle;
