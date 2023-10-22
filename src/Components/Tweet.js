

function Tweet(props){
  const{name , message , like} = props
  return(
      <div>
          <h1>{name}</h1>
          <p>{message}</p>
          <h5>{like}</h5>
      </div>
  )
}
export default Tweet;