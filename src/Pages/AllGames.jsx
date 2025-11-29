// import React, { useState } from "react";
import { ImStarFull } from "react-icons/im";
import { Link, useLoaderData } from "react-router";
import useTitle from "../hooks/useTitle";

const AllGames = () => {
  const games = useLoaderData();
  // const [search, setSearch] = useState("");

  // const gamesSearch = search
  //   ? games.filter((game) =>
  //       game.title?.trim().toLowerCase().includes(search.trim().toLowerCase())
  //     )
  //   : games;

    useTitle("All Games");

  return (
    <div className="my-10 px-6">
      <h2 className="text-[min(5vh,36px)] font-bold text-center mb-6">
          Try Your Favourite Game
        </h2>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-left mb-6">
          All Games ({games.length})
        </h2>
        {/* <label className="input ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search"
          />
        </label> */}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {games.map((game) =>
          !games ? (
            <h2 className="text-xl font-bold text-center mb-6">Game Not Found.</h2>
          ) : (
            <Link key={game.id} to={`/gameDetails/${game.id}`}>
              <div
                key={game.id}
                className="card bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition"
              >
                <figure>
                  <img
                    src={game.coverPhoto || game.img}
                    alt={game.title}
                    className="w-full h-56 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{game.title}</h2>
                  <span className="flex items-center gap-1">
                    <ImStarFull className="text-yellow-500" /> {game.ratings}
                  </span>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default AllGames;
