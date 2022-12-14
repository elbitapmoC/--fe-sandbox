'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ThemeProvider } from 'next-themes';

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
}

const ReactQueryWrapper = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme='dark' >
      {children}
    </ThemeProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>
)

export default ReactQueryWrapper;