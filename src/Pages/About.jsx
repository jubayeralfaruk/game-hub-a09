import React from "react";
import useTitle from "../hooks/useTitle";

const About = () => {
  useTitle("About");
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">About GameHub</h1>
        <p className="text-lg text-gray-400 mb-6">
          Welcome to <span className="font-semibold text-white">GameHub</span> – 
          your ultimate destination for discovering, exploring and enjoying the world of games.
          We provide a collection of top-rated games with detailed information, ratings, and visuals to help you choose your next adventure.
        </p>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl text-black font-semibold mb-2">🎮 Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to create a user-friendly gaming platform where anyone can 
            browse games, find ratings, and get complete game details in one place. 
            Whether you're a casual gamer or a true gaming enthusiast – GameHub is made for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
