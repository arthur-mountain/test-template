// import Image from 'next/image';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
  },
});

export default function RootPage() {
  return (
    <ThemeProvider theme={theme}>
      <main className="flex min-h-screen">
        123
      </main>
    </ThemeProvider>
  )
};