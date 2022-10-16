import './Login.css';

export function Login() {
    return(
        <section className='flex'>
            <div className='container'>
                <h1 className='log'>Iniciar Sesión</h1>
                <input class="emailpass" type="text" placeholder="Enter E-mail"/>
                <br/>
                <br/>
                <input class="emailpass" type="password" placeholder="•••••••••••"/>
                <br/>
                <a class="recu" href="$">Recuperar contraseña?</a>
                <br/>
                <a class="btn" href="$">Sign in</a>
                <p class="si">Si no tienes una cuenta</p>
                <a class="regis" href="$">Registrate aqui</a>
            </div>
            <div className='guy'></div>
            <div class="rectangle"></div>
            <div class="circle_one"></div>
            <div class="circle_two"></div>
            <div class="circle_three"></div>
            <div class="circle_four"></div>
        </section>
    );
}