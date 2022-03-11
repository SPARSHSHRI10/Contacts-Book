import React , {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import './AddContact.css'

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(state => state)
  //useSelector to access data from the Store
  //console.log(contacts)

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkMail = contacts.find(
      (contact) => contact.email === email)

    const checkNumber= contacts.find(
      (contact) => contact.number === parseInt(number))

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
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number
    }

    dispatch({ type: "Add_Contact" , payload:data });
    toast.success("Contact added successfully!")
    history.push('/')
  };

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
      <h1 style={{color:"black", fontSize:'3.5em' ,textAlign:"center", marginTop:40}}>Add Contact</h1>
      <div className="form">
          <form onSubmit={handleSubmit}>
              <div>
                  <input type="text" placeholder='Name' value={name} onChange={handleUserName} />
              </div>
              <br/>
              <div>
                  <input type="email" placeholder='Email' value={email} onChange={handleUserEmail} />
              </div>
              <br/>
              <div>
                  <input type="number" placeholder='Phone number' value={number} onChange={handleUserNumber} />
              </div>
              <br/>
              <input type="submit" className='btn btn-success' value="Add this contact"></input>
          </form>
      </div>
    </>
  )
}

export default AddContact
