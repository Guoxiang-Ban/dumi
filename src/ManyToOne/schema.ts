const schema = {
  type: 'object',
  key: 'object',
  properties: {
    aa: {
      type: 'string',
      title: 'AA',
      key: 'aa',
      'x-component': 'Input',
    },
    bb: {
      type: 'boolean',
      key: 'bb',
      enum: [
        { label: 'visible', value: true },
        { label: 'hidden', value: false },
      ],
      default: false,
      title: 'BB',
      'x-component': 'Select',
      'x-linkages': [
        {
          type: 'value:visible',
          target: '*(aa)',
          condition: '{{!!$value}}',
        },
      ],
    },
    cc: {
      type: 'string',
      title: 'CC',
      key: 'cc',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'CC',
      },
    },
  },
};

export default schema;
