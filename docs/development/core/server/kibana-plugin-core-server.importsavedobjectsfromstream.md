<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-core-server](./kibana-plugin-core-server.md) &gt; [importSavedObjectsFromStream](./kibana-plugin-core-server.importsavedobjectsfromstream.md)

## importSavedObjectsFromStream() function

Import saved objects from given stream. See the [options](./kibana-plugin-core-server.savedobjectsimportoptions.md) for more detailed information.

<b>Signature:</b>

```typescript
export declare function importSavedObjectsFromStream({ readStream, objectLimit, overwrite, createNewCopies, savedObjectsClient, typeRegistry, namespace, }: SavedObjectsImportOptions): Promise<SavedObjectsImportResponse>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  { readStream, objectLimit, overwrite, createNewCopies, savedObjectsClient, typeRegistry, namespace, } | <code>SavedObjectsImportOptions</code> |  |

<b>Returns:</b>

`Promise<SavedObjectsImportResponse>`
