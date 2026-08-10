declare global {
  interface Window { CustomGForm: any; }
}

export type DisplayMode = 'standard' | 'popup';

/** Initial color scheme for forms with dark mode enabled. */
export type ThemeMode = 'light' | 'dark' | 'auto';

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

  /** Initial color scheme for forms with dark mode enabled.
   * 'light' | 'dark' pin the scheme, 'auto' follows the visitor's
   * system preference (default). The visitor can still flip it with
   * the in-form toggle when the form owner has enabled it. */
  theme?: ThemeMode;
  
  /** debug: Generate preview mode without loading data from server */
  __formConfig?: any;

  /** debug: Allow to provide custom cdn url, used for debug */
  __cdnUrl?: string;

  /** Override environment URLs (baseHost, apiHost, cdnHost) */
  __envs?: {
    baseHost?: string;
    apiHost?: string;
    cdnHost?: string;
  };
};
