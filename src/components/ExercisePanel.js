import React from 'react';
import PropTypes from 'prop-types';

import ExerciseSingle from './ExerciseSingle';

class ExercisePanel extends React.Component {
  render() {
    return (
      <div className='badge-panel'>
        <h1>All Exercises</h1>
        { this.props.exercises ?
            this.props.exercises.map(
              (exercise, i) => <ExerciseSingle key={exercise.name} index={i} {...exercise} />,
            )
          : null
        }
      </div>
    );
  }
}

ExercisePanel.propTypes = {
  exercises: PropTypes.array,
};

export default ExercisePanel;
