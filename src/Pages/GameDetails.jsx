import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import { ImStarFull } from "react-icons/im";
import { Link } from "react-router";
import useTitle from "../hooks/useTitle";

const GameDetails = () => {
  useTitle("Game Details")
  const { gameId } = useParams();
  const games = useLoaderData();
  const navigate = useNavigate();

  const game = games.find((g) => g.id == gameId);
  // console.log(game);

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
        <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold mb-2">Game Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the game you are looking for does not exist or may have been
          removed.
        </p>
        <Link
          to="/all-games"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Back to All Games
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="relative">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full max-h-[450px] rounded-xl shadow-lg "
        />
        <div className="absolute bottom-6 left-10 bg-black/60 text-white px-4 py-2 rounded-lg">
          <h1 className="text-2xl font-bold">{game.title}</h1>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <span className="badge badge-primary">{game.category}</span>
          <span>
            Developer: <span className="font-medium">{game.developer}</span>
          </span>
          <span className="flex items-center gap-1">
            <ImStarFull className="text-yellow-500" /> {game.ratings}
          </span>
        </div>

        <p className="mt-4 text-gray-500 leading-relaxed">{game.description}</p>

        <div className="mt-6">
          <a
            href={game.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Download / Play Now
          </a>
        </div>

        <div className="mt-4">
          <Link
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
