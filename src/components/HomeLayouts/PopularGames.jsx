import { useEffect, useState } from "react";
import { ImStarFull } from "react-icons/im";
import { Link, useNavigation } from "react-router";
import Loading from "../../Pages/Loading";

const PopularGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const { state } = useNavigation();

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedGames = data.sort((a, b) => b.ratings - a.ratings);
        const gamesSlice = sortedGames.slice(0, 6);
        setGames(gamesSlice);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading games:", error);
        setLoading(false);
      });
  }, []);

  if (loading || state === "loading") {
    return <Loading />;
  }

  return (
    <div className="my-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Popular Games</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {games.map((game) => (
          <Link key={game.id} to={`gameDetails/${game.id}`}>
            <div className="card bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition">
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
        ))}
      </div>
    </div>
  );
};

export default PopularGames;
