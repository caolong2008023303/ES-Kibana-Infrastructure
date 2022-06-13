<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-core-server](./kibana-plugin-core-server.md) &gt; [OpsOsMetrics](./kibana-plugin-core-server.opsosmetrics.md)

## OpsOsMetrics interface

OS related metrics

<b>Signature:</b>

```typescript
export interface OpsOsMetrics 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [cpu](./kibana-plugin-core-server.opsosmetrics.cpu.md) | <code>{</code><br/><code>        control_group: string;</code><br/><code>        cfs_period_micros: number;</code><br/><code>        cfs_quota_micros: number;</code><br/><code>        stat: {</code><br/><code>            number_of_elapsed_periods: number;</code><br/><code>            number_of_times_throttled: number;</code><br/><code>            time_throttled_nanos: number;</code><br/><code>        };</code><br/><code>    }</code> | cpu cgroup metrics, undefined when not running in a cgroup |
|  [cpuacct](./kibana-plugin-core-server.opsosmetrics.cpuacct.md) | <code>{</code><br/><code>        control_group: string;</code><br/><code>        usage_nanos: number;</code><br/><code>    }</code> | cpu accounting metrics, undefined when not running in a cgroup |
|  [distro](./kibana-plugin-core-server.opsosmetrics.distro.md) | <code>string</code> | The os distrib. Only present for linux platforms |
|  [distroRelease](./kibana-plugin-core-server.opsosmetrics.distrorelease.md) | <code>string</code> | The os distrib release, prefixed by the os distrib. Only present for linux platforms |
|  [load](./kibana-plugin-core-server.opsosmetrics.load.md) | <code>{</code><br/><code>        '1m': number;</code><br/><code>        '5m': number;</code><br/><code>        '15m': number;</code><br/><code>    }</code> | cpu load metrics |
|  [memory](./kibana-plugin-core-server.opsosmetrics.memory.md) | <code>{</code><br/><code>        total_in_bytes: number;</code><br/><code>        free_in_bytes: number;</code><br/><code>        used_in_bytes: number;</code><br/><code>    }</code> | system memory usage metrics |
|  [platform](./kibana-plugin-core-server.opsosmetrics.platform.md) | <code>NodeJS.Platform</code> | The os platform |
|  [platformRelease](./kibana-plugin-core-server.opsosmetrics.platformrelease.md) | <code>string</code> | The os platform release, prefixed by the platform name |
|  [uptime\_in\_millis](./kibana-plugin-core-server.opsosmetrics.uptime_in_millis.md) | <code>number</code> | the OS uptime |
