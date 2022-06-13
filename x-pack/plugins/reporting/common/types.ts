/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

// eslint-disable-next-line @kbn/eslint/no-restricted-paths
export { ReportingConfigType } from '../server/config';
// eslint-disable-next-line @kbn/eslint/no-restricted-paths
import { LayoutParams } from '../server/lib/layouts';
export { LayoutParams };
// eslint-disable-next-line @kbn/eslint/no-restricted-paths
export { ReportDocument, ReportSource } from '../server/lib/store/report';
// eslint-disable-next-line @kbn/eslint/no-restricted-paths
export { BaseParams } from '../server/types';

export type JobId = string;
export type JobStatus =
  | 'completed'
  | 'completed_with_warnings'
  | 'pending'
  | 'processing'
  | 'failed';

export interface JobContent {
  content: string;
}

export interface ReportApiJSON {
  id: string;
  index: string;
  kibana_name: string;
  kibana_id: string;
  browser_type: string | undefined;
  created_at: string;
  priority?: number;
  jobtype: string;
  created_by: string | false;
  timeout?: number;
  output?: {
    content_type: string;
    size: number;
    warnings?: string[];
  };
  process_expiration?: string;
  completed_at: string | undefined;
  payload: {
    layout?: LayoutParams;
    title: string;
    browserTimezone?: string;
  };
  meta: {
    layout?: string;
    objectType: string;
  };
  max_attempts: number;
  started_at: string | undefined;
  attempts: number;
  status: string;
}

export interface PollerOptions {
  functionToPoll: () => Promise<any>;
  pollFrequencyInMillis: number;
  trailing?: boolean;
  continuePollingOnError?: boolean;
  pollFrequencyErrorMultiplier?: number;
  successFunction?: (...args: any) => any;
  errorFunction?: (error: Error) => any;
}

export interface LicenseCheckResults {
  enableLinks: boolean;
  showLinks: boolean;
  message: string;
}