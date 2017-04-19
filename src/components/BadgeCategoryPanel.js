import React from 'react';
import PropTypes from 'prop-types';

import BadgeCategorySingle from './BadgeCategorySingle';

class BadgeCategoryPanel extends React.Component {
  render() {
    return (
      <div className='category-panel'>
        <h1>All Badge Categories</h1>
        { this.props.categories ?
            this.props.categories.map(
              (category, i) => <BadgeCategorySingle
                key={category.category} index={i} {...category} />,
            )
          : null
        }
      </div>
    );
  }
}

BadgeCategoryPanel.propTypes = {
  categories: PropTypes.array,
};

export default BadgeCategoryPanel;
