import PropTypes from "prop-types";



export const GifCard = ({title, img}) => {
  return (
    <div className="card" >
        <img src={img} alt={title} />
        <p>{title}</p>
    </div>
  )
}

GifCard.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}
