import React, { useEffect } from 'react'
import { useScript } from './hooks/useScript';
import { CDN_LIB } from '@customgform-lib/customgform-core';

import type { CustomGFormProps } from './types';
import { prefillObjectToString } from './utils/prefill';

export const CustomGForm: React.FC<CustomGFormProps> = (props) => {
  const { 
    formId,
    mode = 'standard',
    label = '',
    inlineStyles = '',
    buttonClassName = '',
    prefillFields = null,
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

  if (prefillFields) {
    modeProps['data-prefill_fields'] = prefillObjectToString(prefillFields);
  }

  useEffect(() => {
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
