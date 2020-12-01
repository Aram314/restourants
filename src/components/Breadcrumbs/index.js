import React, { useState, useEffect } from 'react';

import { capitalize } from '../../utils/helper';
import { useHistory } from 'react-router-dom';
import { Breadcrumb } from 'antd';

function Breadcrumbs() {
  const history = useHistory();
  const splitPaths = history.location.pathname.split('/');
  const [paths, setPaths] = useState(splitPaths);

  useEffect(() => {
    history.listen(({ pathname }) => {
      setPaths(pathname.split('/'))
    })
  }, []);

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      {paths.map(path => {
        return (
          <Breadcrumb.Item key={path}>{capitalize(path)}</Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}

export default Breadcrumbs
