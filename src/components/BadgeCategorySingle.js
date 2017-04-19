import React from 'react';
import PropTypes from 'prop-types';

class BadgeCategorySingle extends React.Component {
  render() {
    const classNames = `badge-single col-xs-12 col-sm-6 ${this.props.index % 2 ? '' : 'clear'}`;

    return (
      <div className={classNames}>
        <img src={this.props.icon_src} alt='Category Icon' />
        <span className='title'>{this.props.type_label}</span>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

BadgeCategorySingle.propTypes = {
  description: PropTypes.string,
  icon_src: PropTypes.string,
  index: PropTypes.number,
  type_label: PropTypes.string,
};

export default BadgeCategorySingle;
