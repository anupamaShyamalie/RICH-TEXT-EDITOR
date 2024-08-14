import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './App.css'
import { useState } from 'react';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    ['clean']
    [{ 'script': 'sub' }, { 'script': 'super' }],
  ],

}

function App() {

  const [value, setValue] = useState('')

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="editor">
            <ReactQuill
              theme="snow"
              placeholder="Enter text here"
              value={value}
              onChange={setValue}
              className='quill'
              modules={modules}
            />
          </div>
          <div className="preview"
            dangerouslySetInnerHTML={
              { __html: value }}
          />

        </div>
      </div>

    </>
  )
}

export default App
