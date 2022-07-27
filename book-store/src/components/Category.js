import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Category = () => {
  return (
   <>
   <h1 className="text-center text-info">Category</h1>
   <div className="container-fluid mx-2">
    <div className="row mt-5 mx-2">
        <div className="col-md-3">
            <button className="btn btn-warning w-100 mb-4">Java</button>
            <button className="btn btn-warning w-100 mb-4">C++</button>
            <button className="btn btn-warning w-100 mb-4">JavaScript</button>
            <button className="btn btn-warning w-100 mb-4">C</button>
            <button className="btn btn-warning w-100 mb-4">Python</button>
            <button className="btn btn-warning w-100 mb-4">All</button>
        </div>
        <div className="col-md-9">
            
        <div className="card">
                    {/* <img src={image} alt={name}  width="200px" height="250px"/>
                    <article> By {author} </article>
                    <h3> {name} </h3>
                    <p>{description}</p>
                    <h3> Rs {price} </h3>
                    <a href={link}> Click Here To Buy</a>
                    <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
                        Update
                    </Button>
                    <Button color="error" onClick={deleteHandler} sx={{ mt: 'auto' }}>
                    Delete</Button> */}
        </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Category