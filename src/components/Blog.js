import React from 'react';
import { connect } from 'react-redux';
import { toggleBlog } from '../actions/blogs';
import { Button } from 'semantic-ui-react';

const Blog = ({ id, name, read, dispatch }) => (
  <li
    onClick={ () => dispatch(toggleBlog(id)) }
    style={ read ? { textDecoration: 'line-through'} : {}}
  >
    {name}
    <Button primary>Edit</Button>
    <Button color='red'>Delete</Button>
  </li>
)

export default connect()(Blog);
