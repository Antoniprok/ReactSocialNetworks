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
      <Post masseg="привет мой свет" like="15" />
      <Post masseg="проверка на работоспособность" like="20" />
    </div>
  )
}
export default MyPosts
