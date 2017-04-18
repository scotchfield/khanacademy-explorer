import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchAllBadges } from '../actions';

import BadgeSingle from '../components/BadgeSingle';

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => { this.props.dispatch(fetchAllBadges()); }}>
          Get All Badges
        </button>
        <h1>All Badges</h1>
        { this.props.badges ?
            this.props.badges.map(
              (badge, i) => <BadgeSingle key={badge.name} index={i} {...badge} />,
            )
          : null
        }
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
