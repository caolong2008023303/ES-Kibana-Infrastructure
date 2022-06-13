/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { elasticsearchServiceMock } from '../../elasticsearch/elasticsearch_service.mock';

export const MockLegacyScopedClusterClient = jest.fn();
export const legacyClusterClientInstanceMock = elasticsearchServiceMock.createLegacyScopedClusterClient();
jest.doMock('../../elasticsearch/legacy/scoped_cluster_client', () => ({
  LegacyScopedClusterClient: MockLegacyScopedClusterClient.mockImplementation(
    () => legacyClusterClientInstanceMock
  ),
}));

jest.doMock('elasticsearch', () => {
  const realES = jest.requireActual('elasticsearch');
  return {
    ...realES,
    // eslint-disable-next-line object-shorthand
    Client: function () {
      return elasticsearchServiceMock.createLegacyElasticsearchClient();
    },
  };
});

export const MockElasticsearchClient = jest.fn();
jest.doMock('@elastic/elasticsearch', () => {
  const real = jest.requireActual('@elastic/elasticsearch');
  return {
    ...real,
    Client: MockElasticsearchClient,
  };
});
