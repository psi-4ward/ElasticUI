﻿module elasticui.controllers {
    export interface IIndexScope extends IFilteredScope {
        indexVM: IIndexViewModel;
    }

    export interface IIndexViewModel {
        query: any;
        sort: any;
        loaded: boolean;
        loading: boolean;
        page: number;
        index: string;
        pageCount: number;
        pageSize: number;
        results: any;
        addAggregationProvider: (any) => void;
        refresh: () => void;
    }
}