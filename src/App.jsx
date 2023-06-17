import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Logo } from './assets';
import { Home, CreatePost } from './pages'
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export default App