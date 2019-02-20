export const input = {
  title: 'AdditionalProperties',
  type: 'object',
  properties: {
    foo: {
      type: 'string'
    }
  },
  additionalProperties: true
}

export const options = {
  noAdditionalPropertiesIndexing: true
}
