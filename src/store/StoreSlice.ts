import { createSlice } from "@reduxjs/toolkit";
import { logoutAction } from "./StoreActions";

interface GlobalData {
  authUser: any;
  token: any;
  organization: any;
  organization_list: any;
  isLoadingModal: boolean;
  showDrawer: { show: boolean; id: string | null };
  usersList: [];
  workspace_list: any;
  meeting_list: any;
  workspace: any;
  meeting: any;
  newMeeting: any | null;
}

const initialState = {
  authUser: null,
  token: null,
  organization: null,
  organization_list: [],
  isLoadingModal: false,
  usersList: [],
  meeting_list: [],
  workspace_list: [],
  workspace: {} || null,
  showDrawer: { show: false, id: null },
  meeting: {},
  newMeeting: {},
} as GlobalData;

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setAdminUserPayload: (state, { payload }) => {},
    toggleLoadingModalAction: (state, { payload }) => {
      state.isLoadingModal =
        payload !== undefined ? !!payload : !state.isLoadingModal;
    },
    updateAuthTokenAction: (state, { payload }) => {
      state.token = payload;
    },
    updateOrganizationAction: (state, { payload }) => {
      state.organization = payload;
    },
    updateWorkspaceAction: (state, { payload }) => {
      state.workspace = payload;
    },
    updateMeetingAction: (state, { payload }) => {
      console.log("updated meeting action", payload);
      state.meeting = payload;
    },
    logOutAdmin: (state) => {
      state.authUser = null;
      state.token = null;
    },
    toggleDrawer: (state, { payload }) => {
      // console.log(payload);
      state.showDrawer.show = payload?.show;
      state.showDrawer.id = payload?.id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => initialState);
  },
});

export const {
  setAdminUserPayload,
  logOutAdmin,
  toggleLoadingModalAction,
  updateAuthTokenAction,
  updateWorkspaceAction,
  updateOrganizationAction,
  updateMeetingAction,
  toggleDrawer,
} = globalSlice.actions;
export default globalSlice;
