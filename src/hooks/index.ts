import {
    PageData
} from '../types';

type FakeFunc<T> = () => T;
const fakeFuncInst: FakeFunc<any> = () => {};

export const usePageData: FakeFunc<PageData> = fakeFuncInst;

