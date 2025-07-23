import { useState, useEffect } from 'react'


export default function App() {

  const [postData, setPostData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  })

  return (
    <>

      <h1 className='text-center'>Send a new post</h1>

      <form onSubmit={submit}>

        <div className='card m-5 p-3'>

          <div className='d-flex'>
            <div className="w-50 mx-3">
              <label htmlFor="author" className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                name="author"
                id="author"
                value={postData.author}
                aria-describedby="authorHelper"
                placeholder="Insert author's name..."
                onChange={(e) => setPostData({ ...postData, author: e.target.value })}
              />

            </div>
            <div className="w-50 mx-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                value={postData.title}
                aria-describedby="titleHelper"
                placeholder="Insert new post's title..."
                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
              />

            </div>
          </div>

          <div className="m-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" name="body" id="body" value={postData.body} rows="3" placeholder='Insert description of the post...' onChange={(e) => setPostData({ ...postData, body: e.target.value })}></textarea>
          </div>

          <div className="form-check m-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="public"
              id="public"
              onChange={(e) => setPostData({ ...postData, public: e.target.checked })}
            />
            <label className="form-check-label" htmlFor="public">Public</label>
          </div>


          <button
            type="submit"
            className="btn btn-primary mx-3 w-25"
          >
            Send
          </button>

        </div>

      </form>
    </>
  )
}


