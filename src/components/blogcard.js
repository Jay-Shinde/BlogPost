import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/slice/posts";

const Blogcard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])
  
  const state = useSelector((state) => state);
  console.log(state.post.data);
  return (
    <>
    <div className="main-card--cointainer">
      {state.post.data && state.post.data.map((e) => (
        <div className="card-container" key={e.id}>
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">{e.id}</span>
            <h2 className="card-title">{e.title}</h2>
            <span className="card-description subtle">
              {e.body}
            </span>
            <br />
            <br />
            <hr />
          </div>

          <span className="card-tag subtle dtl">Delete</span>
          
        </div>
      </div>

      ))}
      
        
      </div>
    </>
  );
};

export default Blogcard;
