import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adkar_object from "@/assets/JSON/adkarObject.json";
import { serverHost } from "@/other/data";
import { adhkarData } from "@/sw";
const theToken = localStorage.getItem("token");
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${theToken}`,
};

/**
 */
///get data
export const getData = createAsyncThunk("adkar/get-adkar-data", async () => {
  const request = await fetch(`${serverHost}adkar/get-adkar-data`, {
    headers,
    method: "GET",
  });
  return await request.json();
});
///add alarm
export const addAlarm = createAsyncThunk(
  "adkar/add-alarm",
  async ({ id, time }: { id: number; time: string }) => {
    const request = await fetch(`${serverHost}adkar/add-alarm`, {
      headers,
      method: "POST",
      body: JSON.stringify({
        id,
        time,
      }),
    });
    return await request.json();
  },
);
////put(edit) alarm
export const editAlarm = createAsyncThunk(
  "adkar/put-alarm",
  async ({ id, time }: { id: number; time: string }) => {
    const request = await fetch(`${serverHost}adkar/put-alarm`, {
      headers,
      method: "PUT",
      body: JSON.stringify({
        id,
        time,
      }),
    });
    return await request.json();
  },
);
//delete alarm
export const deleteAlarm = createAsyncThunk(
  "adkar/delete-alarm",
  async ({ id }: { id: number }) => {
    const request = await fetch(`${serverHost}adkar/delete-alarm`, {
      headers,
      method: "DELETE",
      body: JSON.stringify({
        id,
      }),
    });
    return await request.json();
  },
);
///set active
export const setActiver = createAsyncThunk(
  "adkar/set-active",
  async ({ active, subscription }: { active: boolean; subscription?: any }) => {
    const request = await fetch(`${serverHost}adkar/set-active`, {
      headers,
      method: "PUT",
      body: JSON.stringify({ active, subscription }),
    });
    const res = await request.json();
    return res;
  },
);
export interface initialState {
  search: boolean;
  searchArrayRes: string[];
  searchArrayResLength: number;
  searchStatue: boolean | null;
  readArray: { count: number; text: string }[];
  Read: boolean;
  searchElement: boolean;
  noftications: {
    isActivated: boolean | null;
    done1: boolean | null;
    done2: boolean | null;
    alaramArray: { time: string; id: number }[];
  };
}
const initialState: initialState = {
  search: false,
  searchArrayRes: Object.keys(adkar_object) as Array<keyof typeof adkar_object>,
  searchStatue: false,
  readArray: [],
  Read: false,
  searchArrayResLength: 0,
  searchElement: true,
  noftications: {
    done1: null,
    done2: null,
    isActivated: null,
    alaramArray: [],
  },
};
export const adkarSlice = createSlice({
  name: "adkar",
  initialState,
  reducers: {
    handelInputSearch: (state, action) => {
      const { searchValue }: { searchValue: string } = action.payload;
      if (searchValue?.trim().length > 0) {
        state.search = searchValue.length > 0;
        const reagExp = new RegExp(searchValue.trim()??``);
        
        state.searchArrayRes = (
          Object.keys(adkar_object) as Array<keyof typeof adkar_object>
        ).filter((e) => {
          const item = adhkarData[e as keyof typeof adhkarData];
          const language = (
            localStorage.getItem("i18nextLng") ?? "en"
          ) as keyof (typeof item);
          //console.log(searchValue.matchAll(new RegExp(item?.[language])))
          return reagExp.test(item?.[language]) === true;
        });
        if (state.searchArrayRes.length) {
          state.searchArrayResLength = state.searchArrayRes.length;
          state.searchStatue = true;
        } else if (!state.searchArrayRes.length) {
          state.searchStatue = null;
          state.search = false;
        }
      } else {
        state.search = false;
        state.searchArrayRes = Object.keys(adkar_object) as Array<
          keyof typeof adkar_object
        >;
      }
    },
    setShow: (state, action?) => {
      state.readArray = action?.payload;
      state.Read = !state.Read;
      state.searchStatue = false;
      state.search = false;
      state.searchArrayRes = Object.keys(adkar_object) as Array<
        keyof typeof adkar_object
      >;
      state.searchElement = !state.searchElement;
    },
  },

  extraReducers: (builder) => {
    ///get data
    builder.addCase(getData.fulfilled, (state, action) => {
      state.noftications = { ...action.payload, done1: true };
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.noftications.done1 = false;
    });
    ///add data

    builder.addCase(addAlarm.fulfilled, (state, action) => {
      state.noftications = { ...action.payload };
      state.noftications.done2 = true;
    });
    builder.addCase(addAlarm.rejected, (state, action) => {
      state.noftications.done2 = false;
    });
    ///put data
    builder.addCase(editAlarm.fulfilled, (state, action) => {
      state.noftications = { ...action.payload };
      state.noftications.done2 = true;
    });
    builder.addCase(editAlarm.rejected, (state, action) => {
      state.noftications.done2 = false;
    });
    ///delete data
    builder.addCase(deleteAlarm.fulfilled, (state, action) => {
      state.noftications = { ...action.payload };
      state.noftications.done2 = true;
    });
    builder.addCase(deleteAlarm.rejected, (state, action) => {
      state.noftications.done2 = false;
    });
    ///set active
    builder.addCase(setActiver.fulfilled, (state, action) => {
      state.noftications = { ...action.payload, done1: true };
    });
    builder.addCase(setActiver.rejected, (state, action) => {
      state.noftications.done1 = false;
    });
  },
});
export const { handelInputSearch, setShow } = adkarSlice.actions;
export default adkarSlice.reducer;
