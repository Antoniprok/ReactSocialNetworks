import react from 'react'
import Post from './post/post'

function MyPosts() {
  return (
    <div>
      <div>
        <div>New Post</div>
        <textarea cols="30" rows="3"></textarea>
        <br />
        <button>Send</button>
      </div>
      <Post masseg="привет мой свет" likeCount="15" />
      <Post masseg="проверка на работоспособность" likeCount="20" />
    </div>
  )
}
export default MyPosts
