import React from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';

const BlogView = ({ id, name, body, dispatch}) => (
  <div>
    <h2>{name}</h2>
    <p>{body}</p>
  </div>
)

export default connect()(BlogView);
