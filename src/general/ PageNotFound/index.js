import React from 'react';
import NotFound from './styles';

const PageNotFound=()=>{
  return(
    <NotFound>
      <div>
        <h1>
          404
          {' '}
          <br />
          Page Not Found
        </h1>
        <i className="far fa-frown" />
      </div>
    </NotFound>
  )
}

export default PageNotFound