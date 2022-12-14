import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  publisher,
  characters,
  superhero,
  alter_ego,
}) => {
   
  const heroUrl = `../../../assets/heroes/${id}.jpg`;

  return (
    <>
      <div className="p-2 col-md-6 col-sm-12">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={heroUrl}
                className="img-fluid rounded-start"
                alt={superhero}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>
                <p className="card-text">{publisher}</p>
                <p className="card-text">
                  <small className="text-muted">{characters}</small>
                </p>
                <Link to={`/hero/${id}`}>More...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
