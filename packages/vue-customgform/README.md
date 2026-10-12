# CustomGForm for Vue

Simple [Vue 3](https://vuejs.org/) component acting as a thin layer over the [CustomGForm - Google Form Customizer](https://customgform.com/)

## Installation

```bash
npm install @customgform-lib/vue-customgform
# or
yarn add @customgform-lib/vue-customgform
# or
pnpm add @customgform-lib/vue-customgform
```

## Basic usage

```vue
<script setup lang="ts">
import CustomGForm from '@customgform-lib/vue-customgform';
</script>

<template>
  <CustomGForm form-id="clj5flan90005wnju2yq4k38b" />
</template>
```

Or register it globally:

```ts
import { createApp } from 'vue';
import { CustomGFormPlugin } from '@customgform-lib/vue-customgform';

createApp(App).use(CustomGFormPlugin).mount('#app');
```

## Props

- `formId` - unique form id, taken from https://customgform.com/
- `prefillFields` - e.g `{ '1801257527': 'user@gmail.com' }` list of fields to prefill
- `hiddenFields` - e.g `['1801257527']` list of fields to hide
- `mode` - `standard | popup`, form display mode
  - `label` - Popup button text. If empty: button will be hidden
  - `inlineStyles` - Popup button inline styles
  - `buttonClassName` - Popup button own class name
- `theme` - `light | dark | auto`, initial color scheme for forms with dark mode enabled. `auto` follows the visitor's system preference (default).

Any other attributes (`class`, `id`, `style`, ...) are passed through to the container element.

## Example

### Standard mode

```vue
<CustomGForm
  form-id="clj5flan90005wnju2yq4k38b"
  :prefill-fields="{ '325391704': 'John', '1801257527': 'user@gmail.com' }"
  :hidden-fields="['325391704']"
/>
```

### Popup mode

```vue
<CustomGForm
  form-id="clj5flan90005wnju2yq4k38b"
  mode="popup"
  label="Show form"
  button-class-name="btn"
  inline-styles="border: none;"
/>
```

Global callbacks methods to show, hide, toggle modal dialog with form:

```javascript
var formId = 'clj5flan90005wnju2yq4k38b';
window.CustomGForm.toggleModal(formId);
window.CustomGForm.showModal(formId);
window.CustomGForm.closeModal(formId);
```

# License

MIT
