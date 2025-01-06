import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Newsletter from '../components/Newsletter/Newsletter'
import Spinner from '../components/Spinner/Spinner';
import Footer from '../components/Footer/Footer';


export default function Newsletterpage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout for 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

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
      <Newsletter/>
      <Footer/>
    </div>
  )
}
