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
