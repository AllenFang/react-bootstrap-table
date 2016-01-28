import React, { Component, PropTypes } from 'react';

export default class ComboBoxEditor extends Component {

  static propTypes = {
    options: PropTypes.object.isRequired,
    format: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.bool
    ]),
    attr: PropTypes.object.isRequired,
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    classifier: PropTypes.arrayOf(PropTypes.object),
    displayField: PropTypes.string,
    valueField: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  };

  formatValue(value) {
    const format = this.props.format;
    return format ? format(value) : value;
  }

  createFromArray(values) {
    return values.map((v, i) =>
      <option key={'option'+i} value={v}>{this.formatValue(v)}</option>
    );
  }

  createFromClassifier(values, displayField, valueField) {
    const optionsFromRec = (v, i) => {
      const value = v[valueField];
      let text = v[displayField];
      
      return <option key={'option'+ value} value={value}>{this.formatValue(text)}</option>;
    };

    return values.map(optionsFromRec);
  }

  createOptions() {
    const { options: { values }, classifier, displayField, valueField} = this.props;
    if (classifier) {
      return this.createFromClassifier(classifier, displayField, valueField);
    }
    else return this.createFromArray(values);
  }

  render() {
    const { attr, defaultValue } = this.props;
    const selectOptions = this.createOptions();

    return (
      <select {...attr} defaultValue={defaultValue}>{selectOptions}</select>      
    );
  }

}