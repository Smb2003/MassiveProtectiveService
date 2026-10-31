import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InquiryDraft {
  serviceType: string;
  county: 'Palm Beach' | 'Broward' | 'Miami-Dade' | '';
  fullName: string;
  email: string;
  phone: string;
  details: string;
  requiresArmedDriver: boolean;
  ndaRequested: boolean;
  status: 'idle' | 'submitting' | 'submitted' | 'failed';
}

const initialState: InquiryDraft = {
  serviceType: '',
  county: '',
  fullName: '',
  email: '',
  phone: '',
  details: '',
  requiresArmedDriver: false,
  ndaRequested: false,
  status: 'idle',
};

export const inquirySlice = createSlice({
  name: 'inquiry',
  initialState,
  reducers: {
    updateDraftField: <K extends keyof InquiryDraft>(
      state: InquiryDraft,
      action: PayloadAction<{ field: K; value: InquiryDraft[K] }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
    resetDraft: () => initialState,
    setSubmissionStatus: (state, action: PayloadAction<InquiryDraft['status']>) => {
      state.status = action.payload;
    },
  },
});

export const { updateDraftField, resetDraft, setSubmissionStatus } = inquirySlice.actions;
export default inquirySlice.reducer;
