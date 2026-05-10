import { ParametricLlmProvider } from '@shared/types';

import { cn } from '@/lib/utils';

export function ParametricLlmBackendToggle({
  value,
  onChange,
  disabled,
  className,
}: {
  value: ParametricLlmProvider;
  onChange: (next: ParametricLlmProvider) => void;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="LLM backend"
      className={cn('flex items-center gap-1 text-[11px] text-adam-text-secondary', className)}
    >
      <button
        type="button"
        role="radio"
        aria-checked={value === 'openrouter'}
        disabled={disabled}
        onClick={() => onChange('openrouter')}
        className={cn(
          'rounded px-2 py-1 transition-colors',
          value === 'openrouter'
            ? 'border border-white/20 text-adam-text-primary'
            : 'border border-transparent hover:text-adam-text-primary',
        )}
      >
        OpenRouter
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={value === 'local'}
        disabled={disabled}
        onClick={() => onChange('local')}
        className={cn(
          'rounded px-2 py-1 transition-colors',
          value === 'local'
            ? 'border border-white/20 text-adam-text-primary'
            : 'border border-transparent hover:text-adam-text-primary',
        )}
      >
        Local LLM
      </button>
    </div>
  );
}
