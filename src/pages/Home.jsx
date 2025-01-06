import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import RecentBlogs from '../components/RecentBlogs/RecentBlogs'
import AllBlogs from '../components/AllBlogs/AllBlogs'
import Footer from '../components/Footer/Footer'
import Spinner from '../components/Spinner/Spinner'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout for 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Spinner/>
    );
  }

  return (
    <div>
      <Header/>
      <Hero/>
      <RecentBlogs/>
      <AllBlogs/>
      <Footer/>
    </div>
  )
}
