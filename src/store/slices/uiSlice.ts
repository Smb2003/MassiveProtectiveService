import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UIState {
  isMobileMenuOpen: boolean;
  activeModal: 'none' | 'priorityDispatch' | 'consultation' | 'ndaRequest';
  activeSection: string;
  isScrolled: boolean;
}

const initialState: UIState = {
  isMobileMenuOpen: false,
  activeModal: 'none',
  activeSection: 'hero',
  isScrolled: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    setActiveModal: (state, action: PayloadAction<UIState['activeModal']>) => {
      state.activeModal = action.payload;
    },
    closeModal: (state) => {
      state.activeModal = 'none';
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
    setIsScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
  },
});

export const {
  setMobileMenuOpen,
  toggleMobileMenu,
  setActiveModal,
  closeModal,
  setActiveSection,
  setIsScrolled,
} = uiSlice.actions;

export default uiSlice.reducer;
