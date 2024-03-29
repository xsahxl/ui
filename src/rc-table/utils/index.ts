import { filter, find, get, includes, isEmpty, join, last, set } from 'lodash';
import { IOptions, ISearch } from '../type';

export const normalizeSearchOptions = (search: ISearch) => {
  const options = get(search, 'options', []);
  const onlySupportOne = get(search, 'onlySupportOne');
  const defaultOpts = filter(options, item => !isEmpty(item?.defaultValue));
  const filters = [];
  const params = {};
  if (defaultOpts.length > 0) {
    for (const item of defaultOpts) {
      let valueLabel = item.defaultValue;
      if (item.template === 'select') {
        valueLabel = find(get(item, 'templateProps.dataSource', []), d => d.value === item.defaultValue)?.label;
      }
      if (item.template === 'multiple') {
        valueLabel = filter(get(item, 'templateProps.dataSource', []), d => includes(item.defaultValue, d.value))
          .map(d => d.label)
          .join('/');
        // TODO: 基础组件不支持value为数组
        item.defaultValue = join(item.defaultValue, ',');
      }
      filters.push({
        label: item.label,
        valueLabel,
        value: item.defaultValue,
        template: item.template,
        defaultValue: item.defaultValue,
        dataIndex: item.dataIndex,
      });
      set(params, item.dataIndex, item.defaultValue);
    }
  }
  if (onlySupportOne && filters.length > 0) {
    const options = last(filters) as IOptions;
    return { filters: [options], params: { [options.dataIndex]: options.defaultValue } };
  }
  return { filters, params };
};
