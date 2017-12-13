import React from 'react';
import { connect } from 'react-redux';
import { toggleBlog } from '../actions/blogs';
import { Button } from 'semantic-ui-react';

const Blog = ({ id, name, read, dispatch }) => (
  <li>
    <span
      style={
        read ? { textDecoration: 'line-through'} : {}
      }
    >
      {name}
    </span>
    <br />
    <a onClick={ () => dispatch(toggleBlog(id)) }>Mark As Read</a>
    <br />
    <Button primary onClick={'#'}>View</Button>
    <Button onClick={'#'}>Edit</Button>
    <Button color='red' onClick={'#'}>Delete</Button>
  </li>
)

export default connect()(Blog);
