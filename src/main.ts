/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    // =================== CINEMA ===================
    WA.room.onEnterLayer('zones/cinema1').subscribe(() => {
        const url = WA.state["cinema1"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema1Popup", "SHARJAH UNDERPASS", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema2').subscribe(() => {
        const url = WA.state["cinema2"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema2Popup", "HS2 - GROUND ENGINEERING KVJV", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema3').subscribe(() => {
        const url = WA.state["cinema3"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema3Popup", "VANDELLOS NPP", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema4').subscribe(() => {
        const url = WA.state["cinema4"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema4Popup", "MTHL", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema4').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema5').subscribe(() => {
        const url = WA.state["cinema5"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema5Popup", "LAGUNITAS", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema5').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema6').subscribe(() => {
        const url = WA.state["cinema6"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema6Popup", "SHANDONG WUCHENG MAJIAYING", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema7').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema7').subscribe(() => {
        const url = WA.state["cinema7"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema7Popup", "WORKCONNECT", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema7').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema8').subscribe(() => {
        const url = WA.state["cinema8"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema8Popup", "Tour CFC", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema8').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema9').subscribe(() => {
        const url = WA.state["cinema9"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema9Popup", "CROSS BAY LINK - MOVIE", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema9').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema10').subscribe(() => {
        const url = WA.state["cinema10"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema10Popup", "BARRANDOV BRIDGE", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema10').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema11').subscribe(() => {
        const url = WA.state["cinema11"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema11Popup", "WEBINAR1 – LEAN MANAGEMENT", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema11').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema12').subscribe(() => {
        const url = WA.state["cinema12"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema12Popup", "LINHDAM", [{label: 'Voir le film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema12').subscribe(closePopup)

    // =================== MARKET ===================
    WA.room.onEnterLayer('zones/market1').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market1Popup", "Pierre Auberger te parle", []);
    })
    WA.room.onLeaveLayer('zones/market1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market2').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market2Popup", "Les insights de DALS", []);
    })
    WA.room.onLeaveLayer('zones/market2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market3').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market3Popup", "Les bons plans Bouygues Immo pour acheter pas cher", []);
    })
    WA.room.onLeaveLayer('zones/market3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market4').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market4Popup", "Victoria, 24 ans, pilote de tunnelier sur le RER E", []);
    })
    WA.room.onLeaveLayer('zones/market4').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market5').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market5Popup", "La 5G et les vaccins Pfizer", []);
    })
    WA.room.onLeaveLayer('zones/market5').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market6').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market6Popup", "Les secrets de Koh Lanta", []);
    })
    WA.room.onLeaveLayer('zones/market6').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market7').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market7Popup", "Le coin de ceux qui cherchent des bons artisans pas cher en Ile de France pour refaire leur salle de bain", []);
    })
    WA.room.onLeaveLayer('zones/market7').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market8').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market8Popup", "Les dessous des pubs Bouygues Telecom", []);
    })
    WA.room.onLeaveLayer('zones/market8').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market9').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market9Popup", "Devenir community manager chez Colas", []);
    })
    WA.room.onLeaveLayer('zones/market9').subscribe(closePopup)

    // =================== TAVERN ===================
    WA.room.onEnterLayer('drinkZone').subscribe(() => {
        const url1 = "https://valdotr.github.io/vsl-map/Gingerbread_Latte.pdf"
        const url2 = "https://valdotr.github.io/vsl-map/Pumpkin_Spice_Latte"

        //@ts-ignore
        currentPopup = WA.ui.openPopup("drinkZonePopup", "Qu'est-ce que je vous sers ?", [
            {label: 'Gingerbread latte', className: 'primary', callback: () => openWebsite(url1)},
            {label: 'Pumpkin spice latte', className: 'primary', callback: () => openWebsite(url2)},
        ]);
    })
    WA.room.onLeaveLayer('drinkZone').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function openWebsite(url: string){
    WA.nav.openCoWebSite(url)
    closePopup()
}

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
