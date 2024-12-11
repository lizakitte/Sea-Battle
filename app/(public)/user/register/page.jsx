import "../../../styles/formStyle.css";

function Register() {
    return ( 
        <div className="form-div">
            <h2>Register</h2>
            <form action="/action_page.php">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email.."/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Your password.."/>
            
                <input type="submit" value="Register"/>
            </form>
        </div>
     );
}

export default Register;