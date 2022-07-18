function Storie(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={`assets/img/${props.name}.svg`} />
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>
    );
}

function Stories() {

    const storiesList = ["9gag",
                        "meowed",
                        "barked",
                        "nathanwpylestrangeplanet",
                        "wawawicomics",
                        "respondeai",
                        "filomoderna",
                        "memeriagourmet"];

    return (
        <div class="stories">
            {storiesList.map(astorie => <Storie name={astorie} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

export default Stories;