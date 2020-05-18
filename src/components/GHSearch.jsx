import React from 'react'
import { Button, Input } from 'semantic-ui-react'
import { render } from '@testing-library/react';

const GHSearch = ({ searchResult, searchReq }) => {
  let sResult;
  
searchResult && 
(sResult = searchResult.map((items) => {
  return (
    <tr key={'result-item-' + items-id} id={'result-item-' + items.id}>
      <td>{items.login}</td>
      <td>{items.url}</td>
    </tr>
  );
}));

  return (
    <>
      <Input type="text" name="search" placeholder="Input GH username"/>
      <Button type='submit' onSubmit={searchReq} name="search">Search</Button>
      <div>{sResult}</div>
    </>
  )
}

export default GHSearch
