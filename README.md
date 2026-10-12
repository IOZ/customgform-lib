# CustomGForm

Simple [React](http://facebook.github.io/react/) and [Vue](https://vuejs.org/) components acting as a thin layer over the [CustomGForm - Google Form Customizer](https://customgform.com/)

## Packages

- [`@customgform-lib/react-customgform`](./packages/react-customgform) - React component
- [`@customgform-lib/vue-customgform`](./packages/vue-customgform) - Vue 3 component
- [`@customgform-lib/customgform-core`](./packages/customgform-core) - shared types, constants and framework-agnostic helpers

## Installation

### NPM

```bash
npm install @customgform-lib/react-customgform
```

### Yarn

```bash
yarn add @customgform-lib/react-customgform
```

### PNPM

```bash
pnpm add @customgform-lib/react-customgform
```

## Releases

This repository uses Changesets for independent semantic versioning of the npm packages:

- `@customgform-lib/customgform-core`
- `@customgform-lib/react-customgform`
- `@customgform-lib/vue-customgform`

For the short day-to-day flow, see [RELEASE_CHEATSHEET.md](./RELEASE_CHEATSHEET.md).

For every publishable change, run:

```bash
npm run changeset
```

Select the changed package and the SemVer bump type:

- `patch` for bug fixes and packaging-only changes
- `minor` for backwards-compatible features
- `major` for breaking changes

Commit the generated `.changeset/*.md` file with your code changes. When the change is pushed to `master`, GitHub Actions versions the changed packages, builds them, publishes them to npm, and pushes the version commit and tags back to the repository.

The release workflow requires an `NPM_TOKEN` repository secret with publish access to the `@customgform-lib` npm scope.

If a `customgform-core` change must be reflected in the built React or Vue packages, include changesets for `@customgform-lib/react-customgform` and/or `@customgform-lib/vue-customgform` as well.

## Development

```bash
npm test   # builds all packages and runs Vitest in each workspace
npm run lint
```

## Usage

<CustomGForm 
        formId="clj5flan90005wnju2yq4k38b" 
        mode='popup' 
        label="Show form"
        inlineStyles='border: none;appearance: none;cursor: pointer;padding: 8px 12px;display: inline-block;background: #3f6bff;font-size: 16px;color: #fff;border-radius: 6px;font-weight: 500;'
      />

```js
<CustomGForm
  formId={string}                  // defaults -> ''
  mode={'standard' | 'popup'}      // defaults -> 'standard'
  label={string}                   // defaults -> ''
  inlineStyles={string}            // defaults -> ''
/>
```

## Vue

```bash
npm install @customgform-lib/vue-customgform
```

```vue
<script setup lang="ts">
import CustomGForm from '@customgform-lib/vue-customgform';
</script>

<template>
  <CustomGForm form-id="clj5flan90005wnju2yq4k38b" />
</template>
```

See [packages/vue-customgform/README.md](./packages/vue-customgform/README.md) for all props.

## Example

### Standard mode
```tsx
// ts
import React from 'react';
import CustomGForm from '@customgform-lib/react-customgform';

function Example() {
  {/* standard mode */}
  return <CustomGForm formId="clj5flan90005wnju2yq4k38b"/>;
}
```

### Popup mode
```tsx
// ts
import React from 'react';
import CustomGForm from '@customgform-lib/react-customgform';

function Example() {
  return <CustomGForm 
    formId="clj5flan90005wnju2yq4k38b" 
    mode='popup' 
    label="Show form"
    inlineStyles='border: none;appearance: none;cursor: pointer;padding: 8px 12px;display: inline-block;background: #3f6bff;font-size: 16px;color: #fff;border-radius: 6px;font-weight: 500;'
  />;
}
```

# License

MIT
