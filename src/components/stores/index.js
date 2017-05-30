import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStores } from '../../actions/storeActions';
import { initialLoad } from '../../actions/initialActions';
import Other from './other';

class StoresIndex extends Component {
  componentWillMount() {
    console.log('componentWillMount - StoresIndex');
    this.props.initialLoad(() => this.props.getStores());
  }

  render() {
    if (this.props.loading) {
      return <h3>Loading</h3>;
    }

    return (
      <div className="stores">
        <h2>Stores</h2>
        <Other />
        {
          this.props.loading && (
            <div className="row">
              <div className="col-12">
                <h3>Loading</h3>
              </div>
            </div>
          )
        }
        {this.props.stores.map((store) => (
          <div className="row no-gutters" key={store}>
            <div className="col-6 img"><img src="https://placeholdit.imgix.net/~text?txtsize=50&txt=200%C3%97200&w=200&h=200" /></div>
            <div className="col-6 desc">{store}</div>
            <div className="col-12 badges">
              <div className="d-flex flex-row justify-content-center">
                <div><img src="https://placeholdit.imgix.net/~text?txtsize=10&txt=50&w=50&h=50" /></div>
                <div><img src="https://placeholdit.imgix.net/~text?txtsize=10&txt=50&w=50&h=50" /></div>
                <div><img src="https://placeholdit.imgix.net/~text?txtsize=10&txt=50&w=50&h=50" /></div>
                <div><img src="https://placeholdit.imgix.net/~text?txtsize=10&txt=50&w=50&h=50" /></div>
                <div><img src="https://placeholdit.imgix.net/~text?txtsize=10&txt=50&w=50&h=50" /></div>
                <div><img src="https://placeholdit.imgix.net/~text?txtsize=10&txt=50&w=50&h=50" /></div>
                <div><img src="https://placeholdit.imgix.net/~text?txtsize=10&txt=50&w=50&h=50" /></div>
              </div>
            </div>
            <div className="col-6"><a href="#" className="btn btn-primary">Button 1</a></div>
            <div className="col-6"><a href="#" className="btn btn-danger">Button 2</a></div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log({ stores: state.stores });
  return {
    stores: state.stores.all,
    loading: state.stores.loading
  }
}

export default connect(mapStateToProps, { getStores, initialLoad })(StoresIndex);
