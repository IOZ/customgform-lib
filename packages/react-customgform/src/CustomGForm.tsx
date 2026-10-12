import * as React from 'react';
import { buildDataAttributes, CDN_LIB, renderForms } from '@customgform-lib/customgform-core';

import { useScript } from './hooks/useScript';
import type { CustomGFormProps } from './types';

export type { CustomGFormProps, DisplayMode, ThemeMode } from './types';

const CustomGForm: React.FC<CustomGFormProps> = (props) => {
  const {
    formId,
    mode,
    label,
    inlineStyles,
    buttonClassName,
    prefillFields,
    hiddenFields,
    theme,
    __formConfig,
    __cdnUrl,
    __envs,
    ...restProps
  } = props;

  const status = useScript(__cdnUrl ?? CDN_LIB, {
    removeOnUnmount: false,
  });

  const dataAttributes = buildDataAttributes({
    formId,
    mode,
    label,
    inlineStyles,
    buttonClassName,
    prefillFields,
    hiddenFields,
    theme,
    __formConfig,
    __envs,
  });

  React.useEffect(() => {
    renderForms();
  }, [status])

  return (
    <div {...dataAttributes} {...restProps}/>
  )
}

export default CustomGForm;
