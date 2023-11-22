import React, { Component } from 'react';
import Counter from './features/counter/Counter';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        <PostsList/>
        <AddPostForm/>
      </div>
    );
  }
}

export default App;
