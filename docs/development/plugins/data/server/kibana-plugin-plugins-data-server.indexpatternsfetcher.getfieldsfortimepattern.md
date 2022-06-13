<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-plugins-data-server](./kibana-plugin-plugins-data-server.md) &gt; [IndexPatternsFetcher](./kibana-plugin-plugins-data-server.indexpatternsfetcher.md) &gt; [getFieldsForTimePattern](./kibana-plugin-plugins-data-server.indexpatternsfetcher.getfieldsfortimepattern.md)

## IndexPatternsFetcher.getFieldsForTimePattern() method

Get a list of field objects for a time pattern

<b>Signature:</b>

```typescript
getFieldsForTimePattern(options: {
        pattern: string;
        metaFields: string[];
        lookBack: number;
        interval: string;
    }): Promise<FieldDescriptor[]>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  options | <code>{</code><br/><code>        pattern: string;</code><br/><code>        metaFields: string[];</code><br/><code>        lookBack: number;</code><br/><code>        interval: string;</code><br/><code>    }</code> |  |

<b>Returns:</b>

`Promise<FieldDescriptor[]>`
