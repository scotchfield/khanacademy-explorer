import React from 'react';
import PropTypes from 'prop-types';

import BadgeSingle from './BadgeSingle';

class BadgePanel extends React.Component {
  render() {
    return (
      <div className='badge-panel'>
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

BadgePanel.propTypes = {
  badges: PropTypes.array,
};

export default BadgePanel;
