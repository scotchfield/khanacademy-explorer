import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fetchAllBadges from '../actions/AllBadges';
import fetchAllBadgeCategories from '../actions/BadgeCategories';
import fetchAllExercises from '../actions/Exercises';

import BadgePanel from '../components/BadgePanel';
import BadgeCategoryPanel from '../components/BadgeCategoryPanel';
import ExercisePanel from '../components/ExercisePanel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { visible: '' };

    this.getAllBadges = this.getAllBadges.bind(this);
    this.getAllBadgeCategories = this.getAllBadgeCategories.bind(this);
    this.getAllExercises = this.getAllExercises.bind(this);
  }
  getAllBadges() {
    this.setState({ visible: 'allbadges' });
    this.props.dispatch(fetchAllBadges());
  }
  getAllBadgeCategories() {
    this.setState({ visible: 'badgecategories' });
    this.props.dispatch(fetchAllBadgeCategories());
  }
  getAllExercises() {
    this.setState({ visible: 'allexercises' });
    this.props.dispatch(fetchAllExercises());
  }
  render() {
    const buttons = [
      { name: 'All Badges', callback: this.getAllBadges },
      { name: 'Badge Categories', callback: this.getAllBadgeCategories },
      { name: 'All Exercises', callback: this.getAllExercises },
    ];

    return (
      <div>
        { buttons.map(button =>
            <button key={button.name} className='btn btn-primary' onClick={button.callback}>
              {button.name}
            </button>,
        )}
        { this.state.visible === 'allbadges' ?
            <BadgePanel badges={this.props.badges} /> :
            null }
        { this.state.visible === 'badgecategories' ?
            <BadgeCategoryPanel categories={this.props.categories} /> :
            null }
        { this.state.visible === 'allexercises' ?
            <ExercisePanel exercises={this.props.exercises} /> :
            null }
      </div>
    );
  }
}

App.propTypes = {
  badges: PropTypes.array,
  categories: PropTypes.array,
  dispatch: PropTypes.func,
  exercises: PropTypes.array,
};

const mapStateToProps = state => ({
  badges: state.allBadges.badges,
  categories: state.allBadgeCategories.categories,
  exercises: state.allExercises.exercises,
});

export default connect(mapStateToProps)(App);
