import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="mt-5 d-flex justify-content-center">
        <img
          className="img-thumbnail"
          src={`../../../assets/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
        />
        <div className="text-center p-4">
          <h3>{hero.superhero}</h3>
          <hr />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego: </b> {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b> {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>First Appearance: </b> {hero.first_appearance}
            </li>
          </ul>
          <h5 className="mt-3">
            <b>Characters</b>
          </h5>
          <p>{hero.characters}</p>
          <button className="btn btn-outline-warning" onClick={onNavigateBack}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};
