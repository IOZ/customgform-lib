declare global {
  interface Window { CustomGForm: any; }
}

export type DisplayMode = 'standard' | 'popup';

export type CustomGFormProps = {
  /** Unique form id from customgform */
  formId: string;

  /** List of fields to prefill */
  prefillFields?: { [fieldId: string]: string | number; } | null;

  /** List of fields to hide */
  hiddenFields?: string[] | null;

  /** Display mode */
  mode?: DisplayMode;

  /** mode: popup: Label text for trigger button */
  label?: string;

  /** mode: popup: Inline styles for button */
  inlineStyles?: string;
  
  /** mode: popup: button class name */
  buttonClassName?: string;
  
  /** debug: Generate preview mode without loading data from server */
  __formConfig?: any;

  /** debug: Allow to provide custom cdn url, used for debug */
  __cdnUrl?: string;
};
