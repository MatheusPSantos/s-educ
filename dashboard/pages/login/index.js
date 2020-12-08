import {LoginBox} from './styles.js'

function Login () {
    return <LoginBox>
        <label>email:</label>
        <input type="email" placeholder="email@email.com"/>
        <label>password</label>
        <input type="password" placeholder="password"/>
        <button>Entrar</button>
    </LoginBox>
}

export default Login;
