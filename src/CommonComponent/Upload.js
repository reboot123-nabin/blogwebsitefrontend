import React from 'react'

const Upload = () => {
  return (
    <div>   <form method="POST" action="/upload" enctype="multipart/form-data">
    <input type="file" name="image" />
    <input type="submit"></input>
</form></div>
  )
}

export default Upload;