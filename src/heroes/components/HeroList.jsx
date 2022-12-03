import { getHeroesByPublisher } from "../helpers";
import {HeroCard} from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <>
      <div className="d-flex flex-wrap">
        {heroes.map(hero => (
          <HeroCard {...hero} key={hero.id}/>
        ))}
      </div>
    </>
  );
};
