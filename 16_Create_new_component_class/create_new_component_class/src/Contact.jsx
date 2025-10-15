import './Contact.css'

const Contact = () => (
    <div className="contact-container">
        <form>
            <div className="txtbox">
                <label htmlFor="name">Your name: </label>
                <input type="text" id='name' placeholder="your name: ..."></input>
            </div>
            <div className="txtbox">
                <label htmlFor="email">Your email: </label>
                <input type="text" id='email' placeholder="your email: ..."></input>
            </div>
            <div className="txtbox">
                <label htmlFor="message">Your message: </label>
            </div>
            <div className="txtbox">
                <textarea id='message'  placeholder="your Message: ..." row={10} cols={50}></textarea >
            </div>
            <div className="txtbox">
                <button className="btn">send</button>
                <button className="btn">clear</button>
            </div>
        </form>
    </div>
)

export default Contact;