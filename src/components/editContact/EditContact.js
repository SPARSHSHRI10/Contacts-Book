import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import './EditContact.css'

const EditContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    

    const {id} = useParams();
    //useParams is a hook which lets us access the parameters of our route
    const contacts = useSelector(state=>state);
    const currentContact = contacts.find((contact)=> contact.id === parseInt(id));
    console.log(currentContact)

    const dispatch = useDispatch();
    const history = useHistory();
    //console.log(currentContact)

    useEffect(() => {
        if(currentContact) {
            setName(currentContact.name)
            setEmail(currentContact.email)
            setNumber(currentContact.number)
        }
    }, [currentContact])

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const checkMail = contacts.find(
          (contact) => contact.id !== parseInt(id) && contact.email === email)
    
        const checkNumber= contacts.find(
          (contact) => contact.id !== parseInt(id) && contact.number === parseInt(number))
    
        if(!name || !email || !number) {
          return toast.warning("Please fill in all fields!")
        }
    
        if(checkMail) {
          return toast.error("Mail already exists")
        }
    
        if(checkNumber) {
          return toast.error("Number already exists")
        }
    
        const data = {
          id: parseInt(id),
          name,
          email,
          number
        }
    
        dispatch({ type: "Edit_Contact" , payload:data });
        toast.success("Contact updated successfully!");
        history.push('/')
    }

    const handleUserName = (e) => {
        setName(e.target.value)
      }
    
      const handleUserEmail = (e) => {
        setEmail(e.target.value)
      }
    
      const handleUserNumber = (e) => {
        setNumber(e.target.value)
      }

    return (
        <>
        {currentContact ? (
        <>
          <h1 style={{color:"black", fontSize:'3.5em' ,textAlign:"center", marginTop:40}}>Edit a Contact {id}</h1>
          <div className="form">
              <form onSubmit={handleSubmit}>
                  <div>
                      <input type="text" placeholder='Name' value={name} onChange={handleUserName}/>
                  </div>
                  <br/>
                  <div>
                      <input type="email" placeholder='Email' value={email} onChange={handleUserEmail}/>
                  </div>
                  <br/>
                  <div>
                      <input type="number" placeholder='Phone number' value={number} onChange={handleUserNumber}/>
                  </div>
                  <br/>
                  <input type="submit" style={{width:"40%"}} className='btn btn-success' value="Update this contact"></input>
              <Link to="/" className='btn btn-danger' style={{marginLeft:75}}>Cancel</Link>
              </form> 
           </div>
        </>) : (<h1 style={{textAlign:"center", marginTop:"15%", fontSize:"4rem"}}>No contact with id {id} exists</h1>)}
        </> 
      )
}

export default EditContact
