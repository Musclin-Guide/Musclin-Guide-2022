import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const decorators = (Story) => (
  <QueryClientProvider client={queryClient}>
    <Story />
  </QueryClientProvider>
);
