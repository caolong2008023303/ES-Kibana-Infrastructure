<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-plugins-data-server](./kibana-plugin-plugins-data-server.md) &gt; [getDefaultSearchParams](./kibana-plugin-plugins-data-server.getdefaultsearchparams.md)

## getDefaultSearchParams() function

<b>Signature:</b>

```typescript
export declare function getDefaultSearchParams(uiSettingsClient: IUiSettingsClient): Promise<{
    maxConcurrentShardRequests: number | undefined;
    ignoreThrottled: boolean;
    ignoreUnavailable: boolean;
    trackTotalHits: boolean;
}>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  uiSettingsClient | <code>IUiSettingsClient</code> |  |

<b>Returns:</b>

`Promise<{
    maxConcurrentShardRequests: number | undefined;
    ignoreThrottled: boolean;
    ignoreUnavailable: boolean;
    trackTotalHits: boolean;
}>`
