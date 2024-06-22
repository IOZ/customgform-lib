import React from 'react'
import ReactDOM from 'react-dom/client'
import CustomGForm from './CustomGForm.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* standard mode */}
    {/* <CustomGForm formId="clj5flan90005wnju2yq4k38b"/> */}

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

    {/* popup mode */}
    <div style={{ textAlign: 'center', margin: '20px' }}>
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
      />
    </div>
  </React.StrictMode>,
)
