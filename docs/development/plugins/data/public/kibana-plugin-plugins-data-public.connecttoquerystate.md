<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-plugins-data-public](./kibana-plugin-plugins-data-public.md) &gt; [connectToQueryState](./kibana-plugin-plugins-data-public.connecttoquerystate.md)

## connectToQueryState variable

Helper to setup two-way syncing of global data and a state container

<b>Signature:</b>

```typescript
connectToQueryState: <S extends QueryState>({ timefilter: { timefilter }, filterManager, queryString, state$, }: Pick<QueryStart | QuerySetup, 'timefilter' | 'filterManager' | 'queryString' | 'state$'>, stateContainer: BaseStateContainer<S>, syncConfig: {
    time?: boolean;
    refreshInterval?: boolean;
    filters?: FilterStateStore | boolean;
    query?: boolean;
}) => () => void
```