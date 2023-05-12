'use client';
// import Image from 'next/image';
import store from 'stores/store';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Counter from "components/counter";

const theme = createTheme({});
export default function RootPage() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <main className="flex min-h-screen">
          <Counter />
        </main>
      </ThemeProvider>
    </ReduxProvider>
  )
};