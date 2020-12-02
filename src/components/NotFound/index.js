import React from 'react';
import { Empty } from 'antd';

function NotFound() {
  return (
    <div>
      <Empty
        description={
          <span>
            Page Not Found
          </span>
        }/>
    </div>
  )
}

export default NotFound
