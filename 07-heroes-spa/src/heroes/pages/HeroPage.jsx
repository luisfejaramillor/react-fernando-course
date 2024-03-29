import { useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"
import { NotFoundPage } from "./NotFoundPage"
import { useMemo } from "react"

export const HeroPage = ({hero}) => {
  const navigate = useNavigate()
  const {heroId} = useParams()
  const {id, superhero, alter_ego, publisher, first_appearance, characters} = useMemo( ()=> getHeroById(heroId || hero),[heroId, hero]) 
  const urlImgHero = `/assets/heroes/${heroId || hero}.jpg`

  const handleNavigateBack = () => {
    navigate(`/${publisher == 'Marvel Comics' ? 'marvel' : 'dc'}`)
  }

  if(!id){
    return <NotFoundPage id={heroId || hero} />
  }

  return (
    <div className="row mt-5" >
      <div className="col-4">
        <img src={urlImgHero}  alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft"/>

      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" ><b>Alter ego: </b>{alter_ego}</li>
          <li className="list-group-item" ><b>Publisher: </b>{publisher}</li>
          <li className="list-group-item" ><b>First Appearance: </b>{first_appearance}</li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p> {characters} </p>

        <button  onClick={handleNavigateBack} className="btn btn-outline-primary">Back</button>
      </div>
    </div>
  )
}
