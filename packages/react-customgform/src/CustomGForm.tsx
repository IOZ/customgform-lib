import * as React from 'react';
import { CDN_LIB } from '@customgform-lib/customgform-core';

import { useScript } from './hooks/useScript';
import type { CustomGFormProps } from './types';
import { prefillObjectToString } from './utils/prefill';

const CustomGForm: React.FC<CustomGFormProps> = (props) => {
  const { 
    formId,
    mode = 'standard',
    label = '',
    inlineStyles = '',
    buttonClassName = '',
    prefillFields = null,
    hiddenFields = null,
    __formConfig = null,
    ...restProps
  } = props;

  const status = useScript(CDN_LIB, {
    removeOnUnmount: false,
  });

  const modeProps: any = mode === 'popup' ? {
    'data-mode': mode,
    'data-label': label,
    'data-style': inlineStyles,
    'data-button_class': buttonClassName,
  } : {};

  
  try {
    if (__formConfig) {
    modeProps['data-customgform-config'] = JSON.stringify(__formConfig);
    }
  } catch {}
  
  if (prefillFields) {
    modeProps['data-prefill_fields'] = prefillObjectToString(prefillFields);
  }

  if (hiddenFields) {
    modeProps['data-hidden_fields'] = hiddenFields?.join(';');
  }

  React.useEffect(() => {
    if (typeof window.CustomGForm !== 'undefined') {
      window.CustomGForm.destroy();
      window.CustomGForm.render();
    }
  }, [status])

  return (
    <div data-customgform={formId} {...modeProps} {...restProps}/>
  )
}

export default CustomGForm;
