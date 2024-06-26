declare global {
  interface Window { CustomGForm: any; }
}

export type CustomGFormProps = {
  formId: string;
  mode?: 'standard' | 'popup';
  label?: string;
  inlineStyles?: string;
  
  buttonClassName?: string;
  prefillFields?: { [fieldId: string]: string | number; } | null;
  // for preview purposes
  __formConfig?: any
};
