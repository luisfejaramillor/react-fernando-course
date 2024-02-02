import { useForm } from "../../../../06-my-custom-hooks/useForm/useForm"
import { HeroPage } from "./HeroPage"
import { getHeroBySearchName } from "../helpers"
import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'


export const SearchPage = () => {
  const {search} = useLocation()
  const navigate = useNavigate()

  const {q = ''} =  queryString.parse(search)
  const heroesName = getHeroBySearchName(q)
  const {formState, handleInputChange} = useForm({searchText: q})
  const alertStatus = heroesName.length === 0
  const handleSubmit = (e)=> {
    e.preventDefault()
    navigate(`?q=${formState.searchText}`)
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
              value={formState.searchText}
            />

            <button type="submit" className="btn btn-outline-primary mt-1" >
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            alertStatus && (
              <div className="alert alert-primary">

                Search a hero
              </div>
            )
          }
          {
            (q?.length !== 0 && alertStatus) && (
              <div className="alert alert-danger">

                There is not results for hero <b>{q}</b>
              </div>
            )
          }
          {
            heroesName.map( hero => (
              <HeroPage key={hero.id} hero={hero.id} />
            ))
          }
        </div>
      </div>
    </>
  )
}
