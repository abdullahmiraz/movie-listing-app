'use client'

// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '@/firebase/firebase.config'; // Assuming you've already set up firebase configuration

// Define the Page component
const Page = () => {
  // State to store user data
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effect to fetch user data from Firebase
  useEffect(() => {
    const auth = getAuth(app); // Get Firebase Auth instance

    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
      setLoading(false); // Set loading to false once user data is fetched
    });

    // Clean up function
    return () => unsubscribe();
  }, []);

  // If loading, display loading message
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  // If user is signed in, display user details
  if (user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>
          <h1 className="text-3xl font-bold mb-4">Welcome {user.displayName}</h1>
          <p className="text-xl">Email: {user.email}</p>
          {/* Add more user details as needed */}
        </div>
      </div>
    );
  }

  // If user is signed out, display sign-in options
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-3xl font-bold mb-4">Welcome</h1>
        <p className="text-xl">Please sign in to view your details</p>
        {/* Add sign-in options */}
      </div>
    </div>
  );
};

// Export the Page component
export default Page;
