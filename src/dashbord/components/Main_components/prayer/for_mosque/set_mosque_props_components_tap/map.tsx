import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Edit, Search } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { set_mosque_active } from "@/features/prayer/prayer_slice";
import { toastFunctions } from "../../../quran/components/quran_recitation_components/mp3_compnents/ifFulfied";
interface responde {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  boundingbox: [string, string, string, string];
}
const defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface PlaceData {
  address: string;
  lat: number;
  lng: number;
  type:string
}

function FlyToLocation({ position }: { position: [number, number] | null }) {
  const map = useMap();

  if (position) {
    map.flyTo(position, 16, {
      duration: 1.5,
    });
  }

  return null;
}

function LocationMarker({ onSelect }: { onSelect: (data: PlaceData) => void }) {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);

      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
      );
      const data = await res.json();

      onSelect({ address: data.display_name || "", lat, lng ,type:data.type});
    },
  });

  return position ? <Marker position={position} icon={defaultIcon} /> : null;
}

export default function PlacePicker() {
  const [place, setPlace] = useState<PlaceData | null>(null);
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch()
  const data = useAppSelector(state=>state.prayer.All_done.done4)
  const [results, setResults] = useState<any[]>([]);
  const { t, i18n } = useTranslation();
  const searchPlace = async () => {
    if (!query) return;
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&accept-language=${i18n.dir()}`,
    );
    const data = await res.json();
    setResults(data);
  };

  const selectResult = (result: responde) => {
    const newPlace = {
      address: result.display_name,
      lat: parseFloat(result.lat),
      lng: parseFloat(result.lon),
      type: result.type,
    };
    setPlace(newPlace);
    setResults([]);
    setQuery(result.display_name);
  };
  return (
    <div>
      <Field className="mb-[10px]" dir="ltr">
        <FieldLabel className="p-2" dir={i18n.dir()}>{t(`dashboard.prayer_page.search.searchBtn`)}</FieldLabel>
        <ButtonGroup className="p-2">
          <Input
            type="text"
            dir={i18n.dir()}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(`dashboard.prayer_page.search.trySearch`)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchPlace();
              }
            }}
          />
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={searchPlace}>
            {t(`dashboard.prayer_page.search.searchBtn`)}
            <Search />
          </Button>
          <Button
            variant="outline"
            className="cursor-pointer w-1/3"
            disabled={ place?.type !== 'mosque'?place?.type !=='place_of_worship':true}
            onClick={()=>{
              dispatch(set_mosque_active({
                Lat:Number(place?.lat),
                Lon:Number(place?.lng),
                City:place?.address.split(",").splice(1)[0] as string,
                Country:place?.address.split(",").splice(1)[place?.address.split(",").splice(1).length-1] as string,
                Region:place?.address.split(",").splice(1)[place?.address.split(",").splice(1).length-3] as string,
                MosqueName:place?.address.split(",")[0] as string
              }))
              if(data){
                toastFunctions("done","success")
              }
              else if(data === false){
                toastFunctions("error","error")
              }
              else{
                toastFunctions("wait","loading")
              }
            }}>
              {t(`dashboard.prayer_page.search.setAsMosqueData`)}
            <Edit />
          </Button>
        </ButtonGroup>
        {results.length > 0 && (
          <div className="grid md:grid-cols-3 grid-cols-1">
            {results.map((e: responde, i) => {
              const display_name: string = e.display_name;

              return (
                <Card
                  key={i}
                  onClick={() => {
                    selectResult(e);
                    //setPlace(place?{...place,type:e.type}:place)
                  }}
                  className="cursor-pointer p-2 h-25 m-2"
                  dir={i18n.dir()}>
                  <CardTitle className="font-bold text-center">
                    {display_name.split(",")[0]}
                  </CardTitle>
                  <CardDescription>
                    {display_name
                      .split(",")
                      .slice(1, display_name.split(",").length - 1)}
                  </CardDescription>
                </Card>
              );
            })}
          </div>
        )}
      </Field>

      <MapContainer
        center={[36.75, 3.06]}
        zoom={6}
        className="w-full h-[400px] rounded-sm my-4 mx-1">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker onSelect={setPlace} />
        {place && (
          <>
            <Marker position={[place.lat, place.lng]} icon={defaultIcon} />
            <FlyToLocation position={[place.lat, place.lng]} />
          </>
        )}
      </MapContainer>

      {place && (
        <div className="mt-[10px] flex items-center justify-between p-2">
          <p>The address: {place.address}</p>
          <p>
            Lat: {place.lat}, Lng: {place.lng}
          </p>
        </div>
      )}
    </div>
  );
}
