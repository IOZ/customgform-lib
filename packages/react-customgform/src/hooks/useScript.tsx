import * as React from 'react';
import { getCachedScriptStatus, loadScript } from '@customgform-lib/customgform-core';
import type { ScriptStatus } from '@customgform-lib/customgform-core';

export type UseScriptStatus = ScriptStatus;
export interface UseScriptOptions {
  shouldPreventLoad?: boolean
  removeOnUnmount?: boolean
}

export function useScript(
  src: string | null,
  options?: UseScriptOptions,
): UseScriptStatus {
  const [status, setStatus] = React.useState<UseScriptStatus>(() => {
    if (!src || options?.shouldPreventLoad) {
      return 'idle'
    }
    if (typeof window === 'undefined') {
      return 'loading'
    }
    return getCachedScriptStatus(src) ?? 'loading'
  })

  React.useEffect(() => {
    if (!src || options?.shouldPreventLoad) {
      return
    }

    let active = true
    loadScript(src).then((newStatus) => {
      if (active) {
        setStatus(newStatus)
      }
    })

    return () => {
      active = false
      if (options?.removeOnUnmount) {
        document.querySelector(`script[src="${src}"]`)?.remove()
      }
    }
  }, [src, options?.shouldPreventLoad, options?.removeOnUnmount])

  return status
}
