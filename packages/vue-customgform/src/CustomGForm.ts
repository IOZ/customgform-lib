import { computed, defineComponent, h, onMounted, ref, watch } from 'vue';
import type { PropType } from 'vue';
import {
  buildDataAttributes,
  CDN_LIB,
  DEFAULT_DISPLAY_MODE,
  getCachedScriptStatus,
  loadScript,
  renderForms,
} from '@customgform-lib/customgform-core';
import type {
  CustomGFormEnvs,
  DisplayMode,
  PrefillFields,
  ScriptStatus,
  ThemeMode,
} from '@customgform-lib/customgform-core';

export const CustomGForm = defineComponent({
  name: 'CustomGForm',
  props: {
    /** Unique form id from customgform */
    formId: { type: String, required: true },
    /** List of fields to prefill */
    prefillFields: { type: Object as PropType<PrefillFields | null>, default: null },
    /** List of fields to hide */
    hiddenFields: { type: Array as PropType<string[] | null>, default: null },
    /** Display mode */
    mode: { type: String as PropType<DisplayMode>, default: DEFAULT_DISPLAY_MODE },
    /** mode: popup: Label text for trigger button */
    label: { type: String, default: '' },
    /** mode: popup: Inline styles for button */
    inlineStyles: { type: String, default: '' },
    /** mode: popup: button class name */
    buttonClassName: { type: String, default: '' },
    /** Initial color scheme for forms with dark mode enabled */
    theme: { type: String as PropType<ThemeMode>, default: undefined },
    /** debug: Generate preview mode without loading data from server */
    __formConfig: { type: null as unknown as PropType<any>, default: null },
    /** debug: Allow to provide custom cdn url */
    __cdnUrl: { type: String, default: undefined },
    /** Override environment URLs (baseHost, apiHost, cdnHost) */
    __envs: { type: Object as PropType<CustomGFormEnvs>, default: undefined },
  },
  setup(props) {
    const src = computed(() => props.__cdnUrl ?? CDN_LIB);
    const status = ref<ScriptStatus>(getCachedScriptStatus(src.value) ?? 'loading');
    const dataAttributes = computed(() => buildDataAttributes(props));

    const load = () => {
      const currentSrc = src.value;
      loadScript(currentSrc).then((result) => {
        if (currentSrc === src.value) {
          status.value = result;
        }
      });
    };

    onMounted(() => {
      renderForms();
      load();
    });

    watch(src, load);
    watch(status, () => renderForms());
    watch(dataAttributes, () => renderForms(), { deep: true, flush: 'post' });

    return () => h('div', dataAttributes.value);
  },
});

export default CustomGForm;
