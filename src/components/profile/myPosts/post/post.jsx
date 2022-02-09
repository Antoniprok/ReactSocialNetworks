import s from './post.module.css'

function Post(props) {
  return (
    <div>
      <img
        className={s.post}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJkb82xQL5H7SDl94jGYYKSQpZkrGQ4Nxo8CNh3_wzBwCeNPrte_o54Vpta3GMEe08qI&usqp=CAU"
        alt=""
      />
      <span>{props.masseg}</span>
      <div className={s.like_btn}>
        Like
        <img
          className={s.like_icon}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/langru-240px-Bot%C3%B3n_Me_gusta.svg.png"
        />
        {props.like}
      </div>
    </div>
  )
}

export default Post
