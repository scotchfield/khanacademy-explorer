import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BadgeSingle from '../components/BadgeSingle';

class App extends React.component {
  render() {
    return (
      <div>
        <h1>All Badges</h1>
        { this.props.badges ?
            this.props.badges.map(badge => <BadgeSingle badge={badge} />,
            )
          : null
        }
      </div>
    );
  }
}

App.propTypes = {
  badges: PropTypes.array,
};

const mapStateToProps = state => ({
  badges: state.allBadges.badges,
});

export default connect(mapStateToProps)(App);
