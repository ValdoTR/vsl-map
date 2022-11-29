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
        currentPopup = WA.ui.openPopup("cinema1Popup", "Colne Valley Viaduct HS2, UK", [{label: 'Watch the film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema2').subscribe(() => {
        const url = WA.state["cinema2"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema2Popup", "Stay-cable A40 bridge, Germany", [{label: 'Watch the film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema3').subscribe(() => {
        const url = WA.state["cinema3"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema3Popup", "VSL Systems Manufacturer, Spain", [{label: 'Watch the film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema4').subscribe(() => {
        const url = WA.state["cinema4"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema4Popup", "Mombasa Bridge, Kenya", [{label: 'Watch the film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema4').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema5').subscribe(() => {
        const url = WA.state["cinema5"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema5Popup", "Gecama wind farm, Spain", [{label: 'Watch the film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema5').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema6').subscribe(() => {
        const url = WA.state["cinema6"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema6Popup", "Yau Ma Tei Bridge, HK", [{label: 'Watch the film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema7').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema7').subscribe(() => {
        const url = WA.state["cinema7"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema7Popup", "Cross Bay Link Bridge, HK", [{label: 'Watch the film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema7').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema8').subscribe(() => {
        const url = WA.state["cinema8"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema8Popup", "High Speed Railway 3-4, Thailand", [{label: 'Watch the film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema8').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema9').subscribe(() => {
        const url = WA.state["cinema9"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema9Popup", "D2 & D3 buildings, Vietnam", [{label: 'Watch the film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema9').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema10').subscribe(() => {
        const url = WA.state["cinema10"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema10Popup", "QuickConnect App", [{label: 'Watch the film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema10').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema11').subscribe(() => {
        const url = WA.state["cinema11"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema11Popup", "Webinar - What is Be More?", [{label: 'Watch the film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema11').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema12').subscribe(() => {
        const url = WA.state["cinema12"] as string;
        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema12Popup", "KVJV & CVV HS2, UK", [{label: 'Watch the film', className: 'primary', callback: () => openWebsite(url)}]);
    })
    WA.room.onLeaveLayer('zones/cinema12').subscribe(closePopup)

    // =================== MARKET ===================
    WA.room.onEnterLayer('zones/market1').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market1Popup", "Sharjah underpass, UAE", []);
    })
    WA.room.onLeaveLayer('zones/market1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market2').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market2Popup", "VSL factory, Spain", []);
    })
    WA.room.onLeaveLayer('zones/market2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market3').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market3Popup", "MTHL bridge, India", []);
    })
    WA.room.onLeaveLayer('zones/market3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market4').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market4Popup", "Cross Bay Link bridge, HK", []);
    })
    WA.room.onLeaveLayer('zones/market4').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market5').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market5Popup", "Mombasa bridge, Kenya", []);
    })
    WA.room.onLeaveLayer('zones/market5').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market6').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market6Popup", "Yau Ma Tei bridge, HK", []);
    })
    WA.room.onLeaveLayer('zones/market6').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market7').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market7Popup", "QuickConnect App", []);
    })
    WA.room.onLeaveLayer('zones/market7').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market8').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market8Popup", "Wucheng Majiaying wind farm, China", []);
    })
    WA.room.onLeaveLayer('zones/market8').subscribe(closePopup)

    WA.room.onEnterLayer('zones/market9').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("market9Popup", "D2 & D3 buildings, Vietnam", []);
    })
    WA.room.onLeaveLayer('zones/market9').subscribe(closePopup)

    // =================== TAVERN ===================
    WA.room.onEnterLayer('drinkZone').subscribe(() => {
        const url1 = "https://valdotr.github.io/vsl-map/Gingerbread_Latte.pdf"
        const url2 = "https://valdotr.github.io/vsl-map/Pumpkin_Spice_Latte.pdf"

        //@ts-ignore
        currentPopup = WA.ui.openPopup("drinkZonePopup", "Hello there, We have two trendy drinks at the moment:", [
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
