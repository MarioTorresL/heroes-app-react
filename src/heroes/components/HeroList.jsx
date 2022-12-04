import {useMemo} from "react";
import { getHeroesByPublisher } from "../helpers";
import {HeroCard} from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo( ()=> getHeroesByPublisher(publisher), [publisher]) ;

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
