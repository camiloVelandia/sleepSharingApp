import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as favoritesActions from '../../actions/favoritesActions';


const Search = (props) => {
  const [location, setLocation] = useState('');

  const filterByLocation = (e) => {
    setLocation(e.target.value);
    props.getLocation(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="busca por localidad"
        value={location}
        onChange={filterByLocation}
      />
    </div>
  );
};

const mapStateToProps = ({getroomsReducer}) => {
  return {
    getroomsReducer
  }
}

export default connect(mapStateToProps, favoritesActions)(Search);
