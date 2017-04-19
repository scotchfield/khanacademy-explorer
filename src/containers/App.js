import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchAllBadges } from '../actions';

import BadgePanel from '../components/BadgePanel';

class App extends React.Component {
  render() {
    return (
      <div>
        <button
          className='btn btn-primary'
          onClick={() => { this.props.dispatch(fetchAllBadges()); }}
        >
          Get All Badges
        </button>
        <BadgePanel badges={this.props.badges} />
      </div>
    );
  }
}

App.propTypes = {
  badges: PropTypes.array,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  badges: state.allBadges.badges,
});

export default connect(mapStateToProps)(App);
