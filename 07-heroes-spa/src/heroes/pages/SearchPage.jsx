// import { HeroPage } from "./HeroPage"
import { useState } from "react"
import { useForm } from "../../../../06-my-custom-hooks/useForm/useForm"
import { HeroPage } from "./HeroPage"
import { getHeroBySearchName } from "../helpers"

export const SearchPage = () => {
  const [heroSearch, setHeroSearch] = useState()
  const {formState, handleInputChange} = useForm()
  const handleSubmit = (e)=> {
    e.preventDefault()
    const heroId = getHeroBySearchName(formState.searchText)
    setHeroSearch(heroId)
  }

  
  return (
    <>
      <h1>Search Hero</h1>
      <br />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <br />

          <form onSubmit={handleSubmit} >
            <input 
              type="text"
              className="form-control"
              placeholder="Type the hero name"
              name="searchText"
              autoComplete="off"
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-1" >
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">
            Search a hero
          </div>

          <div className="alert alert-danger">
            There is not results for hero <b>xxx</b>
          </div>
          {
            heroSearch && (
              <HeroPage heroName={heroSearch} />
            )
          }
        </div>
      </div>


    </>
  )
}
