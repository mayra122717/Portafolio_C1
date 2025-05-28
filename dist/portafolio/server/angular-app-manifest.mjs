
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://JoseChahuayo.github.io/MayraPortafolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/MayraPortafolio"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Y4JNCM4L.js"
    ],
    "route": "/MayraPortafolio/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IZQBLYS2.js"
    ],
    "route": "/MayraPortafolio/semanas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MYU5TBBR.js"
    ],
    "route": "/MayraPortafolio/semanas/1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XBOET6X2.js"
    ],
    "route": "/MayraPortafolio/semanas/2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XBOET6X2.js"
    ],
    "route": "/MayraPortafolio/semanas/3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XBOET6X2.js"
    ],
    "route": "/MayraPortafolio/semanas/4"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XBOET6X2.js"
    ],
    "route": "/MayraPortafolio/semanas/5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XBOET6X2.js"
    ],
    "route": "/MayraPortafolio/semanas/6"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XBOET6X2.js"
    ],
    "route": "/MayraPortafolio/semanas/7"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XBOET6X2.js"
    ],
    "route": "/MayraPortafolio/semanas/8"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6IHJHNXJ.js"
    ],
    "route": "/MayraPortafolio/reflexion"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UXQQ72AJ.js"
    ],
    "route": "/MayraPortafolio/bibliografia"
  },
  {
    "renderMode": 2,
    "redirectTo": "/MayraPortafolio/home",
    "route": "/MayraPortafolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6984, hash: 'f1c327f1efa4ab7076ff232a18a58c5b60772dc3b035c2c3f982a69bfdb65340', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1257, hash: '3bdf0c42ffaeae8c10fc6a95fb3a69363045761f9183fc2db9ccc6e2ffaad1cc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 27481, hash: 'c7b072fe544e7a680e15bff4914deb38c6b673d1f598da098cb9b068dae72539', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'semanas/index.html': {size: 20836, hash: '7ad2e042279d94827956fa34875af939b0fab747083f3a2a9cb5cdd4f4aea6fe', text: () => import('./assets-chunks/semanas_index_html.mjs').then(m => m.default)},
    'index.html': {size: 27428, hash: 'f8bbee6a30c47ccbbc0531fcb02360b00050821c25943060b1871ce186e1f051', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'semanas/3/index.html': {size: 16686, hash: 'be4f5b9e28cd93265b6c1b5aa762817525299df621eb729d015833a19d1708d0', text: () => import('./assets-chunks/semanas_3_index_html.mjs').then(m => m.default)},
    'semanas/2/index.html': {size: 16633, hash: '72a89e76583e735ab8b08170634a9f69de9b5e98f803a9616cea37ee99107140', text: () => import('./assets-chunks/semanas_2_index_html.mjs').then(m => m.default)},
    'semanas/4/index.html': {size: 18056, hash: 'a4a8608060e9e9dc4cd38bb06c8d7f1b1d637f5d8fcbfab8a702a33552695a69', text: () => import('./assets-chunks/semanas_4_index_html.mjs').then(m => m.default)},
    'semanas/1/index.html': {size: 16955, hash: '79e05823681ebce5d981c0a0e2dec694a95bb8f139e4ea8e91a60c594d633df3', text: () => import('./assets-chunks/semanas_1_index_html.mjs').then(m => m.default)},
    'semanas/7/index.html': {size: 18561, hash: '2c2ce6e916ecc9016f674405780832a5a37a32c6a47558467c088a121c5bd2f4', text: () => import('./assets-chunks/semanas_7_index_html.mjs').then(m => m.default)},
    'semanas/5/index.html': {size: 18043, hash: 'ee4db6a7d25e6975461d2711db97d075b4c17f9f8cdce3726faa73dc4ffb2181', text: () => import('./assets-chunks/semanas_5_index_html.mjs').then(m => m.default)},
    'semanas/8/index.html': {size: 17046, hash: 'f93997f6f02826837ef30537542f10612a281ab2a5150bc4fef681d4321d85a2', text: () => import('./assets-chunks/semanas_8_index_html.mjs').then(m => m.default)},
    'semanas/6/index.html': {size: 17357, hash: '55d297e6b3b9514a206b0daaa8db9de24b1d5c212015607f80cfa92dac3d305b', text: () => import('./assets-chunks/semanas_6_index_html.mjs').then(m => m.default)},
    'reflexion/index.html': {size: 17699, hash: '13f7b0b171f62db9e8f0eeba322aa5249ba29bf8716dd6260fca193f9391633c', text: () => import('./assets-chunks/reflexion_index_html.mjs').then(m => m.default)},
    'bibliografia/index.html': {size: 17666, hash: 'a7c69f293a2704379b11ae54cc893e280b4f15dac67450122c08264e45c37853', text: () => import('./assets-chunks/bibliografia_index_html.mjs').then(m => m.default)},
    'styles-NJXA25IM.css': {size: 18509, hash: 'jFw4005x/F4', text: () => import('./assets-chunks/styles-NJXA25IM_css.mjs').then(m => m.default)}
  },
};
