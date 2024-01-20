import { useParams } from "react-router-dom"
import { getHeroById } from "../helpers"
import { NotFoundPage } from "./NotFoundPage"

export const HeroPage = () => {
  const {heroId} = useParams()
  const hero = getHeroById(heroId)

  if(!hero){
    return <NotFoundPage id={heroId} />
  }

  return (
    <h1>HeroPage</h1>
  )
}
