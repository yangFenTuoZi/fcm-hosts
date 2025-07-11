export const providers = {
  aliyun: {
    type: "https",
    server: "https://dns.alidns.com/dns-query",
    cacheSize: 1e3
  },
  usa: {
    type: "https",
    server: "https://1.1.1.1/dns-query",
    cacheSize: 1e3
  },
  quad9: {
    type: "https",
    server: "https://9.9.9.9/dns-query",
    cacheSize: 1e3
  },
  rubyfish: {
    type: "https",
    server: "https://rubyfish.cn/dns-query",
    cacheSize: 1e3
  },
  iqDNS: {
    type: 'https',
    server: 'https://i.passcloud.xyz/dns-query',
    cacheSize: 1e3
  }
}

export const githubUrls = [  'mtalk.google.com',
  'alt1-mtalk.google.com',
  'alt2-mtalk.google.com',
  'alt3-mtalk.google.com',
  'alt4-mtalk.google.com',
  'alt5-mtalk.google.com',
  'alt6-mtalk.google.com',
  'alt7-mtalk.google.com',
  'alt8-mtalk.google.com',
  'dl.google.com',
  'dl.l.google.com'
];
