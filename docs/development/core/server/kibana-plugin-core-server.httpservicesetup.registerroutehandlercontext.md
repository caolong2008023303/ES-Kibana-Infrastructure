<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-core-server](./kibana-plugin-core-server.md) &gt; [HttpServiceSetup](./kibana-plugin-core-server.httpservicesetup.md) &gt; [registerRouteHandlerContext](./kibana-plugin-core-server.httpservicesetup.registerroutehandlercontext.md)

## HttpServiceSetup.registerRouteHandlerContext property

Register a context provider for a route handler.

<b>Signature:</b>

```typescript
registerRouteHandlerContext: <T extends keyof RequestHandlerContext>(contextName: T, provider: RequestHandlerContextProvider<T>) => RequestHandlerContextContainer;
```

## Example


```ts
 // my-plugin.ts
 deps.http.registerRouteHandlerContext(
   'myApp',
   (context, req) => {
    async function search (id: string) {
      return await context.elasticsearch.client.asCurrentUser.find(id);
    }
    return { search };
   }
 );

// my-route-handler.ts
 router.get({ path: '/', validate: false }, async (context, req, res) => {
   const response = await context.myApp.search(...);
   return res.ok(response);
 });

```
