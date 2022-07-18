function Logo() {
    return (
        <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
        </div>
    );
}

function MobileIcone(props) {
    return (
        <div class={props.class}>
            <ion-icon name={props.name}></ion-icon>
        </div>
    );
}

function Navbar() {
    const icones = ["paper-plane", "compass", "heart", "person"];

    return (
        <div class="navbar">
            <div class="container">
                <Logo />

                <MobileIcone class="logo-mobile" name="logo-instagram" />

                <div class="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                    {icones.map(icon => <ion-icon name={`${icon}-outline`}></ion-icon>)}
                </div>

                <MobileIcone class="icones-mobile" name="paper-plane-outline" />

            </div>
        </div>
    );
}

export default Navbar;