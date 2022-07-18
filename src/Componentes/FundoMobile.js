function FundoMobile() {
    const FundoMobileLista =    ["home",
                                "search-outline",
                                "add-circle-outline",
                                "heart-outline",
                                "person-outline"];
                                
    return (
        <div class="fundo-mobile">
            {FundoMobileLista.map(icone => <ion-icon name={icone}></ion-icon>)}
        </div>
    );
}

export default FundoMobile;