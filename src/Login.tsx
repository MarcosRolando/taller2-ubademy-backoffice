import Logo from "./Logo";
import "./Login.css";

export default function Login() {
    return (
        <div className="Login">
            <Logo />
            <form>
                <div className="EmailLogin">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" /></div>
                <div className="PasswordLogin">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" /></div>
            </form>
        </div>
    );
}
