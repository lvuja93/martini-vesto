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
            lat: 42.99621,
            lng: 21.94785,
            name: "Leskovac",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@martini-vesto.com",
            phone: "+381 11 1234567",
            address: "Bulevar Oslobodjenja bb",
            link:"https://www.google.com/maps/place/Martini+Vesto/@42.9962159,21.9476779,45m/data=!3m1!1e3!4m12!1m5!3m4!2zNDLCsDU5JzQ2LjQiTiAyMcKwNTYnNTIuMyJF!8m2!3d42.99621!4d21.94785!3m5!1s0x47559d4d4e3cab1b:0x85fbee6ced2740f9!8m2!3d42.9961974!4d21.9478111!16s%2Fg%2F119vl420k?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
        },
        {
            id: 2,
            lat: 43.3209,
            lng: 21.8958,
            name: "Niš",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@nis.rs",
            phone: "+381 18 7654321",
            address: "Niš City Center",
        },
        {
            id: 3,
            lat: 45.2671,
            lng: 19.8335,
            name: "Novi Sad",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@novisad.rs",
            phone: "+381 21 9876543",
            address: "Novi Sad City Center",
        },
        {
            id: 4,
            lat: 44.0128,
            lng: 20.9114,
            name: "Kragujevac",
            image: "https://via.placeholder.com/150", // Replace with actual image URL
            email: "info@kragujevac.rs",
            phone: "+381 34 5432109",
            address: "Kragujevac City Center",
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
            <div className="w-full md:w-1/4 mt-16 md:mt-28 bg-gray-100 overflow-y-auto text-gray-700">
                <ul className="p-4">
                    {locations.map((location) => (
                        <li
                            key={location.id}
                            className={`flex items-center p-4 mb-4 cursor-pointer rounded border ${
                                selectedLocation.id === location.id
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
                                <h2 className="text-lg md:text-xl font-semibold">
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
