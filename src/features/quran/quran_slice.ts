import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const theToken = localStorage.getItem("token");
import { serverHost } from "@/other/data";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${theToken}`,
};

interface IIres {
  id?: number;
  reciter?: {
    ar?: string;
    en?: string;
  };
}
export interface theIinitialState {
  done1: boolean;
  done2: null | boolean | undefined;
  done3: boolean | null;
  done4: boolean | null | undefined;
  done5: boolean | null | undefined;
  audioData: any;
  tafsir_objects?: {
    tafseer_id: number;
    tafseer_name: string;
    ayah_url: string;
    ayah_number: number;
    text: string;
  };
  quran_text:
    | {
        name: {
          ar: string;
          en: string;
          transliteration: string;
        };
        number: number;
        revelation_place: {
          ar: "مكية" | "مدنية";
          en: "meccan" | "medinan";
        };
        verses_count: number;
        verses: {
          number: number;
          text: {
            ar: string;
            en: string;
          };
          juz: number;
          page: number;
          sajda: boolean;
        }[];
      }
    | {};
  quranAudio?: respone[] | null;
  quranAudioAfterFetch: { done: null | boolean; payload: respone[] | [] };
  theData: {
    reciters: IIres[];
  };
}
interface respone {
  audio?:
    | [
        {
          id: number;
          reciter: { ar: string; en: string };
          rewaya: { ar: string; en: string };
          server: string;
          link: string;
        },
      ]
    | any;
  recitaiton?: {
    ar: string;
    en: string;
  };
}
////////////////////////////////////////////////////////////////////
export const getReader = createAsyncThunk(
  "quran/get_data",
  async (narrativName: string) => {
    const request = await fetch(
      `${serverHost}quran/reciations_And_narrative?narrative=${narrativName}`,
    );
    return await request.json();
  },
);
/////////////////////////////////////////
export const getAudio = createAsyncThunk(
  "quran/get_audio",
  async ({
    sourahIndex,
    reaction,
  }: {
    sourahIndex: string;
    reaction: string;
  }) => {
    const queryParams = {
      sourahIndex: sourahIndex ? `sourah=${sourahIndex}` : ``,
      reaction: reaction ? `reaction=${reaction}` : ``,
    };
    const request = await fetch(
      `${serverHost}quran/quran_rections?${queryParams.sourahIndex}&${queryParams.reaction}`,
    );
    return await request.json();
  },
);
////////////////////////////////////
export const getAudioSaved = createAsyncThunk(
  "quran/get_audio_saved",
  async () => {
    const request1 = await fetch(`${serverHost}quran/get_saved`, { headers });
    const res = await request1.json();
    const queryParams = {
      array: res ? `array=${res ? JSON.stringify(res) : []}` : ``,
    };
    const request = await fetch(
      `${serverHost}quran/quran_rections?${queryParams.array}`,
    );
    return await request.json();
  },
);
///////////////////////////////////////////
export const addToSaved = createAsyncThunk(
  "quran/push_saved",
  async ({ surah, reader }: { surah: number; reader: number }) => {
    const request = await fetch(`${serverHost}quran/add_audio`, {
      headers,
      method: "POST",
      body: JSON.stringify({
        surah,
        reader,
      }),
    });

    return await request.json();
  },
);
///////////////////////////////////////////
export const deletAudio = createAsyncThunk(
  "quran/delete",
  async ({ surah, reader }: { surah: number; reader: number }) => {
    const request = await fetch(`${serverHost}quran/delete_audio`, {
      headers,
      method: "DELETE",
      body: JSON.stringify({
        surah,
        reader,
      }),
    });
    return await request.json();
  },
);
////////////////////////////////////////////////
export const quranReading = createAsyncThunk(
  "quran/reading",
  async ({
    surahIndex,
    aya,
  }: {
    surahIndex: string;
    aya?: string | undefined;
  }) => {
    const request = await fetch(
      `${serverHost}quran/quran_reading?surahIndex=${surahIndex}&aya=${aya}`,
      {},
    );
    return await request.json();
  },
);
///////////////////////////////
export const getTafsir = createAsyncThunk(
  "quran/tafsir",
  async ({
    id,
    surahIndex,
    aya,
  }: {
    id: number;
    surahIndex: number;
    aya: number;
  }) => {
    const request = await fetch(
      `${serverHost}quran/tafsir?id=${id.toString()}&surahIndex=${surahIndex.toString()}&aya=${aya.toString()}`,
    );
    return await request.json();
  },
);

const initialState: theIinitialState = {
  done1: false,
  done2: undefined,
  done3: null,
  done4: null,
  done5: null,

  quran_text: {},
  audioData: {},
  quranAudio: null,
  quranAudioAfterFetch: { done: null, payload: [] },
  theData: {
    reciters: [],
  },
};
export const quranSlice = createSlice({
  name: "quran",
  initialState,
  reducers: {
    playSaved: (state, action) => {
      state.audioData = { ...action.payload, isSaved: true };
      state.done2 = true;
    },
  },
  extraReducers: (builder) => {
    //get reader
    builder.addCase(getReader.fulfilled, (state, action) => {
      state.done1 = true;
      state.theData = action.payload;
    });
    ///get audio
    builder.addCase(getAudio.fulfilled, (state, action) => {
      state.done2 = true;
      state.audioData = action.payload;
    });
    builder.addCase(getAudio.rejected, (state, action) => {
      state.done2 = false;
    });
    builder.addCase(getAudio.pending, (state, action) => {
      state.done2 = null;
    });
    /////////////////////////////

    builder.addCase(getAudioSaved.rejected, (state, action) => {
      state.quranAudioAfterFetch.done = false;
    });
    builder.addCase(getAudioSaved.fulfilled, (state, action) => {
      if (Array.isArray(action.payload)) {
        state.quranAudioAfterFetch.payload = action.payload;
        state.quranAudioAfterFetch.done = true;
      } else {
        state.quranAudioAfterFetch.done = false;
      }
    });
    ///getSaved
    //add to saved
    builder.addCase(addToSaved.pending, (state, action) => {
      state.done3 = null;
    });
    builder.addCase(addToSaved.fulfilled, (state, action) => {
      state.quranAudio = action.payload;
      state.done3 = true;
    });
    builder.addCase(addToSaved.rejected, (state, action) => {
      state.done3 = false;
    });
    //delete
    builder.addCase(deletAudio.fulfilled, (state, action) => {
      state.quranAudio = action.payload;
      state.done3 = true;
    });
    builder.addCase(deletAudio.rejected, (state, action) => {
      state.done3 = false;
    });
    ////////////////////////////////////////////////////////////
    builder.addCase(quranReading.fulfilled, (state, action) => {
      state.quran_text = action.payload;
      state.done4 = true;
    });
    builder.addCase(quranReading.rejected, (state, action) => {
      state.done4 = false;
    });
    builder.addCase(quranReading.pending, (state, action) => {
      state.done4 = undefined;
    });
    /////////////////////////////////////////////////////
    builder.addCase(getTafsir.fulfilled, (state, action) => {
      state.done5 = true;
      state.tafsir_objects = action.payload;
    });
    builder.addCase(getTafsir.rejected, (state, action) => {
      state.done5 = false;
    });
    builder.addCase(getTafsir.pending, (state, action) => {
      state.done5 = undefined;
    });
  },
});
export const { playSaved } = quranSlice.actions;
export default quranSlice.reducer;
