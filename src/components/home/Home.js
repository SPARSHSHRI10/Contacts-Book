import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify' 
import './Home.css'

const Home = () => {
  const contacts = useSelector(state => state);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({type:"Delete_Contact" , payload:id})
    toast.success("Contact Deleted successfully")
  };

  return (
    <div>
        <div className='button'>
            <Link to='/add' className='btn btn-success'>Add Contact</Link>
        </div>
        <div className='table1'>
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Number</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                contacts.map((contact,id) =>
                (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.number}</td>
                    <td>
                      <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary" style={{width:"80px"}}>Edit Contact</Link>
                      <button className='btn btn-small btn-danger' style={{marginLeft:"20px", width:"80px"}} onClick={() => handleDelete(contact.id)}>Delete Contact</button> 
                    </td>
                  </tr>
                ))
              }
            </tbody> 
          </table>
        </div>
    </div>
  )
}

export default Home
