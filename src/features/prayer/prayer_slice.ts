import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverHost } from "@/other/data";
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
    is12?: boolean;
  }[];
  is12: boolean;
  All_done: {
    done1: null | boolean;
    done2: null | boolean;
    done3: null | boolean;
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
  is12: false,
  All_done: {
    done1: null,
    done2: null,
    done3: null,
  },
};
const hijriMonths = [
  "محرم",
  "صفر",
  "ربيع الأول",
  "ربيع الآخر",
  "جمادى الأولى",
  "جمادى الآخرة",
  "رجب",
  "شعبان",
  "رمضان",
  "شوال",
  "ذو القعدة",
  "ذو الحجة",
];

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
export const getPrayers_and_date_data = createAsyncThunk(
  "prayer/gPD",
  async ({ latitude, longitude }: { latitude: number; longitude: number }) => {
    const request = await fetch(
      serverHost +
        `prayer/prayer_time?latitude=${latitude}&longitude=${longitude}`,
    );

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
          const titles = ["الشروق", "منتصف الليل"];
          return { title: titles[i] || "", time: e };
        });
        let hijrid_date_splited = hijrid_date.split("-");
        state.hijrid_date =
          typeof Number(hijrid_date.split(`-`)[0]) === "number"
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
  },
});
function returnPrayerTime(
  time: string,
  index: number,
  array: string[],
): {
  title: string;
  time: string;
  icama?: string;
  isCurrent: boolean;
} {
  const prayers_name = ["الفجر", "الظهر", "العصر", "المغرب", "العشاء"];

  return {
    title: prayers_name[index] || "",
    time,
    isCurrent: !!returnCurrentTime(array)[index],
  };
}
const returnCurrentTime = (array: string[]): boolean[] => {
  const theDate = new Date();
  const currentHour = theDate.getHours();
  const currentMins = theDate.getHours();
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
    } else {
      return false;
    }
  });
  const firstIndex = filtred_array1.indexOf(true);
  const final_array = filtred_array1.map((e, i) => {
    if (e && i === firstIndex) {
      return true;
    } else {
      return false;
    }
  });
  return final_array;
};
export default prayer_slice.reducer;
