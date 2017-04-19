import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fetchAllBadges from '../actions/AllBadges';
import fetchAllBadgeCategories from '../actions/BadgeCategories';

import BadgePanel from '../components/BadgePanel';
import BadgeCategoryPanel from '../components/BadgeCategoryPanel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { visible: '' };

    this.getAllBadges = this.getAllBadges.bind(this);
    this.getAllBadgeCategories = this.getAllBadgeCategories.bind(this);
  }
  getAllBadges() {
    this.setState({ visible: 'allbadges' });

    this.props.dispatch(fetchAllBadges());
  }
  getAllBadgeCategories() {
    this.setState({ visible: 'badgecategories' });

    this.props.dispatch(fetchAllBadgeCategories());
  }
  render() {
    return (
      <div>
        <button className='btn btn-primary' onClick={this.getAllBadges}>
          All Badges
        </button>
        <button className='btn btn-primary' onClick={this.getAllBadgeCategories}>
          Badge Categories
        </button>
        { this.state.visible === 'allbadges' ?
            <BadgePanel badges={this.props.badges} /> :
            null }
        { this.state.visible === 'badgecategories' ?
            <BadgeCategoryPanel categories={this.props.categories} /> :
            null }
      </div>
    );
  }
}

App.propTypes = {
  badges: PropTypes.array,
  categories: PropTypes.array,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  badges: state.allBadges.badges,
  categories: state.allBadgeCategories.categories,
});

export default connect(mapStateToProps)(App);
