const Contact = () => (
    <div className="contact-container">
        <form>
            <div className="txtbox">
                <input type="text" placeholder="your name: ..."></input>
            </div>
            <div className="txtbox">
                <input type="text" placeholder="your email: ..."></input>
            </div>
            <div className="txtbox">
                <input type="text" placeholder="your Message: ..."></input>
            </div>
            <div className="txtbox">
                <button className="btn">send</button>
            </div>
        </form>
    </div>
)

export default Contact;