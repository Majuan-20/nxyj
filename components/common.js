/**
 * 宁夏药监局数据中台 - 通用组件库
 * Common Components & Utilities
 */

// ============================================
// 图标库 (Heroicons风格SVG)
// ============================================
const Icons = {
  // 导航图标
  home: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,

  dashboard: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>`,

  chart: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,

  table: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`,

  document: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,

  clipboard: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>`,

  search: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`,

  filter: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>`,

  download: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>`,

  upload: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>`,

  plus: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`,

  edit: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,

  trash: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,

  eye: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,

  check: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`,

  x: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`,

  bell: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>`,

  user: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,

  users: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`,

  settings: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,

  logout: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>`,

  menu: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>`,

  chevronDown: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>`,

  chevronRight: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>`,

  calendar: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,

  location: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,

  shield: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,

  alert: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`,

  refresh: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`,

  fullscreen: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>`,

  minimize: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>`,

  trendUp: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`,

  trendDown: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/></svg>`,

  more: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/></svg>`,

  database: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>`,

  server: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>`,

  link: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>`,

  map: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7"/></svg>`,

  robot: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,

  report: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,

  // 业务模块图标
  approval: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,

  supervision: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>`,

  inspection: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>`,

  enforcement: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>`,

  credit: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>`,

  trace: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>`,

  pharmacy: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>`,

  risk: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`,

  intelligence: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,

  governance: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>`,

  security: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>`,

  operations: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`
};

// ============================================
// 工具函数
// ============================================

const Utils = {
  // 日期格式化
  formatDate(date, format = 'YYYY-MM-DD') {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');

    return format
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hours)
      .replace('mm', minutes)
      .replace('ss', seconds);
  },

  // 数字格式化（千分位）
  formatNumber(num, decimals = 0) {
    if (num === null || num === undefined) return '-';
    return Number(num).toLocaleString('zh-CN', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  },

  // 百分比格式化
  formatPercent(num, decimals = 1) {
    if (num === null || num === undefined) return '-';
    return (num * 100).toFixed(decimals) + '%';
  },

  // 货币格式化
  formatCurrency(num, currency = '¥') {
    if (num === null || num === undefined) return '-';
    return currency + this.formatNumber(num, 2);
  },

  // 文件大小格式化
  formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  },

  // 生成唯一ID
  generateId(prefix = 'id') {
    return prefix + '_' + Math.random().toString(36).substr(2, 9);
  },

  // 防抖函数
  debounce(fn, delay = 300) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  },

  // 节流函数
  throttle(fn, limit = 300) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        fn.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // 深拷贝
  deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  },

  // 数组分组
  groupBy(array, key) {
    return array.reduce((result, item) => {
      const group = item[key];
      result[group] = result[group] || [];
      result[group].push(item);
      return result;
    }, {});
  },

  // 数组去重
  unique(array, key) {
    if (key) {
      const seen = new Set();
      return array.filter(item => {
        const val = item[key];
        if (seen.has(val)) return false;
        seen.add(val);
        return true;
      });
    }
    return [...new Set(array)];
  },

  // 生成随机数据（用于演示）
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  randomFloat(min, max, decimals = 2) {
    const num = Math.random() * (max - min) + min;
    return Number(num.toFixed(decimals));
  },

  // 颜色生成
  randomColor() {
    const colors = ['#0EA5E9', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#6366F1'];
    return colors[Math.floor(Math.random() * colors.length)];
  },

  // 延迟执行
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  // 下载文件
  downloadFile(content, filename, type = 'text/plain') {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  // 导出CSV
  exportCSV(data, filename = 'export.csv') {
    if (!data || data.length === 0) return;

    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row => headers.map(h => {
        const val = row[h];
        const str = val === null || val === undefined ? '' : String(val);
        return `"${str.replace(/"/g, '""')}"`;
      }).join(','))
    ].join('\n');

    const BOM = '\uFEFF';
    this.downloadFile(BOM + csvContent, filename, 'text/csv;charset=utf-8;');
  },

  // 导出JSON
  exportJSON(data, filename = 'export.json') {
    const jsonContent = JSON.stringify(data, null, 2);
    this.downloadFile(jsonContent, filename, 'application/json');
  }
};

// ============================================
// 模拟数据生成器
// ============================================

const MockData = {
  // 行政区划
  regions: [
    { code: '640000', name: '宁夏回族自治区', level: 1 },
    { code: '640100', name: '银川市', level: 2, parent: '640000' },
    { code: '640104', name: '兴庆区', level: 3, parent: '640100' },
    { code: '640105', name: '西夏区', level: 3, parent: '640100' },
    { code: '640106', name: '金凤区', level: 3, parent: '640100' },
    { code: '640121', name: '永宁县', level: 3, parent: '640100' },
    { code: '640122', name: '贺兰县', level: 3, parent: '640100' },
    { code: '640181', name: '灵武市', level: 3, parent: '640100' },
    { code: '640200', name: '石嘴山市', level: 2, parent: '640000' },
    { code: '640202', name: '大武口区', level: 3, parent: '640200' },
    { code: '640205', name: '惠农区', level: 3, parent: '640200' },
    { code: '640221', name: '平罗县', level: 3, parent: '640200' },
    { code: '640300', name: '吴忠市', level: 2, parent: '640000' },
    { code: '640302', name: '利通区', level: 3, parent: '640300' },
    { code: '640303', name: '红寺堡区', level: 3, parent: '640300' },
    { code: '640323', name: '盐池县', level: 3, parent: '640300' },
    { code: '640324', name: '同心县', level: 3, parent: '640300' },
    { code: '640381', name: '青铜峡市', level: 3, parent: '640300' },
    { code: '640400', name: '固原市', level: 2, parent: '640000' },
    { code: '640402', name: '原州区', level: 3, parent: '640400' },
    { code: '640422', name: '西吉县', level: 3, parent: '640400' },
    { code: '640423', name: '隆德县', level: 3, parent: '640400' },
    { code: '640424', name: '泾源县', level: 3, parent: '640400' },
    { code: '640425', name: '彭阳县', level: 3, parent: '640400' },
    { code: '640500', name: '中卫市', level: 2, parent: '640000' },
    { code: '640502', name: '沙坡头区', level: 3, parent: '640500' },
    { code: '640521', name: '中宁县', level: 3, parent: '640500' },
    { code: '640522', name: '海原县', level: 3, parent: '640500' }
  ],

  // 企业类型
  enterpriseTypes: [
    { code: 'manufacturer', name: '药品生产企业' },
    { code: 'distributor', name: '药品经营企业' },
    { code: 'pharmacy', name: '零售药店' },
    { code: 'medical', name: '医疗机构' },
    { code: 'cosmetics', name: '化妆品企业' },
    { code: 'device', name: '医疗器械企业' }
  ],

  // 生成KPI数据
  generateKPIData() {
    return {
      totalEnterprises: Utils.randomInt(2800, 3200),
      newLicenses: Utils.randomInt(45, 85),
      inspections: Utils.randomInt(1200, 1800),
      warnings: Utils.randomInt(15, 45),
      cases: Utils.randomInt(8, 25),
      creditA: Utils.randomInt(1800, 2200),
      creditB: Utils.randomInt(400, 600),
      creditC: Utils.randomInt(80, 150),
      creditD: Utils.randomInt(20, 50)
    };
  },

  // 生成趋势数据
  generateTrendData(days = 30) {
    const data = [];
    const today = new Date();
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      data.push({
        date: Utils.formatDate(date, 'MM-DD'),
        value: Utils.randomInt(20, 80),
        value2: Utils.randomInt(15, 70)
      });
    }
    return data;
  },

  // 生成表格数据
  generateTableData(count = 20, type = 'enterprise') {
    const data = [];
    const types = this.enterpriseTypes;
    const regions = this.regions.filter(r => r.level === 3);

    for (let i = 0; i < count; i++) {
      const item = {
        id: Utils.generateId('ENT'),
        name: `企业名称${String(i + 1).padStart(3, '0')}`,
        type: types[Utils.randomInt(0, types.length - 1)].name,
        region: regions[Utils.randomInt(0, regions.length - 1)].name,
        creditLevel: ['A', 'A', 'A', 'B', 'B', 'C', 'D'][Utils.randomInt(0, 6)],
        status: ['正常', '正常', '正常', '异常', '整改中'][Utils.randomInt(0, 4)],
        registerDate: Utils.formatDate(new Date(2020 + Utils.randomInt(0, 4), Utils.randomInt(0, 11), Utils.randomInt(1, 28))),
        lastInspection: Utils.formatDate(new Date(2024, Utils.randomInt(0, 11), Utils.randomInt(1, 28)))
      };

      if (type === 'warning') {
        item.level = ['一般', '较重', '严重', '重大'][Utils.randomInt(0, 3)];
        item.category = ['质量异常', '证照过期', '抽检不合格', '投诉举报'][Utils.randomInt(0, 3)];
        item.time = Utils.formatDate(new Date(), 'YYYY-MM-DD HH:mm');
      }

      data.push(item);
    }
    return data;
  },

  // 生成预警数据
  generateWarningData(count = 10) {
    const warnings = [];
    const categories = ['质量异常', '证照过期', '抽检不合格', '投诉举报', '风险评分异常'];
    const levels = [
      { name: '一般', color: '#10B981' },
      { name: '较重', color: '#F59E0B' },
      { name: '严重', color: '#F97316' },
      { name: '重大', color: '#DC2626' }
    ];

    for (let i = 0; i < count; i++) {
      const level = levels[Utils.randomInt(0, 3)];
      warnings.push({
        id: Utils.generateId('WARN'),
        title: `${categories[Utils.randomInt(0, 4)]}预警`,
        level: level.name,
        levelColor: level.color,
        source: ['日常监管', '检验检测', '投诉举报', '系统监测'][Utils.randomInt(0, 3)],
        time: Utils.formatDate(new Date(Date.now() - Utils.randomInt(0, 86400000 * 7)), 'MM-DD HH:mm'),
        status: ['未处置', '处置中', '已处置', '已忽略'][Utils.randomInt(0, 3)],
        region: this.regions.filter(r => r.level === 3)[Utils.randomInt(0, 20)].name
      });
    }
    return warnings.sort((a, b) => {
      const levelOrder = { '重大': 0, '严重': 1, '较重': 2, '一般': 3 };
      return levelOrder[a.level] - levelOrder[b.level];
    });
  },

  // 生成待办数据
  generateTodoData() {
    return [
      { id: 1, type: 'approval', title: '药品经营许可证审批', deadline: '2024-12-20', priority: 'high' },
      { id: 2, type: 'warning', title: '抽检不合格产品处置', deadline: '2024-12-18', priority: 'urgent' },
      { id: 3, type: 'inspection', title: '年度监督检查计划', deadline: '2024-12-25', priority: 'normal' },
      { id: 4, type: 'case', title: '行政处罚案件审核', deadline: '2024-12-19', priority: 'high' },
      { id: 5, type: 'credit', title: '企业信用等级评定', deadline: '2024-12-22', priority: 'normal' }
    ];
  }
};

// ============================================
// 组件渲染器
// ============================================

const Components = {
  // 渲染图标
  renderIcon(name, className = '') {
    const icon = Icons[name];
    return icon ? `<span class="icon ${className}">${icon}</span>` : '';
  },

  // 渲染KPI卡片
  renderKPICard({ title, value, change, changeType = 'up', icon, onClick }) {
    const changeClass = changeType === 'up' ? 'up' : 'down';
    const changeIcon = changeType === 'up' ? 'trendUp' : 'trendDown';
    const clickAttr = onClick ? `onclick="${onClick}"` : '';

    return `
      <div class="kpi-card" ${clickAttr}>
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm text-slate-500">${title}</span>
          ${icon ? this.renderIcon(icon, 'w-5 h-5 text-slate-400') : ''}
        </div>
        <div class="kpi-value">${value}</div>
        ${change ? `
          <div class="kpi-change ${changeClass} flex items-center gap-1">
            ${this.renderIcon(changeIcon, 'w-3 h-3')}
            <span>${change}</span>
          </div>
        ` : ''}
      </div>
    `;
  },

  // 渲染状态徽章
  renderBadge(text, type = 'neutral') {
    const typeMap = {
      '正常': 'success',
      '异常': 'danger',
      '整改中': 'warning',
      '待审核': 'info',
      '已通过': 'success',
      '已拒绝': 'danger',
      '未处置': 'danger',
      '处置中': 'warning',
      '已处置': 'success',
      '已忽略': 'neutral',
      'A': 'success',
      'B': 'info',
      'C': 'warning',
      'D': 'danger'
    };

    const badgeType = typeMap[text] || type;
    return `<span class="badge badge-${badgeType}">${text}</span>`;
  },

  // 渲染风险等级徽章
  renderRiskBadge(level) {
    const levelMap = {
      '一般': 'risk-normal',
      '较重': 'risk-medium',
      '严重': 'risk-high',
      '重大': 'risk-critical'
    };
    return `<span class="badge badge-${levelMap[level] || 'neutral'}">${level}</span>`;
  },

  // 渲染数据表格
  renderDataTable({ columns, data, sortable = true, onRowClick }) {
    const thead = columns.map(col => `
      <th class="${sortable ? 'sortable' : ''}" ${sortable ? `onclick="TableSort.sort(this, '${col.key}')"` : ''}>
        ${col.title}
      </th>
    `).join('');

    const tbody = data.map((row, index) => {
      const clickAttr = onRowClick ? `onclick="${onRowClick}(${index})"` : '';
      const cells = columns.map(col => {
        let value = row[col.key];
        if (col.formatter) {
          value = col.formatter(value, row);
        }
        return `<td>${value !== undefined ? value : '-'}</td>`;
      }).join('');

      return `<tr ${clickAttr} style="${onRowClick ? 'cursor: pointer;' : ''}">${cells}</tr>`;
    }).join('');

    return `
      <table class="data-table">
        <thead><tr>${thead}</tr></thead>
        <tbody>${tbody}</tbody>
      </table>
    `;
  },

  // 渲染分页
  renderPagination({ current, total, pageSize = 10, onChange }) {
    const totalPages = Math.ceil(total / pageSize);
    if (totalPages <= 1) return '';

    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= current - 1 && i <= current + 1)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }

    const pageButtons = pages.map(p => {
      if (p === '...') {
        return `<span class="px-2 text-slate-400">...</span>`;
      }
      const activeClass = p === current ? 'active' : '';
      return `<button class="pagination-btn ${activeClass}" onclick="${onChange}(${p})">${p}</button>`;
    }).join('');

    return `
      <div class="pagination">
        <div class="pagination-info">显示 ${(current - 1) * pageSize + 1} - ${Math.min(current * pageSize, total)} 条，共 ${total} 条</div>
        <div class="pagination-controls">
          <button class="pagination-btn" ${current === 1 ? 'disabled' : ''} onclick="${onChange}(${current - 1})">
            ${this.renderIcon('chevronRight', 'w-4 h-4 rotate-180')}
          </button>
          ${pageButtons}
          <button class="pagination-btn" ${current === totalPages ? 'disabled' : ''} onclick="${onChange}(${current + 1})">
            ${this.renderIcon('chevronRight', 'w-4 h-4')}
          </button>
        </div>
      </div>
    `;
  },

  // 渲染筛选栏
  renderFilterBar(filters) {
    const filterHtml = filters.map(f => `
      <div class="filter-group">
        <label class="filter-label">${f.label}</label>
        ${f.type === 'select' ? `
          <select class="form-select" onchange="${f.onChange}(this.value)">
            ${f.options.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}
          </select>
        ` : f.type === 'date' ? `
          <input type="date" class="form-input" onchange="${f.onChange}(this.value)">
        ` : f.type === 'daterange' ? `
          <div class="flex gap-2">
            <input type="date" class="form-input" onchange="${f.onChange}(this.value, 'start')">
            <input type="date" class="form-input" onchange="${f.onChange}(this.value, 'end')">
          </div>
        ` : `
          <input type="text" class="form-input" placeholder="${f.placeholder || ''}" onkeyup="${f.onChange}(this.value)">
        `}
      </div>
    `).join('');

    return `
      <div class="filter-bar">
        ${filterHtml}
        <div class="flex gap-2 ml-auto">
          <button class="btn btn-secondary" onclick="resetFilters()">
            ${this.renderIcon('refresh', 'w-4 h-4')} 重置
          </button>
          <button class="btn btn-primary" onclick="applyFilters()">
            ${this.renderIcon('search', 'w-4 h-4')} 查询
          </button>
        </div>
      </div>
    `;
  },

  // 渲染标签页
  renderTabs({ tabs, activeTab, onChange }) {
    const tabHtml = tabs.map(tab => `
      <div class="tab ${tab.id === activeTab ? 'active' : ''}" onclick="${onChange}('${tab.id}')">
        ${tab.label}
      </div>
    `).join('');

    return `<div class="tabs">${tabHtml}</div>`;
  },

  // 渲染模态框
  renderModal({ id, title, content, footer, show = false }) {
    const displayClass = show ? 'active' : '';
    return `
      <div id="${id}" class="modal-backdrop ${displayClass}" onclick="if(event.target===this)Modal.close('${id}')">
        <div class="modal">
          <div class="modal-header">
            <h3 class="modal-title">${title}</h3>
            <div class="modal-close" onclick="Modal.close('${id}')">
              ${this.renderIcon('x', 'w-5 h-5')}
            </div>
          </div>
          <div class="modal-body">${content}</div>
          ${footer ? `<div class="modal-footer">${footer}</div>` : ''}
        </div>
      </div>
    `;
  },

  // 渲染预警列表
  renderWarningList(warnings, limit = 5) {
    return warnings.slice(0, limit).map(w => `
      <div class="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors" onclick="viewWarning('${w.id}')">
        <div class="w-2 h-2 rounded-full mt-2" style="background-color: ${w.levelColor}"></div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-sm font-medium text-slate-900 truncate">${w.title}</span>
            ${this.renderRiskBadge(w.level)}
          </div>
          <div class="flex items-center gap-4 text-xs text-slate-500">
            <span>${w.source}</span>
            <span>${w.region}</span>
            <span>${w.time}</span>
          </div>
        </div>
        ${this.renderBadge(w.status)}
      </div>
    `).join('');
  },

  // 渲染待办列表
  renderTodoList(todos) {
    const priorityColors = {
      urgent: 'text-red-600 bg-red-50',
      high: 'text-orange-600 bg-orange-50',
      normal: 'text-blue-600 bg-blue-50'
    };

    return todos.map(todo => `
      <div class="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors border border-transparent hover:border-slate-200">
        <div class="w-2 h-2 rounded-full ${priorityColors[todo.priority].split(' ')[0].replace('text', 'bg')}"></div>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-medium text-slate-900 truncate">${todo.title}</div>
          <div class="text-xs text-slate-500 mt-0.5">截止: ${todo.deadline}</div>
        </div>
        <span class="text-xs px-2 py-1 rounded ${priorityColors[todo.priority]}">
          ${todo.priority === 'urgent' ? '紧急' : todo.priority === 'high' ? '高' : '普通'}
        </span>
      </div>
    `).join('');
  }
};

// ============================================
// 全局状态管理
// ============================================

const Store = {
  state: {
    user: {
      name: '张管理员',
      role: '系统管理员',
      region: '640000',
      permissions: ['*']
    },
    currentRegion: '640000',
    timeRange: 'month',
    theme: 'light'
  },

  listeners: {},

  set(key, value) {
    this.state[key] = value;
    this.emit(key, value);
  },

  get(key) {
    return this.state[key];
  },

  subscribe(key, callback) {
    if (!this.listeners[key]) {
      this.listeners[key] = [];
    }
    this.listeners[key].push(callback);
  },

  emit(key, value) {
    if (this.listeners[key]) {
      this.listeners[key].forEach(cb => cb(value));
    }
  }
};

// ============================================
// 模态框管理
// ============================================

const Modal = {
  open(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  },

  close(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
};

// ============================================
// 表格排序
// ============================================

const TableSort = {
  sort(th, key) {
    const table = th.closest('table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const isAsc = !th.classList.contains('asc');

    // 清除其他列的排序状态
    table.querySelectorAll('th').forEach(h => {
      h.classList.remove('asc', 'desc');
    });

    th.classList.add(isAsc ? 'asc' : 'desc');

    rows.sort((a, b) => {
      const aVal = a.cells[th.cellIndex].textContent.trim();
      const bVal = b.cells[th.cellIndex].textContent.trim();

      const aNum = parseFloat(aVal);
      const bNum = parseFloat(bVal);

      if (!isNaN(aNum) && !isNaN(bNum)) {
        return isAsc ? aNum - bNum : bNum - aNum;
      }

      return isAsc ? aVal.localeCompare(bVal, 'zh') : bVal.localeCompare(aVal, 'zh');
    });

    rows.forEach(row => tbody.appendChild(row));
  }
};

// ============================================
// 图表主题配置
// ============================================

const ChartTheme = {
  colors: ['#0EA5E9', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#6366F1', '#14B8A6'],

  commonOption: {
    textStyle: {
      fontFamily: 'Fira Sans, sans-serif'
    },
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#E2E8F0',
      borderWidth: 1,
      textStyle: { color: '#1E293B' },
      extraCssText: 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border-radius: 8px;'
    },
    legend: {
      textStyle: { color: '#64748B' }
    }
  }
};

// ============================================
// 导出模块
// ============================================

window.Icons = Icons;
window.Utils = Utils;
window.MockData = MockData;
window.Components = Components;
window.Store = Store;
window.Modal = Modal;
window.TableSort = TableSort;
window.ChartTheme = ChartTheme;

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  console.log('宁夏药监局数据中台 - 组件库已加载');
});
