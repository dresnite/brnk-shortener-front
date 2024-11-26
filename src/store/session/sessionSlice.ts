import { Link } from '@/src/components/tables/LinksTable';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SessionState {
  username?: string;
  id?: number;
  links?: Link[];
}

const initialState: SessionState = {};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<SessionState>) => {
        state.username = action.payload.username;
        state.id = action.payload.id;

        if (action.payload.links) {
            state.links = action.payload.links
        }
    },
    setLinks: (state, action: PayloadAction<Link[]>) => {
        state.links = action.payload;
    },
    addLink: (state, action: PayloadAction<Link>) => {
        if (!state.links) {
            state.links = [];
        }

        state.links.push(action.payload)
    },
    clearSession: (state) => {
        state.username = undefined;
        state.id = undefined;
        state.links = undefined;
    }
  },
});

export const { setSession, setLinks, addLink, clearSession } = sessionSlice.actions;

export default sessionSlice.reducer;
