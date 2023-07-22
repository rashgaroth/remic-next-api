/* eslint-disable @typescript-eslint/no-explicit-any */
import { parse } from 'qs';

import constants from '../utils/constants';

class HttpFormatUtils {
  static formatQueryString(
    q: string,
    {
      defaultValue = {},
      parseSortQuery = true,
      sortType = constants.FORMAT_SORT.OBJECT,
    }
  ) {
    const parsedQuery = parse(q);
    if (parseSortQuery && parsedQuery.sort) {
      if (sortType === constants.FORMAT_SORT.OBJECT) {
        const sortOpts = {};
        for (const s in parsedQuery.sort as any) {
          const sort = String(parsedQuery.sort[s]).split(':');
          sortOpts[sort[0]] = sort[1];
        }
        parsedQuery.sort = sortOpts;
      } else if (
        parsedQuery.sort &&
        parseSortQuery &&
        sortType === constants.FORMAT_SORT.QUERY
      ) {
        let sorts = ``;
        for (const s in parsedQuery.sort as any) {
          const sort = String(parsedQuery.sort[s]).split(':');
          sorts += `${sort[0]} ${sort[1]},`;
        }
        parsedQuery.sort = sorts.slice(0, -1);
      }
    }
    if (defaultValue && Object.values(defaultValue).length > 0) {
      for (const key in defaultValue) {
        if (!parsedQuery[key]) {
          parsedQuery[key] = defaultValue[key];
        }
      }
    }
    return parsedQuery;
  }

  static formatPagination({
    take = 10,
    skip = 1,
  }: {
    readonly take: number;
    readonly skip: number;
  }) {
    return {
      take: take,
      skip: (skip - 1) * take,
    };
  }
}

export default HttpFormatUtils;
