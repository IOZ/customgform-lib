import type { App } from 'vue';
import { CustomGForm } from './CustomGForm';

export { CustomGForm };
export type {
  CustomGFormEnvs,
  CustomGFormOptions as CustomGFormProps,
  DisplayMode,
  PrefillFields,
  ThemeMode,
} from '@customgform-lib/customgform-core';

/** Vue plugin registering `<CustomGForm>` globally: `app.use(CustomGFormPlugin)`. */
export const CustomGFormPlugin = {
  install(app: App) {
    app.component('CustomGForm', CustomGForm);
  },
};

export default CustomGForm;
