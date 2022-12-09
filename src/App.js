import './App.css';
import { useRef/*, useState */} from 'react';
//import React, { Component } from 'react';

function App() {
  const queryRef = useRef(null);
  return (
    <div className="App">
      <div className="topnav">
  <a className="active" href="#home">Home</a>
  <a href="#chat">Chat</a>
  <a href="#support">Support</a>
  <form>
        <input name='query' ref={queryRef} type="text" placeholder='Search something awesome' onKeyDown={function(event){if(event.keyCode == 13){alert('query updated')}}}/>
    </form>
      </div>
      <div name='home' className='content'>
        <h1>Hello World!</h1>
      </div>
      <div name='chat' className='content'>
        <h1>Chat content</h1>
      </div>
</div>
  );
}

export default App;
