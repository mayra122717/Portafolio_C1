
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://mayra122717.github.io/Portafolio_C1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portafolio_C1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Y4JNCM4L.js"
    ],
    "route": "/Portafolio_C1/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6E23RVML.js"
    ],
    "route": "/Portafolio_C1/semanas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MYU5TBBR.js"
    ],
    "route": "/Portafolio_C1/semanas/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XBOET6X2.js"
    ],
    "route": "/Portafolio_C1/semanas/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XBOET6X2.js"
    ],
    "route": "/Portafolio_C1/semanas/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XBOET6X2.js"
    ],
    "route": "/Portafolio_C1/semanas/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XBOET6X2.js"
    ],
    "route": "/Portafolio_C1/semanas/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XBOET6X2.js"
    ],
    "route": "/Portafolio_C1/semanas/6"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XBOET6X2.js"
    ],
    "route": "/Portafolio_C1/semanas/7"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XBOET6X2.js"
    ],
    "route": "/Portafolio_C1/semanas/8"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XBOET6X2.js"
    ],
    "route": "/Portafolio_C1/semanas/9"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6IHJHNXJ.js"
    ],
    "route": "/Portafolio_C1/reflexion"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UXQQ72AJ.js"
    ],
    "route": "/Portafolio_C1/bibliografia"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Portafolio_C1/home",
    "route": "/Portafolio_C1/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7080, hash: '7f0f277f826048369478ee25c57d939edb92543a6d819714548f6c0daf4b7c9b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1254, hash: '28556ead09485bd43d55b9a37ac585783f1a7316d13eff3eb1a8f18aef432555', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 27583, hash: '00b461f03459c4a17eddad826a1e364fe2b0a3b717bdc76760012a47851e36e1', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 27530, hash: 'e3d49b6017f0187f6e8b46ef39afb80d0ff800cec4180c74a7ce95c430849adb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'semanas/index.html': {size: 21301, hash: '7d2b37c9054b10203caceab7aebaf45c1fce3fd26601279345d480d4d311ce4a', text: () => import('./assets-chunks/semanas_index_html.mjs').then(m => m.default)},
    'semanas/3/index.html': {size: 16788, hash: '843f336334c55c46467294789f6c524dd83d8561eeb226596e345c72f6611723', text: () => import('./assets-chunks/semanas_3_index_html.mjs').then(m => m.default)},
    'semanas/2/index.html': {size: 16735, hash: '1bf8d180f6cca8d91bab358fd3db5c6f5b182649aef094cd743686dcf036ca41', text: () => import('./assets-chunks/semanas_2_index_html.mjs').then(m => m.default)},
    'semanas/4/index.html': {size: 18158, hash: '0fa7ae4ec9c36be45d098d500f142a708836119b70244e9e484f35843ccee5ec', text: () => import('./assets-chunks/semanas_4_index_html.mjs').then(m => m.default)},
    'semanas/1/index.html': {size: 17057, hash: '1baa40bf1feec1fbdb516f6b90a586ca43cea6d7b331efb887949dc502a872c9', text: () => import('./assets-chunks/semanas_1_index_html.mjs').then(m => m.default)},
    'semanas/7/index.html': {size: 18663, hash: 'aca54be14cac0656fb51fb3a96f7b62aab7ca9d8e4acffa07358021ce3b62093', text: () => import('./assets-chunks/semanas_7_index_html.mjs').then(m => m.default)},
    'semanas/9/index.html': {size: 10574, hash: '10cf32e095d6c674a5bdda5696ea721268ff7cae502087a8caa95017f0298c40', text: () => import('./assets-chunks/semanas_9_index_html.mjs').then(m => m.default)},
    'semanas/5/index.html': {size: 18145, hash: 'caa595d7d37730795bb64dafb56c5da997adba33c7994027d5b2f7f4757fa1b1', text: () => import('./assets-chunks/semanas_5_index_html.mjs').then(m => m.default)},
    'semanas/8/index.html': {size: 17148, hash: '18838ea1bb0f5de2c05863beece3c322eeca9b209eea5ecb7a759881bec189f2', text: () => import('./assets-chunks/semanas_8_index_html.mjs').then(m => m.default)},
    'semanas/6/index.html': {size: 17459, hash: 'f55cc7bbdc6eccf090bc442436f44232f663a95c7e06863e8018f29f0cf07c40', text: () => import('./assets-chunks/semanas_6_index_html.mjs').then(m => m.default)},
    'reflexion/index.html': {size: 17801, hash: '7e4afaf006e806b37081086ab0e81aec271da6c8cf0fa236c51694f23c4d12bd', text: () => import('./assets-chunks/reflexion_index_html.mjs').then(m => m.default)},
    'bibliografia/index.html': {size: 17768, hash: '948342b92f7e2fd09b6eb809b50d1d0c107344ed0dae129b0a0343e99ded668d', text: () => import('./assets-chunks/bibliografia_index_html.mjs').then(m => m.default)},
    'styles-25BWYSNT.css': {size: 19964, hash: 'bkq0oHEfPOA', text: () => import('./assets-chunks/styles-25BWYSNT_css.mjs').then(m => m.default)}
  },
};
