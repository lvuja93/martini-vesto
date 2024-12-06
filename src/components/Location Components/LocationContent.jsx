import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import L from "leaflet";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";

const Map = () => {
    const locations = [
        {
            id: 1,
            lat: 44.817418161486465,
            lng: 20.457742854468687,
            name: "Beograd - Knez Mihailova",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "064 863 42 13",
            address: "Knez Mihailova 26",
            link: "https://www.google.com/maps/place/Kneza+Mihaila+26,+Beograd+11000/@44.8171058,20.4571908,157m/data=!3m1!1e3!4m6!3m5!1s0x475a7ab320abad0d:0xb844719f32e6f411!8m2!3d44.8172812!4d20.4577214!16s%2Fg%2F11hz60_nzc?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id: 2,
            lat: 44.81209917255821,
            lng: 20.46296786796175,
            name: "Beograd - Trg Nikole Pašića",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "064 863 42 21",
            address: "Trg Nikole Pašića 8",
            link: "https://www.google.com/maps/place/Martini+Vesto/@44.8120345,20.4604037,691m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475a7aafb2fa7a43:0xb61b30ca5b430557!8m2!3d44.8120307!4d20.4629786!16s%2Fg%2F11g9r2smb3?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            id: 3,
            lat: 44.788414950501846,
            lng: 20.502592787716626,
            name: "Beograd - BEO Shopping",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "064 863 42 20",
            address: "Vojislava Ilića 141 (I sprat)",
            link: "https://www.google.com/maps/place/Martini+Vesto/@44.7863142,20.50264,472m/data=!3m1!1e3!4m10!1m2!2m1!1smartini+vesto!3m6!1s0x475a710610da386b:0x40217c51d3b5f35f!8m2!3d44.7865468!4d20.5021813!15sCg1tYXJ0aW5pIHZlc3RvkgEOY2xvdGhpbmdfc3RvcmXgAQA!16s%2Fg%2F11jdwf4s_7?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            id: 4,
            lat: 44.805589686279504,
            lng: 20.40556430407467,
            name: "Novi Beograd - Delta City",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "064 863 81 59",
            address: "Jurija Gagarina 16 (Lokal 240)",
            link: "https://www.google.com/maps/place/Delta+City/@44.8052384,20.4045424,155m/data=!3m1!1e3!4m6!3m5!1s0x475a6f8ffefc5f23:0xe336943db1696421!8m2!3d44.8054783!4d20.4054819!16zL20vMGN4N2hs?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            id: 5,
            lat: 44.00913338487502,
            lng: 20.895925882852374,
            name: "Kragujevac - BIG Fashion",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "064 863 42 17",
            address: "Bulevar Kraljice Marije 56",
            link: "https://www.google.com/maps/place/BIG+FASHION+Kragujevac/@44.0071608,20.8856766,15.45z/data=!3m1!5s0x47572116a34d12b7:0x233f88090b2b4e29!4m6!3m5!1s0x47572116a14eb717:0x136ece3602edabcb!8m2!3d44.0088547!4d20.8959696!16s%2Fg%2F1hg4x5df3?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id: 6,
            lat: 45.24578429586706,
            lng: 19.84350318750635,
            name: "Novi Sad - Promenada",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "064 863 42 36",
            address: "Bulevar Oslobodjenja 119",
            link: "https://www.google.com/maps/place/Martini+Vesto+TC+Promenada/@45.2458401,19.8435699,20.17z/data=!4m14!1m7!3m6!1s0x475b1013f2cdc15d:0x69b33ac7b454cc84!2sPromenada!8m2!3d45.2452513!4d19.8430413!16s%2Fg%2F11fhkvb2bd!3m5!1s0x475b11fa95fc4115:0xb4538355118094ed!8m2!3d45.2457706!4d19.8434466!16s%2Fg%2F11krrdpsdn?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            id: 7,
            lat: 43.318634196109464,
            lng: 21.894469948358598,
            name: "Niš - TC Kalča",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "064 863 42 09",
            address: "Obrenovićeva bb (Lokal 91)",
            link: "https://www.google.com/maps/place/MartiniVesto/@43.3184331,21.8967812,14.77z/data=!4m10!1m2!2m1!1smartini+vesto+kalca!3m6!1s0x4755b0b3d3fa3707:0xb586fb8a53084a3d!8m2!3d43.3179136!4d21.8939181!15sChNtYXJ0aW5pIHZlc3RvIGthbGNhkgETbWVuc19jbG90aGluZ19zdG9yZeABAA!16s%2Fg%2F11hcdwm06z?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            id: 8,
            lat: 43.319435947633856,
            lng: 21.896007250411866,
            name: "Niš - Pobedina",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "064 863 42 11",
            address: "Obrenovićeva 21",
        },
        {
            id: 9,
            lat: 42.99621,
            lng: 21.94785,
            name: "Leskovac",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "064 863 42 08",
            address: "Bulevar Oslobodjenja bb",
            link: "https://www.google.com/maps/place/Martini+Vesto/@42.9962159,21.9476779,45m/data=!3m1!1e3!4m12!1m5!3m4!2zNDLCsDU5JzQ2LjQiTiAyMcKwNTYnNTIuMyJF!8m2!3d42.99621!4d21.94785!3m5!1s0x47559d4d4e3cab1b:0x85fbee6ced2740f9!8m2!3d42.9961974!4d21.9478111!16s%2Fg%2F119vl420k?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
        },
        {
            id: 10,
            lat: 42.99607234426561,
            lng: 21.942987079142004,
            name: "Leskovac",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "064 863 44 41",
            address: "Južnomoravskih brigada 51",
            link: "https://www.google.com/maps/search/martini+vesto+kalca/@43.000329,21.9498994,16z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            id: 11,
            lat: 43.722071162480795,
            lng: 20.69037199309789,
            name: "Kraljevo",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "064 863 42 15",
            address: "Miloša Velikog 56",
            link: "https://www.google.com/maps/search/martini+vesto+kalca/@43.000329,21.9498994,16z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3Dhttps://www.google.com/maps/place/Martini+vesto/@43.7220219,20.6900894,44m/data=!3m1!1e3!4m14!1m7!3m6!1s0x475700fbcc41cdf3:0xe3b2db5b7d1bd889!2sMiloša+Velikog+56,+Kraljevo+36000!3b1!8m2!3d43.7219411!4d20.6905073!3m5!1s0x475701e7382e1087:0x9ec08f33e791f49c!8m2!3d43.7220201!4d20.6903075!16s%2Fg%2F11rckylyh3?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D",

        },
        {
            id: 12,
            lat: 43.975789136251784,
            lng: 21.26384798587931,
            name: "Jagodina",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "064 863 42 26",
            address: "Kneginje Milice 75",
        },
        {
            id: 13,
            lat: 43.858428983559655,
            lng: 21.411133037797445,
            name: "Paraćin",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "064 863 42 28",
            address: "Vožda Karadjordja 12",
            link: "https://www.google.com/maps/place/Vožda+Karađorđa+12,+Paraćin+35250/@43.8584205,21.4113806,3a,75y,275.2h,88.82t/data=!3m7!1e1!3m5!1sWjmtsU_BU-sP22ykq4zewA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D1.1795660021613372%26panoid%3DWjmtsU_BU-sP22ykq4zewA%26yaw%3D275.19965375841593!7i13312!8i6656!4m15!1m8!3m7!1s0x4756be017e98b17b:0x58d154272a5cdaf7!2zVm_FvmRhIEthcmHEkW9yxJFhIDEyLCBQYXJhxIdpbiAzNTI1MA!3b1!8m2!3d43.8584017!4d21.4111364!16s%2Fg%2F11jg1dptr3!3m5!1s0x4756be017e98b17b:0x58d154272a5cdaf7!8m2!3d43.8584017!4d21.4111364!16s%2Fg%2F11jg1dptr3?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id: 14,
            lat: 42.55186892473096,
            lng: 21.898915183198888,
            name: "Vranje",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "064 863 42 15",
            address: "Kralja Stefana Prvovenčanog 181",
        },
        {
            id: 15,
            lat: 43.855614183781334,
            lng: 19.843394822154615,
            name: "Užice",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "031 525 866",
            address: "Dimitrija Tucovica 50",
            link: "https://www.google.com/maps/place/Martini+Vesto/@43.8556766,19.8433846,61m/data=!3m1!1e3!4m15!1m8!3m7!1s0x4759d34f119a55b3:0xc61bcd84ef8bd25e!2sDimitrija+Tucovića+50,+Užice!3b1!8m2!3d43.8554193!4d19.8432625!16s%2Fg%2F11vlctp5g9!3m5!1s0x4759d348cca22947:0x50b9f4bab63d41c5!8m2!3d43.855602!4d19.8433635!16s%2Fg%2F1pp2txwyd?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            id: 16,
            lat: 43.89073559977267,
            lng: 20.35181281514717,
            name: "Čačak",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "032 334 990",
            address: "Kuželjeva 19",
        },
        {
            id: 17,
            lat: 44.27112201965469,
            lng: 19.887818217342833,
            name: "Valjevo",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "",
            address: "Karadjordjeva 87a",
        },
    ];

    const [selectedLocation, setSelectedLocation] = useState(locations[0]);

    const RecenterMap = ({ lat, lng }) => {
        const map = useMap();
        map.setView([lat, lng], 14);
        return null;
    };

    const customIcon = new L.Icon({
        iconUrl: markerIconUrl,
        shadowUrl: markerShadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-300">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 mt-28 md:mt-28 bg-gray-100 overflow-y-auto text-gray-700">
                <ul className="p-4">
                    {locations.map((location) => (
                        <li
                            key={location.id}
                            className={`flex items-center p-4 mb-4 cursor-pointer rounded border ${selectedLocation.id === location.id
                                ? "bg-[#f5821f] text-white"
                                : "bg-white hover:bg-gray-300"
                                }`}
                            onClick={() => setSelectedLocation(location)}
                        >
                            {/* Image on the Left */}
                            <button
                                onClick={() => window.open(location.link)}
                                className="mt-2 flex items-center text-sm text-blue-500 hover:underline"
                            >
                                <LiaMapMarkedAltSolid className="ml-4 w-12 h-12 hover:scale-125 ease-in-out transition-all duration-150"></LiaMapMarkedAltSolid>
                            </button>
                            {/* Text Content */}
                            <div className="flex-1">
                                {/* Name */}
                                <h2 className="text-lg md:text-l font-semibold">
                                    {location.name}
                                </h2>
                                {/* Address */}
                                <p className="text-sm">
                                    <strong>Adresa:</strong> {location.address}
                                </p>
                                {/* Email */}
                                <p className="text-sm">
                                    <strong>E-mail:</strong>{" "}
                                    <a
                                        href={`mailto:${location.email}`}
                                        className="text-blue-500"
                                    >
                                        {location.email}
                                    </a>
                                </p>
                                {/* Phone */}
                                <p className="text-sm">
                                    <strong>Telefon:</strong>{" "}
                                    <a
                                        href={`tel:${location.phone}`}
                                        className="text-blue-500"
                                    >
                                        {location.phone}
                                    </a>
                                </p>
                                {/* Button to Open in Maps */}

                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Map */}
            <div className="w-full md:w-3/4 h-[50vh] md:h-full overflow-y-auto pt-16 md:pt-28 z-0 hidden md:block">
                <MapContainer
                    center={[selectedLocation.lat, selectedLocation.lng]}
                    zoom={7}
                    className="h-full w-full"
                >
                    <RecenterMap
                        lat={selectedLocation.lat}
                        lng={selectedLocation.lng}
                    />
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {locations.map((location) => (
                        <Marker
                            key={location.id}
                            position={[location.lat, location.lng]}
                            icon={customIcon}
                        >
                            <Popup>{location.name}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default Map;
