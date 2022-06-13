/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { compileFormattingRules } from '../message';
import { filebeatAuditdRules } from './filebeat_auditd';

const { format } = compileFormattingRules(filebeatAuditdRules);

describe('Filebeat Rules', () => {
  describe('in ECS format', () => {
    test('auditd log with outcome', () => {
      const flattenedDocument = {
        '@timestamp': ['2016-12-07T02:17:21.515Z'],
        'auditd.log.addr': ['96.241.146.97'],
        'auditd.log.cipher': ['chacha20-poly1305@openssh.com'],
        'auditd.log.direction': ['from-server'],
        'auditd.log.ksize': ['512'],
        'auditd.log.laddr': ['10.142.0.2'],
        'auditd.log.lport': ['22'],
        'auditd.log.pfs': ['curve25519-sha256@libssh.org'],
        'auditd.log.rport': ['63927'],
        'auditd.log.sequence': [406],
        'auditd.log.ses': ['4294967295'],
        'auditd.log.spid': ['1299'],
        'auditd.log.subj': ['system_u:system_r:sshd_t:s0-s0:c0.c1023'],
        'ecs.version': ['1.0.0-beta2'],
        'event.action': ['crypto_session'],
        'event.dataset': ['auditd.log'],
        'event.module': ['auditd'],
        'event.outcome': ['success'],
        'fileset.name': ['log'],
        'input.type': ['log'],
        'log.offset': [783],
        message: ['op=start'],
        'process.executable': ['/usr/sbin/sshd'],
        'process.pid': [1298],
        'service.type': ['auditd'],
        'user.audit.id': ['4294967295'],
        'user.id': ['0'],
        'user.saved.id': ['74'],
      };

      expect(format(flattenedDocument, {})).toMatchInlineSnapshot(`
        Array [
          Object {
            "constant": "[AuditD][",
          },
          Object {
            "field": "event.action",
            "highlights": Array [],
            "value": Array [
              "crypto_session",
            ],
          },
          Object {
            "constant": "]",
          },
          Object {
            "constant": " ",
          },
          Object {
            "field": "event.outcome",
            "highlights": Array [],
            "value": Array [
              "success",
            ],
          },
          Object {
            "constant": " ",
          },
          Object {
            "constant": "user",
          },
          Object {
            "constant": "=",
          },
          Object {
            "field": "user.audit.id",
            "highlights": Array [],
            "value": Array [
              "4294967295",
            ],
          },
          Object {
            "field": "user.id",
            "highlights": Array [],
            "value": Array [
              "0",
            ],
          },
          Object {
            "field": "user.saved.id",
            "highlights": Array [],
            "value": Array [
              "74",
            ],
          },
          Object {
            "constant": " ",
          },
          Object {
            "constant": "process",
          },
          Object {
            "constant": "=",
          },
          Object {
            "field": "process.executable",
            "highlights": Array [],
            "value": Array [
              "/usr/sbin/sshd",
            ],
          },
          Object {
            "field": "process.pid",
            "highlights": Array [],
            "value": Array [
              1298,
            ],
          },
          Object {
            "constant": " ",
          },
          Object {
            "field": "auditd.log.addr",
            "highlights": Array [],
            "value": Array [
              "96.241.146.97",
            ],
          },
          Object {
            "field": "auditd.log.cipher",
            "highlights": Array [],
            "value": Array [
              "chacha20-poly1305@openssh.com",
            ],
          },
          Object {
            "field": "auditd.log.direction",
            "highlights": Array [],
            "value": Array [
              "from-server",
            ],
          },
          Object {
            "field": "auditd.log.ksize",
            "highlights": Array [],
            "value": Array [
              "512",
            ],
          },
          Object {
            "field": "auditd.log.laddr",
            "highlights": Array [],
            "value": Array [
              "10.142.0.2",
            ],
          },
          Object {
            "field": "auditd.log.lport",
            "highlights": Array [],
            "value": Array [
              "22",
            ],
          },
          Object {
            "field": "auditd.log.pfs",
            "highlights": Array [],
            "value": Array [
              "curve25519-sha256@libssh.org",
            ],
          },
          Object {
            "field": "auditd.log.rport",
            "highlights": Array [],
            "value": Array [
              "63927",
            ],
          },
          Object {
            "field": "auditd.log.sequence",
            "highlights": Array [],
            "value": Array [
              406,
            ],
          },
          Object {
            "field": "auditd.log.ses",
            "highlights": Array [],
            "value": Array [
              "4294967295",
            ],
          },
          Object {
            "field": "auditd.log.spid",
            "highlights": Array [],
            "value": Array [
              "1299",
            ],
          },
          Object {
            "field": "auditd.log.subj",
            "highlights": Array [],
            "value": Array [
              "system_u:system_r:sshd_t:s0-s0:c0.c1023",
            ],
          },
          Object {
            "constant": " ",
          },
          Object {
            "field": "message",
            "highlights": Array [],
            "value": Array [
              "op=start",
            ],
          },
        ]
      `);
    });

    test('auditd log without outcome', () => {
      const flattenedDocument = {
        '@timestamp': ['2017-01-31T20:17:14.891Z'],
        'auditd.log.a0': ['9'],
        'auditd.log.a1': ['7f564b2672a0'],
        'auditd.log.a2': ['b8'],
        'auditd.log.a3': ['0'],
        'auditd.log.exit': ['184'],
        'auditd.log.items': ['0'],
        'auditd.log.sequence': [18877199],
        'auditd.log.ses': ['4294967295'],
        'auditd.log.success': ['yes'],
        'auditd.log.syscall': ['44'],
        'auditd.log.tty': ['(none)'],
        'ecs.version': ['1.0.0-beta2'],
        'event.action': ['syscall'],
        'event.dataset': ['auditd.log'],
        'event.module': ['auditd'],
        'fileset.name': ['log'],
        'host.architecture': ['x86_64'],
        'input.type': ['log'],
        'log.offset': [174],
        'process.executable': ['/usr/libexec/strongswan/charon (deleted)'],
        'process.name': ['charon'],
        'process.pid': [1281],
        'process.ppid': [1240],
        'service.type': ['auditd'],
        'user.audit.id': ['4294967295'],
        'user.effective.group.id': ['0'],
        'user.effective.id': ['0'],
        'user.filesystem.group.id': ['0'],
        'user.filesystem.id': ['0'],
        'user.group.id': ['0'],
        'user.id': ['0'],
        'user.saved.group.id': ['0'],
        'user.saved.id': ['0'],
      };

      expect(format(flattenedDocument, {})).toMatchInlineSnapshot(`
        Array [
          Object {
            "constant": "[AuditD][",
          },
          Object {
            "field": "event.action",
            "highlights": Array [],
            "value": Array [
              "syscall",
            ],
          },
          Object {
            "constant": "]",
          },
          Object {
            "constant": " ",
          },
          Object {
            "constant": "user",
          },
          Object {
            "constant": "=",
          },
          Object {
            "field": "user.audit.id",
            "highlights": Array [],
            "value": Array [
              "4294967295",
            ],
          },
          Object {
            "field": "user.effective.group.id",
            "highlights": Array [],
            "value": Array [
              "0",
            ],
          },
          Object {
            "field": "user.effective.id",
            "highlights": Array [],
            "value": Array [
              "0",
            ],
          },
          Object {
            "field": "user.filesystem.group.id",
            "highlights": Array [],
            "value": Array [
              "0",
            ],
          },
          Object {
            "field": "user.filesystem.id",
            "highlights": Array [],
            "value": Array [
              "0",
            ],
          },
          Object {
            "field": "user.group.id",
            "highlights": Array [],
            "value": Array [
              "0",
            ],
          },
          Object {
            "field": "user.id",
            "highlights": Array [],
            "value": Array [
              "0",
            ],
          },
          Object {
            "field": "user.saved.group.id",
            "highlights": Array [],
            "value": Array [
              "0",
            ],
          },
          Object {
            "field": "user.saved.id",
            "highlights": Array [],
            "value": Array [
              "0",
            ],
          },
          Object {
            "constant": " ",
          },
          Object {
            "constant": "process",
          },
          Object {
            "constant": "=",
          },
          Object {
            "field": "process.executable",
            "highlights": Array [],
            "value": Array [
              "/usr/libexec/strongswan/charon (deleted)",
            ],
          },
          Object {
            "field": "process.name",
            "highlights": Array [],
            "value": Array [
              "charon",
            ],
          },
          Object {
            "field": "process.pid",
            "highlights": Array [],
            "value": Array [
              1281,
            ],
          },
          Object {
            "field": "process.ppid",
            "highlights": Array [],
            "value": Array [
              1240,
            ],
          },
          Object {
            "constant": " ",
          },
          Object {
            "field": "auditd.log.a0",
            "highlights": Array [],
            "value": Array [
              "9",
            ],
          },
          Object {
            "field": "auditd.log.a1",
            "highlights": Array [],
            "value": Array [
              "7f564b2672a0",
            ],
          },
          Object {
            "field": "auditd.log.a2",
            "highlights": Array [],
            "value": Array [
              "b8",
            ],
          },
          Object {
            "field": "auditd.log.a3",
            "highlights": Array [],
            "value": Array [
              "0",
            ],
          },
          Object {
            "field": "auditd.log.exit",
            "highlights": Array [],
            "value": Array [
              "184",
            ],
          },
          Object {
            "field": "auditd.log.items",
            "highlights": Array [],
            "value": Array [
              "0",
            ],
          },
          Object {
            "field": "auditd.log.sequence",
            "highlights": Array [],
            "value": Array [
              18877199,
            ],
          },
          Object {
            "field": "auditd.log.ses",
            "highlights": Array [],
            "value": Array [
              "4294967295",
            ],
          },
          Object {
            "field": "auditd.log.success",
            "highlights": Array [],
            "value": Array [
              "yes",
            ],
          },
          Object {
            "field": "auditd.log.syscall",
            "highlights": Array [],
            "value": Array [
              "44",
            ],
          },
          Object {
            "field": "auditd.log.tty",
            "highlights": Array [],
            "value": Array [
              "(none)",
            ],
          },
          Object {
            "constant": " ",
          },
          Object {
            "field": "message",
            "highlights": Array [],
            "value": Array [],
          },
        ]
      `);
    });
  });

  describe('in pre-ECS format', () => {
    test('auditd IPSEC rule', () => {
      const event = {
        '@timestamp': ['2017-01-31T20:17:14.891Z'],
        'auditd.log.auid': ['4294967295'],
        'auditd.log.dst': ['192.168.0.0'],
        'auditd.log.dst_prefixlen': ['16'],
        'auditd.log.op': ['SPD-delete'],
        'auditd.log.record_type': ['MAC_IPSEC_EVENT'],
        'auditd.log.res': ['1'],
        'auditd.log.sequence': [18877201],
        'auditd.log.ses': ['4294967295'],
        'auditd.log.src': ['192.168.2.0'],
        'auditd.log.src_prefixlen': ['24'],
        'ecs.version': ['1.0.0-beta2'],
        'event.dataset': ['auditd.log'],
        'event.module': ['auditd'],
        'fileset.name': ['log'],
        'input.type': ['log'],
        'log.offset': [0],
      };
      const message = format(event, {});
      expect(message).toEqual([
        { constant: '[AuditD][' },
        { field: 'auditd.log.record_type', highlights: [], value: ['MAC_IPSEC_EVENT'] },
        { constant: '] src:' },
        { field: 'auditd.log.src', highlights: [], value: ['192.168.2.0'] },
        { constant: ' dst:' },
        { field: 'auditd.log.dst', highlights: [], value: ['192.168.0.0'] },
        { constant: ' op:' },
        { field: 'auditd.log.op', highlights: [], value: ['SPD-delete'] },
      ]);
    });

    test('AuditD SYSCALL rule', () => {
      const event = {
        '@timestamp': ['2017-01-31T20:17:14.891Z'],
        'auditd.log.a0': ['9'],
        'auditd.log.a1': ['7f564b2672a0'],
        'auditd.log.a2': ['b8'],
        'auditd.log.a3': ['0'],
        'auditd.log.arch': ['x86_64'],
        'auditd.log.auid': ['4294967295'],
        'auditd.log.comm': ['charon'],
        'auditd.log.egid': ['0'],
        'auditd.log.euid': ['0'],
        'auditd.log.exe': ['/usr/libexec/strongswan/charon (deleted)'],
        'auditd.log.exit': ['184'],
        'auditd.log.fsgid': ['0'],
        'auditd.log.fsuid': ['0'],
        'auditd.log.gid': ['0'],
        'auditd.log.items': ['0'],
        'auditd.log.pid': ['1281'],
        'auditd.log.ppid': ['1240'],
        'auditd.log.record_type': ['SYSCALL'],
        'auditd.log.sequence': [18877199],
        'auditd.log.ses': ['4294967295'],
        'auditd.log.sgid': ['0'],
        'auditd.log.success': ['yes'],
        'auditd.log.suid': ['0'],
        'auditd.log.syscall': ['44'],
        'auditd.log.tty': ['(none)'],
        'auditd.log.uid': ['0'],
        'ecs.version': ['1.0.0-beta2'],
        'event.dataset': ['auditd.log'],
        'event.module': ['auditd'],
        'fileset.name': ['log'],
        'input.type': ['log'],
        'log.offset': [174],
      };
      const message = format(event, {});
      expect(message).toEqual([
        { constant: '[AuditD][' },
        { field: 'auditd.log.record_type', highlights: [], value: ['SYSCALL'] },
        { constant: '] exe:' },
        {
          field: 'auditd.log.exe',
          highlights: [],
          value: ['/usr/libexec/strongswan/charon (deleted)'],
        },
        { constant: ' gid:' },
        { field: 'auditd.log.gid', highlights: [], value: ['0'] },
        { constant: ' uid:' },
        { field: 'auditd.log.uid', highlights: [], value: ['0'] },
        { constant: ' tty:' },
        { field: 'auditd.log.tty', highlights: [], value: ['(none)'] },
        { constant: ' pid:' },
        { field: 'auditd.log.pid', highlights: [], value: ['1281'] },
        { constant: ' ppid:' },
        { field: 'auditd.log.ppid', highlights: [], value: ['1240'] },
      ]);
    });

    test('AuditD events with msg rule', () => {
      const event = {
        '@timestamp': ['2017-01-31T20:17:14.891Z'],
        'auditd.log.auid': ['4294967295'],
        'auditd.log.record_type': ['EXAMPLE'],
        'auditd.log.msg': ['some kind of message'],
        'ecs.version': ['1.0.0-beta2'],
        'event.dataset': ['auditd.log'],
        'event.module': ['auditd'],
        'fileset.name': ['log'],
        'input.type': ['log'],
        'log.offset': [174],
      };
      const message = format(event, {});
      expect(message).toEqual([
        { constant: '[AuditD][' },
        { field: 'auditd.log.record_type', highlights: [], value: ['EXAMPLE'] },
        { constant: '] ' },
        {
          field: 'auditd.log.msg',
          highlights: [],
          value: ['some kind of message'],
        },
      ]);
    });

    test('AuditD catchall rule', () => {
      const event = {
        '@timestamp': ['2017-01-31T20:17:14.891Z'],
        'auditd.log.auid': ['4294967295'],
        'auditd.log.record_type': ['EXAMPLE'],
        'ecs.version': ['1.0.0-beta2'],
        'event.dataset': ['auditd.log'],
        'event.module': ['auditd'],
        'fileset.name': ['log'],
        'input.type': ['log'],
        'log.offset': [174],
      };
      const message = format(event, {});
      expect(message).toEqual([
        { constant: '[AuditD][' },
        { field: 'auditd.log.record_type', highlights: [], value: ['EXAMPLE'] },
        { constant: '] Event without message.' },
      ]);
    });
  });
});
