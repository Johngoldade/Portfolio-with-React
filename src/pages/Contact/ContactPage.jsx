import { useState, useEffect } from "react"

function validEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  } 

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    const [infoMessage, setInfoMessage] = useState('')

    useEffect(() => {
        
       }, [])

    const handleInput = (event) => {
        const { target } = event
        const input = target.name
        const value = target.value


        if (input === 'nameInput') {
            setName(value)   
        } else if (input === 'emailInput') {
            setEmail(value)
        } else {
            setMessage(value)  
        }

        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (name && validEmail(email) && message) {
            setName('')
            setEmail('')
            setMessage('')
            setInfoMessage('Request successfully sent!')
            setTimeout(() => setInfoMessage(''), 3000)
        } else {
            if (name === '') {
                setError(true)
                setInfoMessage('Name is required!')
            } else if (!validEmail(email)) {
                setError(true)
                setInfoMessage('Email is required!')
            } else if (message === '') {
                setError(true)
                setInfoMessage('Message is required!')
            } 
        }
    }


    return (
        <div className="form-div p-5">
            <h2 className="fs-1 p-5 header-h2">Contact Me</h2>
            <p className="fs-5">Fill out the form below to contact me!</p>
            <form className="p-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Enter Your Full Name</label>
                    <input
                        value={name}
                        name="nameInput"
                        onChange={handleInput}
                        type="text"
                        placeholder="John Doe"
                        className="form-control"
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Enter Your Email</label>
                    <input
                        value={email}
                        name="emailInput"
                        onChange={handleInput}
                        type="email"
                        placeholder="johndoe@email.com"
                        className="form-control"
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="msgInput" className="form-label">Enter Your Message</label>
                    <textarea value={message} className="form-control" name="msgInput" onChange={handleInput} type="text" placeholder="Type your message here..." autoCorrect="on" rows={4}/>
                </div>
                <div>
                    <p className="error-text">{infoMessage}</p>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

        
    )
}