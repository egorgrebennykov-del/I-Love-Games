import { useEffect, useState } from "react";
import request from "../../utils/request";
import GameCard from "../gameCard/gameCard";

export default function Catalog() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    request("games_i_love_games_project")
      .then((games) => setGames(games))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <section id="catalog-page">
        <h1>Catalog</h1>
        {/* Display div: with information about every game (if any) */}
        <div className="catalog-container">
          {games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
        {/* Display paragraph: If there is no games  */}
        {/* <h3 class="no-articles">No Added Games Yet</h3> */}
      </section>
    </>
  );
}
