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

## Basic usage

```tsx
<CustomGForm 
  formId="clj5flan90005wnju2yq4k38b"
/>
```

## Props

Common props you may want to specify include:

- `formId` - unique form id, taken from https://customgform.com/
- `prefillFields` - e.g `{ '1801257527': 'user@gmail.com' }` list of fields to prefill, separated by semicolon
- `mode` - `standard | popup`, form display mode
  - `label` - Popup button text. If empty: button will be hidden
  - `inlineStyles` - Popup button inline styles
  - `buttonClassName` - Popup button own class name


## Example

### Standard mode
```tsx
// ts
import React from 'react';
import CustomGForm from '@customgform-lib/react-customgform';

function Example() {
  {/* standard mode */}
  return <CustomGForm 
    formId="clj5flan90005wnju2yq4k38b"
    prefillFields={{
      '325391704': 'John',
      '1801257527': 'user@gmail.com',
    }}
  />;
}
```

### Popup mode
```tsx
// ts
import React from 'react';
import CustomGForm from '@customgform-lib/react-customgform';

function Example() {
  return <>
    {/* define own styles if needed */}
    <style>
      {`
        .btn { 
          border: none;
          appearance: none;
          cursor: pointer;
          padding: 8px 12px;
          display: inline-block;
          background: #3f6bff;
          font-size: 16px;
          color: #fff;
          border-radius: 6px;
          font-weight: 500; 
        }
      `}
    </style>

    <CustomGForm 
      formId="clj5flan90005wnju2yq4k38b" 
      mode='popup' 
      label="Show form"
      inlineStyles=''
      buttonClassName='btn'
      prefillFields={{
        '325391704': 'John',
        '1801257527': 'user@gmail.com',
      }}
      inlineStyles='border: none;'
    />
  </>;
}
```

Global callbacks methods to show, hide, toggle modal dialog with form:
 ```javascript
var formId = 'clj5flan90005wnju2yq4k38b'; // replace FORM_ID to your form id
// toggle modal: if shown, it'll be hidden, if hidden, it would be shown
window.CustomGForm.toggleModal(formId);
// show modal
window.CustomGForm.showModal(formId);
// close modal
window.CustomGForm.closeModal(formId);
```

# License

MIT
