import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOthers } from '../../actions/otherActions';
import { initialLoad } from '../../actions/initialActions';

class Other extends Component {
  componentWillMount() {
    console.log('componentWillMount - Other');
    this.props.initialLoad(() => this.props.getOthers().then(() => console.log('SOU UMA PROMISE')));
  }

  render() {
    if (this.props.loading) {
      return <h3>Loading</h3>;
    }

    return (
      <div>Others 444:
        {this.props.others.map((other) => (
          <div className="row no-gutters" key={other}>{other}</div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log({ others: state.others });
  return {
    others: state.others.all,
    loading: state.others.loading
  }
}

export default connect(mapStateToProps, { getOthers, initialLoad })(Other);
