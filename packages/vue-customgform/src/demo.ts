import { createApp, h } from 'vue';
import CustomGForm from './index';

createApp({
  render: () => [
    h(CustomGForm, { formId: 'clj5flan90005wnju2yq4k38b' }),
    h('div', { style: { margin: '20px' } }, [
      h(CustomGForm, {
        formId: 'clj5flan90005wnju2yq4k38b',
        mode: 'popup',
        label: 'Show form',
        buttonClassName: 'btn',
        prefillFields: { '325391704': 'John', '1801257527': 'user@gmail.com' },
        hiddenFields: ['325391704'],
      }),
    ]),
  ],
}).mount('#app');
