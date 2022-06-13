<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-plugins-data-public](./kibana-plugin-plugins-data-public.md) &gt; [SavedQueryService](./kibana-plugin-plugins-data-public.savedqueryservice.md)

## SavedQueryService interface

<b>Signature:</b>

```typescript
export interface SavedQueryService 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [deleteSavedQuery](./kibana-plugin-plugins-data-public.savedqueryservice.deletesavedquery.md) | <code>(id: string) =&gt; Promise&lt;{}&gt;</code> |  |
|  [findSavedQueries](./kibana-plugin-plugins-data-public.savedqueryservice.findsavedqueries.md) | <code>(searchText?: string, perPage?: number, activePage?: number) =&gt; Promise&lt;{</code><br/><code>        total: number;</code><br/><code>        queries: SavedQuery[];</code><br/><code>    }&gt;</code> |  |
|  [getAllSavedQueries](./kibana-plugin-plugins-data-public.savedqueryservice.getallsavedqueries.md) | <code>() =&gt; Promise&lt;SavedQuery[]&gt;</code> |  |
|  [getSavedQuery](./kibana-plugin-plugins-data-public.savedqueryservice.getsavedquery.md) | <code>(id: string) =&gt; Promise&lt;SavedQuery&gt;</code> |  |
|  [getSavedQueryCount](./kibana-plugin-plugins-data-public.savedqueryservice.getsavedquerycount.md) | <code>() =&gt; Promise&lt;number&gt;</code> |  |
|  [saveQuery](./kibana-plugin-plugins-data-public.savedqueryservice.savequery.md) | <code>(attributes: SavedQueryAttributes, config?: {</code><br/><code>        overwrite: boolean;</code><br/><code>    }) =&gt; Promise&lt;SavedQuery&gt;</code> |  |
