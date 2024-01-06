import PropTypes from 'prop-types'

export const Quote = ({_id='', quote='', author=''}) => {
  return (
    <blockquote key={_id} className="blockquote text-end">
        <p className="mb-1" > {quote} </p>
        <footer className="blockquote-footer"> {author} </footer>
    </blockquote>
  )
}


Quote.propTypes = {
    _id: PropTypes.string,
    quote: PropTypes.string,
    author: PropTypes.string,
}
