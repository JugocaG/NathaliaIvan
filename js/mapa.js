let map;

async function initMap() {
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    var coord = { lat: 5.66125798892301, lng: -73.5103113636703 };

    map = new Map(document.getElementById("map"), {
        center: coord,
        zoom: 15,
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}

initMap();