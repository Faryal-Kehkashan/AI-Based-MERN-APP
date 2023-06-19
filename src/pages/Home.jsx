import React, { useState, useEffect} from 'react'
import { Loader, Card, FormField } from '../components'

function Home() {

  const [loading, setLoading] = useState(false);
  const [allpost, setAllPosts] = useState(null);

  return (
    <div>Home</div>
  )
}

export default Home