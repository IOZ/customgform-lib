# CustomGForm

Simple [React](http://facebook.github.io/react/) component acting as a thin layer over the [CustomGForm - Google Form Customizer](https://customgform.com/)

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

If a `customgform-core` change must be reflected in the built React package, include a changeset for `@customgform-lib/react-customgform` as well.

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
