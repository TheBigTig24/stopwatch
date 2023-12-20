import '../styles/Login.css';

export default function Login() {

    return (
        <>
        <div className="bg-image">
            <div className="container">
                <h1 className="container-title">Sign In</h1>
                <div className="inputs">
                    <form>
                        <input className="input-field" placeholder='Email Address'></input><br/><br/>
                        <input className="input-field" placeholder='Password'></input><br/><br/>
                        <button className="submit" type="submit">Login</button>
                    </form>
                    <p>or</p>
                    <button className="createAcc">Create New Account</button>
                    
                </div>
                
            </div>
         </div>
        </>
    );
}