
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
    'index.csr.html': {size: 7080, hash: '8b0d2f96de0ed1c36636e14500be31a51e4113f0e4558352f6f08b032462cd07', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1254, hash: '764dec2243cbfd835c2a43bec1f81093f26b7c4e0e07c085baf20406b1c8a661', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 27583, hash: 'c92e3bfb26ac5eaa65541721b8fe258589bcafb523b4a58180ffde7676e8f8e5', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 27530, hash: '01a39aba15361eb87babfd1298909030490324e2ad9f0aa6b725535e6e4e1d21', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'semanas/index.html': {size: 21301, hash: '0838eef0d602f059b784b3a3ddbbccf0005ae69b38d88cd73665042f1376646f', text: () => import('./assets-chunks/semanas_index_html.mjs').then(m => m.default)},
    'semanas/3/index.html': {size: 16788, hash: '6cbf21681985c6a19b1b0a58e27d43355b0cec47d092f91ce6927d9901bd9a76', text: () => import('./assets-chunks/semanas_3_index_html.mjs').then(m => m.default)},
    'semanas/2/index.html': {size: 16735, hash: 'be7e774f42355ab63f44f21fec9cf5145bc3dd9f2900eec36d6d15ce99300528', text: () => import('./assets-chunks/semanas_2_index_html.mjs').then(m => m.default)},
    'semanas/4/index.html': {size: 18158, hash: 'ececbc0e56b2668ca89dfa9968586d3972767d4bfdc165a001f0555eb90123ab', text: () => import('./assets-chunks/semanas_4_index_html.mjs').then(m => m.default)},
    'semanas/1/index.html': {size: 17057, hash: '9c166a759b2587d3ff2ff378fbdddee108381856952b467566943c721ca44f59', text: () => import('./assets-chunks/semanas_1_index_html.mjs').then(m => m.default)},
    'semanas/7/index.html': {size: 18663, hash: '38e03a7664680b74d10885f798bf3e026f929a356d5943bd0ab331ad9d779c7d', text: () => import('./assets-chunks/semanas_7_index_html.mjs').then(m => m.default)},
    'semanas/9/index.html': {size: 10574, hash: 'b0570488df2e40a3f95cc5b7cf37f1affc9c483d7548b6653217ec90f9156004', text: () => import('./assets-chunks/semanas_9_index_html.mjs').then(m => m.default)},
    'semanas/5/index.html': {size: 18145, hash: '9843227d3b80378ffac6b70e6aa8ec2c06c01b4d4bb3e2b840ee4b6338b27639', text: () => import('./assets-chunks/semanas_5_index_html.mjs').then(m => m.default)},
    'semanas/8/index.html': {size: 17148, hash: 'cf5d3deb6c4a1ba646c3bc80fc39d448f96b12a28ab25a2a5aa1e034e8430c04', text: () => import('./assets-chunks/semanas_8_index_html.mjs').then(m => m.default)},
    'semanas/6/index.html': {size: 17459, hash: 'e9441acb248333b84cb563dd9c803ec969d197e0ebf715489d27cf72409655e0', text: () => import('./assets-chunks/semanas_6_index_html.mjs').then(m => m.default)},
    'reflexion/index.html': {size: 17801, hash: 'e434a1743d9144425f2a17c7606372653d661e1c0c588808fed58f5c0cba3df2', text: () => import('./assets-chunks/reflexion_index_html.mjs').then(m => m.default)},
    'bibliografia/index.html': {size: 17768, hash: 'fde022f94654724bd50da609261ea37565e197caab373cbdb3424d0c78f1e08b', text: () => import('./assets-chunks/bibliografia_index_html.mjs').then(m => m.default)},
    'styles-YNY3HH5E.css': {size: 19997, hash: '20p7GArVP/o', text: () => import('./assets-chunks/styles-YNY3HH5E_css.mjs').then(m => m.default)}
  },
};
