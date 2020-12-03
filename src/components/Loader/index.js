import React from "react";

import { Spin } from 'antd';

import './style.scss';

const Loader = () => {
  return (
    <div className="loader-container">
      <Spin size="large" tip="Loading..."/>
    </div>
  );
};

export default Loader;
