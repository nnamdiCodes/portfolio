const Contact = ({
        handleChange, name, emailAddress, message, handleSubmit, errors, nameRef, emailAddressRef, messageRef
}) => {
    return (
        <form name="contact" data-netlify="true" className="form" onSubmit={handleSubmit}>
            
            <h1>Contact</h1>

            <p>
                I would love to hear about your project and how i could help. Please fill in the form, and i'll get back to you as soon as possible.
            </p>
            
            <input type="hidden" name="form-name" value="contact" />

            <div className="contactForm">

                <div>
                    <label htmlFor="name">Name *</label>
                    <input type="text" 
                        id='name' 
                        name='name' 
                        value={name} 
                        onChange={handleChange}
                        ref={nameRef}
                        className= {errors.name ? 'input-error' : 'input-normal'}
                    />
                    {errors.name && <p className='errMsg'>{errors.name}</p>}
                </div>
        
                <div>
                    <label htmlFor="emailAddress">Email Address *</label>
                    <input type="email" 
                        id='emailAddress' 
                        name='emailAddress' 
                        value={emailAddress} 
                        onChange={handleChange}
                        ref={emailAddressRef}
                        className= {errors.email ? 'input-error' : 'input-normal'}
                    />
                    {errors.email && <p className='errMsg'>{errors.email}</p>}
                </div>
        
                <div>
                    <label htmlFor="message">Message *</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        value={message}
                        onChange={handleChange}
                        ref={messageRef}
                        className= {errors.message ? 'input-error' : 'input-normal'}
                    />
                    {errors.message && <p className='errMsg'>{errors.message}</p>}
                </div>
        
                <button type='submit'>SEND MESSAGE</button>
            </div>
        </form>
      )
}

export default Contact