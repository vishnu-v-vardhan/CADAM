import { useQuery } from '@tanstack/react-query';

import { supabase } from '@/lib/supabase';

export type LocalLlmModelInfo = { id: string };

export function useLocalParametricModelsQuery(enabled: boolean) {
  return useQuery({
    queryKey: ['local-parametric-models'],
    queryFn: async (): Promise<LocalLlmModelInfo[]> => {
      const session = (await supabase.auth.getSession()).data.session;
      const token = session?.access_token;
      if (!token) {
        throw new Error('Not signed in');
      }
      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/parametric-chat?local_models=1`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || `Failed to list local models (${res.status})`);
      }
      const data = (await res.json()) as {
        models?: LocalLlmModelInfo[];
        error?: string;
      };
      if ((!data.models || data.models.length === 0) && data.error) {
        throw new Error(data.error);
      }
      return data.models ?? [];
    },
    enabled,
    staleTime: 60_000,
  });
}
