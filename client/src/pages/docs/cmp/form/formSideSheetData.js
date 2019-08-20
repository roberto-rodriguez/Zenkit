const formSideSheetData = {
  textField: {
    title: "TextField",
    subTitle: "Short text input",
    url: "https://evergreen.segment.com/components/text-input",
    props:[
      {name: 'name', description: 'Field name'},
      {name: 'label', description: 'Field label'},
      {name: 'component', description: 'TextField'},
      {name: 'hint', description: 'Short text that displays under the field'},
      {name: 'defaultValue', description: 'Default value'},
      {name: 'placeholder', description: 'Placeholder value'},
      {name: 'width', description: '(Optional) Default width is 320'}
    ]
  },
  selectStaticStatic: {
    title: "SelectField",
    subTitle: "SelectField with static data",
    url: "https://evergreen.segment.com/components/select",
    props:[
      {name: 'name', description: 'Field name'},
      {name: 'label', description: 'Field label'},
      {name: 'component', description: 'SelectField'},
      {name: 'hint', description: 'Short text that displays under the field'},
      {name: 'defaultValue', description: 'Default value'},
      {name: 'source', description: 'Array of items [id, name]'},
      {name: 'width', description: '(Optional) Default width is 320'},
      {name: 'valueField', description: '(Optional) Name of the id field on the item object. Default id'},
      {name: 'textField', description: '(Optional) Name of the name field on the item object. Default name'}
    ]
  },
  selectStaticDynamic: {
    title: "SelectField",
    subTitle: "SelectField with dynamic data",
    url: "https://evergreen.segment.com/components/select",
    props:[
      {name: 'name', description: 'Field name'},
      {name: 'label', description: 'Field label'},
      {name: 'component', description: 'SelectField'},
      {name: 'hint', description: 'Short text that displays under the field'},
      {name: 'defaultValue', description: 'Default value'},
      {name: 'source', description: 'Name of the resource to be called to the server under api: /api/uiprop/:source , the result will be stored on ui.reducer as [sourceName]: listOfItems'},
      {name: 'width', description: '(Optional) Default width is 320'},
      {name: 'valueField', description: '(Optional) Name of the id field on the item object. Default id'},
      {name: 'textField', description: '(Optional) Name of the name field on the item object. Default name'}
    ]
  },
  textAreaField: {
    title: "TextArea",
    subTitle: "Long text input",
    url: "https://evergreen.segment.com/components/textarea",
    props:[
      {name: 'name', description: 'Field name'},
      {name: 'label', description: 'Field label'},
      {name: 'component', description: 'TextAreaField'},
      {name: 'defaultValue', description: 'Default value'},
      {name: 'placeholder', description: 'Placeholder value'},
      {name: 'width', description: '(Optional) Default width is 640'}
    ]
    
  }
};

export default formSideSheetData;
