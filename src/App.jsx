import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Logo } from './assets';
import { Home, CreatePost } from './pages'
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <BrowserRouter>
    <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>

    </header>
    </BrowserRouter>
  )
}

export default App