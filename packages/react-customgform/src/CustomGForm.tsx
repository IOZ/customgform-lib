import { useEffect } from 'react'
import { useScript } from './hooks/useScript';
import { CDN_LIB } from '@customgform-lib/customgform-core';

declare global {
  interface Window { CustomGForm: any; }
}

export type CustomGFormProps = {
  formId: string;
  mode?: 'standard' | 'popup';
  label?: string;
  inlineStyles?: string;
  // eslint-disable-next-line
  [x:string]: any;
};

const CustomGForm = (props: CustomGFormProps) => {
  const { 
    formId,
    mode = 'standard',
    label = '',
    inlineStyles = '',
    ...restProps
  } = props;

  const status = useScript(CDN_LIB, {
    removeOnUnmount: false,
  });

  const modeProps = mode === 'popup' ? {
    'data-mode': mode,
    'data-label': label,
    'data-style': inlineStyles,
  } : {};

  useEffect(() => {
    if (typeof window.CustomGForm !== 'undefined') {
      window.CustomGForm.destroy();
      window.CustomGForm.render();
    }
  }, [status])

  return (
    <>
      <div data-customgform={formId} {...modeProps} {...restProps}/>
    </>
  )
}

export default CustomGForm
