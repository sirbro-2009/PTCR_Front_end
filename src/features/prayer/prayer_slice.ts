import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverHost } from "@/other/data";
import { toastFunctions } from "@/dashbord/components/Main_components/quran/components/quran_recitation_components/mp3_compnents/ifFulfied";
const theToken = localStorage.getItem("token");
export const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${theToken}`,
};
interface MosqueIcama {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

interface PrayerMethod {
  method: string;
  tune: string[];
  school: string;
  is_12: boolean;
  City: string;
  Country: string;
  MosqueName: string;
  MosqueImg: string;
  Lat: number;
  Lon: number;
  Region: string;
  MosqueId: number;
  MosqueIcama: MosqueIcama;
}

export interface IntitalStateObject {
  latitude: number | null;
  longitude: number | null;
  temperature: number | null;
  weathercode: number | null;
  is_day: number | null;
  full_location_data: {
    regionName?: string;
    cityName?: string;
    countryName?: string;
  };
  mosqueProps?: {
    MosqueName: string;
    MosqueImg?: string;
    MosqueId: number;
    MosqueIcama?: {
      Fajr: string;
      Dhuhr: string;
      Asr: string;
      Maghrib: string;
      Isha: string;
    };
  };
  hijrid_date: string | null;
  prayers: {
    title: string;
    time: string;
    icama?: string;
    isCurrent: boolean;
  }[];
  sunrise_midnight: {
    title: string;
    time: string;
  }[];
  prayer_prefrence_data: {
    school: string;
    tune: string[];
    method: string;
    is_12: boolean;
  };
  All_done: {
    done1: null | boolean;
    done2: null | boolean;
    done3: null | boolean;
    done4: null | boolean;
  };
}

const initialState: IntitalStateObject = {
  latitude: null,
  longitude: null,
  temperature: null,
  hijrid_date: null,

  weathercode: null,
  is_day: null,
  full_location_data: {},
  prayers: [],
  sunrise_midnight: [],
  prayer_prefrence_data: {
    school: "0",
    tune: ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    method: "3",
    is_12: false,
  },
  All_done: {
    done1: null,
    done2: null,
    done3: null,
    done4: null,
  },
};
export const hijriMonths = [
  "Muharram",
  "Safar",
  "Rabi' al-Awwal",
  "Rabi' al-Thani",
  "Jumada al-Ula",
  "Jumada al-Akhira",
  "Rajab",
  "Sha'ban",
  "Ramadan",
  "Shawwal",
  "Dhu al-Qi'dah",
  "Dhu al-Hijjah",
];

// Islamic prayer names
export const prayers_names = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

export const titles = ["Sunrise", "Midnight"];

export const getCityData = createAsyncThunk(
  "prayer/city_data",
  async (lng: string) => {
    let object: {
      latitude: number;
      longitude: number;
      countryName: string;
      regionName: string;
      cityName: string;
      is_day: number;
      weathercode: number;
      temperature: number;
    };
    try {
      const result = await navigator.permissions.query({ name: "geolocation" });

      if (result.state === "granted" || result.state === "prompt") {
        return await new Promise<{
          latitude: number;
          longitude: number;
          countryName: string;
          regionName: string;
          cityName: string;
          is_day: number;
          weathercode: number;
          temperature: number;
        }>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            async (pos) => {
              try {
                const { latitude, longitude } = pos.coords;
                const request = await fetch(
                  `https://us1.locationiq.com/v1/reverse.php?key=pk.c1726c6a2a12b42ad99a440efb52627d&lat=${latitude}&lon=${longitude}&format=json&accept-language=${lng}`,
                );
                const { country, city, state, town } = (await request.json())
                  .address;
                const request3 = await fetch(
                  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`,
                );
                const { is_day, weathercode, temperature } = (
                  await request3.json()
                ).current_weather;
                object = {
                  latitude,
                  longitude,
                  countryName: country,
                  regionName: state,
                  cityName: city ?? town,
                  is_day,
                  weathercode,
                  temperature,
                };
                resolve(object);
                return object;
              } catch (err) {
                console.log(err);
              }
            },
            (err) => reject(err),
          );
        });
      } else {
        const request = await fetch(`https://free.freeipapi.com/api/json`);
        const { latitude, longitude } = await request.json();
        const request2 = await fetch(
          `https://us1.locationiq.com/v1/reverse.php?key=pk.c1726c6a2a12b42ad99a440efb52627d&lat=${latitude}&lon=${longitude}&format=json&accept-language=${lng}`,
        );
        const { country, city, state, town } = (await request2.json()).address;
        const request3 = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`,
        );
        const { is_day, weathercode, temperature } = (await request3.json())
          .current_weather;
        object = {
          latitude,
          longitude,
          countryName: country,
          regionName: state,
          cityName: city ?? town,
          is_day,
          weathercode,
          temperature,
        };
        return object;
      }
    } catch (e) {
      console.log(e);
    }
  },
);
export const get_user_prayer_prefrence_data = createAsyncThunk(
  "prayer/get_props",
  async () => {
    const request = await fetch(`${serverHost}prayer/get_props`, {
      method: "GET",
      headers,
    });
    return await request.json();
  },
);
export const getWeather_Data = createAsyncThunk(
  "prayer/weather",
  async ({ latitude, longitude }: { latitude: number; longitude: number }) => {
    const request = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`,
    );
    return await request.json();
  },
);
export const getPrayers_and_date_data = createAsyncThunk(
  "prayer/gPD",
  async ({ latitude, longitude }: { latitude: number; longitude: number }) => {
    const request = await fetch(
      serverHost +
        `prayer/prayer_time?latitude=${latitude}&longitude=${longitude}`,
      {
        method: "GET",
        headers,
      },
    );

    return await request.json();
  },
);
export const set_user_prayer_prefrence_data = createAsyncThunk(
  "prayer/add_props",
  async (object: {
    method: string;
    school: string;
    tune: string[];
    is_12: boolean;
  }) => {
    const request = await fetch(serverHost + `prayer/add_props`, {
      method: "POST",
      headers,
      body: JSON.stringify(object),
    });
    return await request.json();
  },
);
export const getMosque_data = createAsyncThunk(
  "prayer/get_Mosque_data",
  async () => {
    const request = await fetch(serverHost + `mosque/get_mosque_data`, {
      method: "GET",
      headers,
    });
    const res = await request.json();
    return res;
  },
);
////////////////////////
export const set_mosque_active = createAsyncThunk(
  "prayer/active_mosque",
  async (object: {
    Lat: number;
    Lon: number;
    MosqueName: string;
    Country: string;
    City: string;
    Region: string;
  }) => {
    const request = await fetch(serverHost + `mosque/set_active`, {
      method: "POST",
      headers,
      body: JSON.stringify(object),
    });
    return await request.json();
  },
);
export const set_icama = createAsyncThunk(
  "mosque/set_icama",
  async (object: {
    Fajr: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
  }) => {
    const request = await fetch(serverHost + `mosque/edit_icama_durations`, {
      method: "POST",
      headers,
      body: JSON.stringify(object),
    });

    return await request.json();
  },
);
export const set_bg = createAsyncThunk(
  "mosque/set_Bg",
  async (object: { type: string; link: string }) => {
    const request = await fetch(serverHost + `mosque/set_bg`, {
      method: "POST",
      headers,
      body: JSON.stringify(object),
    });

    return await request.json();
  },
);
export const set_bg_file = createAsyncThunk(
  "mosque/set_Bg_file",
  async (payload: FormData ) => {
    const request = await fetch(serverHost + `mosque/set_bg_img`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${theToken}`,
      },
      body: payload,
    });
    return await request.json();
  },
);
export const prayer_slice = createSlice({
  name: "prayer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCityData.fulfilled, (state, action) => {
      try {
        const {
          latitude,
          longitude,
          countryName,
          regionName,
          cityName,
          is_day,
          weathercode,
          temperature,
        } = action.payload as {
          latitude: number;
          longitude: number;
          countryName: string;
          regionName: string;
          cityName: string;
          is_day: number;
          weathercode: number;
          temperature: number;
        };
        state.latitude = latitude;
        state.longitude = longitude;
        state.full_location_data = { countryName, regionName, cityName };
        state.is_day = is_day;
        state.weathercode = weathercode;
        state.temperature = temperature;
        state.All_done.done1 = true;
      } catch {
        state.All_done.done1 = true;
      }
    });
    builder.addCase(getCityData.rejected, (state) => {
      state.All_done.done1 = false;
    });
    /////////////
    builder.addCase(getPrayers_and_date_data.fulfilled, (state, action) => {
      try {
        const { hijrid_date, sunrise_midnight, prayers } = action.payload as {
          prayers: string[];
          sunrise_midnight: string[];
          hijrid_date: string;
        };
        state.prayers = prayers.map((e, i) => {
          return returnPrayerTime(e, i, prayers);
        });
        state.sunrise_midnight = sunrise_midnight.map((e, i) => {
          return { title: titles[i] || "", time: e };
        });
        let hijrid_date_splited = hijrid_date.split("-");
        state.hijrid_date =
          hijrid_date.split(`-`)[0]?.length === 0
            ? hijrid_date_splited[0] +
              "-" +
              hijriMonths[Number(hijrid_date_splited[0])] +
              "-" +
              hijrid_date_splited[3]
            : hijrid_date;
        state.All_done.done2 = true;
      } catch {
        state.All_done.done2 = false;
      }
    });
    builder.addCase(getPrayers_and_date_data.rejected, (state, action) => {
      state.All_done.done2 = false;
    });
    //////////////////////////////////
    builder.addCase(
      get_user_prayer_prefrence_data.fulfilled,
      (state, action) => {
        try {
          const { is_12, school, tune, method } = action.payload;
          const all_Props = [method, school, tune, is_12];
          const props_name: string[] = ["method", "school", "tune", "is_12"];
          all_Props.forEach((e, i) => {
            if (e !== undefined && props_name[i]) {
              (state.prayer_prefrence_data as any)[
                props_name[i] as keyof typeof state.prayer_prefrence_data
              ] = e;
            }
          });
          state.All_done.done3 = true;
        } catch (e) {
          console.log(e);
          state.All_done.done3 = false;
        }
      },
    );
    builder.addCase(
      get_user_prayer_prefrence_data.rejected,
      (state, action) => {
        state.All_done.done3 = false;
      },
    );
    builder.addCase(
      set_user_prayer_prefrence_data.fulfilled,
      (state, action) => {
        try {
          const { is_12, school, tune, method } = action.payload;
          const all_Props = [method, school, tune, is_12];

          const props_name: string[] = ["method", "school", "tune", "is_12"];
          all_Props.forEach((e, i) => {
            if (e !== undefined && props_name[i]) {
              (state.prayer_prefrence_data as any)[
                props_name[i] as keyof typeof state.prayer_prefrence_data
              ] = e;
            }
          });
          toastFunctions("✅","success")
        } catch (e) {
          console.log(e);
          toastFunctions("error","error")
        }
      },
    );
    builder.addCase(
      set_user_prayer_prefrence_data.rejected,
      (state, action) => {
        //state.All_done.done3 = false;
      },
    );
    //////////////////////////
    builder.addCase(set_mosque_active.fulfilled, (state, action) => {
      const { Lon, Lat, MosqueName, Country, City, Region, MosqueId } =
        action.payload as {
          Lat: number;
          Lon: number;
          MosqueName: string;
          Region: string;
          Country: string;
          City: string;
          MosqueId: number;
        };
      state.latitude = Lat;
      state.longitude = Lon;
      state.mosqueProps = { MosqueName, MosqueId };
      state.full_location_data = {
        countryName: Country,
        regionName: Region,
        cityName: City,
      };
      state.All_done.done4 = true;
    });
    builder.addCase(set_mosque_active.rejected, (state, action) => {
      state.All_done.done4 = false;
      toastFunctions("error", "error");
    });
    ///////
    builder.addCase(getMosque_data.fulfilled, (state, action) => {
      const {
        method,
        tune,
        school,
        is_12,
        City,
        Country,
        MosqueName,
        MosqueImg,
        Lat,
        Lon,
        Region,
        MosqueId,
        MosqueIcama,
      } = action.payload as PrayerMethod;
      if (Lat === undefined) {
        state.All_done.done4 = false;
        return;
      }
      state.mosqueProps = { MosqueId, MosqueImg, MosqueName, MosqueIcama };
      state.latitude = Lat;
      state.longitude = Lon;
      state.full_location_data = {
        cityName: City,
        regionName: Region,
        countryName: Country,
      };
      state.prayer_prefrence_data = { is_12, school, tune, method };
      state.All_done.done4 = true;
    });
    builder.addCase(getMosque_data.rejected, (state, action) => {
      state.All_done.done4 = false;
    });
    /////////////////////////////////////////////
    builder.addCase(getWeather_Data.fulfilled, (state, action) => {
      const { is_day, weathercode, temperature } = action.payload
        .current_weather as {
        is_day: number;
        weathercode: number;
        temperature: number;
      };
      state.is_day = is_day;
      state.weathercode = weathercode;
      state.temperature = temperature;
    });
    ///////////////////////////////////////////////////////////////
    builder.addCase(set_icama.fulfilled, (state, action) => {
      state.mosqueProps = action.payload;
      toastFunctions("✅", "success");
    });
    builder.addCase(set_icama.rejected, (state) => {
      toastFunctions("error", "error");
    });
    ////////////////////////////////////////////////////////////////////////////
    builder.addCase(set_bg.fulfilled, (state, action) => {
      state.mosqueProps = action.payload;
      toastFunctions("✅", "success");
    });
    builder.addCase(set_bg.rejected, (state) => {
      toastFunctions("error", "error");
    });
    builder.addCase(set_bg_file.fulfilled, (state, action) => {
      try{
        state.mosqueProps = action.payload;
        toastFunctions("✅", "success");
      }
      catch{
        toastFunctions("error", "error");
      }
      
    });
    builder.addCase(set_bg_file.rejected, (state) => {
      toastFunctions("error", "error");
    });
  },
});
////////////////////////////////////////////////////////////////////////////////////
export function returnPrayerTime(
  time: string,
  index: number,
  array: string[],
): {
  title: string;
  time: string;
  icama?: string;
  isCurrent: boolean;
} {
  return {
    title: prayers_names[index] || "",
    time,
    isCurrent: !!returnCurrentTime(array)[index],
  };
}
const returnCurrentTime = (array: string[]): boolean[] => {
  const theDate = new Date();
  const currentHour = theDate.getHours();
  const currentMins = theDate.getMinutes();
  const numbred_array = array.map((e, i) => {
    const [hour, mins] = e.split(":").map((ele) => {
      return Number(ele);
    });
    return { hour, mins };
  }) as { hour: number; mins: number }[];
  const filtred_array1 = numbred_array.map((e, i) => {
    const { hour, mins } = e;
    if (
      (hour - currentHour === 0 && mins - currentMins >= 0) ||
      hour - currentHour > 0
    ) {
      return true;
    } else if (
      hour - currentHour < 0 ||
      (hour - currentHour === 0 && mins - currentMins >= 0)
    ) {
      return false;
    } else {
      return false;
    }
  });
  const firstIndex = filtred_array1.indexOf(true);
  
  const final_array = filtred_array1.map((e, i) => {
    if(firstIndex  === -1 && i === 0){
      return true
    }
    if (e && i === firstIndex) {
      return true;
    } else {
      return false;
    }
  });
  return final_array;
};
export default prayer_slice.reducer;
