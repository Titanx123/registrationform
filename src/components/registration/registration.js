import "../registration/registration.css";
const Registration = ()=>{
    
    return (
        <>
        <div className="registration-container">
            <h1 style={{position: "relative",left:"50px"}}>Registration Form</h1>
            <form method="get" action="/success">
                <div className="registration-name-input-container">
                <label htmlFor="name" className="registration-name-input-label">Name:</label>
                <input type="text" id="name" className="registration-name-input-text" required={true}/>
                </div>
                <div className="registration-email-input-container">
                    <label htmlFor="email" className="registration-email-input-label">Email:</label>
                    <input type="email" id="email" className="registration-email-input-text" required={true}/>
                </div>
                <div className="registration-mobile-input-container">
                    <label htmlFor="mobile" className="registration-mobile-input-label">Mobile:</label>
                    <input type="text" id="mobile" className="registration-mobile-input-mobilenumber"/>
                </div>
                <div className="registration-country-input-container">
                    <label htmlFor="country" className="registration-country-input-label">Country:</label>
                    <input type="text" id="country" className="registration-country-input-text"/>
                </div>
                <div className="registration-city-input-container">
                    <label htmlFor="city" className="registration-city-input-label">City:</label>
                    <input type="text" id="city"  className="registration-city-input-text"/>
                </div>
                <div className="registration-state-input-container">
                    <label htmlFor="state" className="registration-state-input-label">State:</label>
                    <input type="text" id="state" className="registration-state-input-text"/>
                </div>
                <div className="registration-message-input-container">
                    <label htmlFor="message" className="registration-message-input-label">Message:</label>
                    <input type="text" id="message" className="registration-message-input-text" />
                </div>
            <button type="submit"  >Submit</button>
            </form>
        </div>
        </>
    )
}

export default Registration;