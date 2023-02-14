import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsersFetch } from "../reduxSaga/Action/action"

const Data = () => {
  let users = useSelector(state => state.myFirstReducer.users);
  let dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(getUsersFetch())} >Click Me</button>
      {
        users.map((user, index) => {
          return <ul key={index}>
            <li>{user.name}</li>
          </ul>
        })
      }
   </div>)
}
export default Data