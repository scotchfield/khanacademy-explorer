import React from 'react';
import PropTypes from 'prop-types';

class ExerciseSingle extends React.Component {
  render() {
    const classNames = `badge-single col-xs-12 col-sm-6 ${this.props.index % 2 ? '' : 'clear'}`;

    return (
      <div className={classNames}>
        <span className='title'>{this.props.title}</span>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

ExerciseSingle.propTypes = {
  description: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string,
};

export default ExerciseSingle;
