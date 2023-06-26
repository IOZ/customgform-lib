import { useEffect } from 'react'
import { useScript } from './hooks/useScript';
import { CDN_LIB } from '@customgform/customgform-core';

declare global {
  interface Window { CustomGForm: any; }
}

export type CustomGFormProps = {
  formId: string;
  // eslint-disable-next-line
  [x:string]: any;
};

const CustomGForm = (props: CustomGFormProps) => {
  const { 
    formId,
    ...restProps
  } = props;
  useScript(CDN_LIB, {
    removeOnUnmount: false,
  })

  useEffect(() => {
    if (typeof window.CustomGForm !== 'undefined') {
      window.CustomGForm.destroy();
      window.CustomGForm.render();
    }
  }, [status])

  return (
    <>
      <div data-customgform={formId} {...restProps}/>
    </>
  )
}

export default CustomGForm
