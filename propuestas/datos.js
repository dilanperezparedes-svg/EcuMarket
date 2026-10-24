// Datos de muestra para las propuestas (prendas reales en stock). La página final los leerá del Excel.
var MUESTRA = [
  { id: 'P5-23', marca: 'Nike', talla: '37', precio: 60, foto: '12LTrNb5q74XA9yma89FlAjQEdMRMC0r2' },
  { id: 'P2-11', marca: 'Zara', talla: 'M', precio: 25, foto: '12MP__3-15pF2OKbaHhV5oY3-1a1MWX0w' },
  { id: 'P5-15', marca: 'Nike', talla: '35.5', precio: 60, foto: '1QexB_o_sf8OWEcz_Ks0FFtgO3hKz8IKt' },
  { id: 'P3-03', marca: 'Stradivarius', talla: 'M', precio: 20, foto: '14vmBMai5_mdk2zd45hYVWfanGzYcHoGN' },
  { id: 'P5-04', marca: 'Zara', talla: 'S', precio: 25, foto: '1K5xrWHdx1lqs926k3r-Gc5KG6RwarRrN' },
  { id: 'P5-01', marca: 'Zara', talla: '33', precio: 22, foto: '1EqNxidB-Y4KGVCQcRlBrgspJPx1hzmon' },
  { id: 'P2-01', marca: 'Zara', talla: 'M', precio: 20, foto: '1onnqTKxJieOP4XijNmH6tFOGv6MJcav4' },
  { id: 'P2-08', marca: 'Stradivarius', talla: 'S', precio: 15, foto: '1wJpBufVGwLzwEEbwjtA490ewkDX0tJh4' }
];
function fotoUrl(id, w) { return 'https://drive.google.com/thumbnail?id=' + id + '&sz=w' + (w || 600); }
var BROCHA = 'M18 70 C70 40 160 30 260 28 C360 26 470 18 585 34 C596 60 590 90 594 120 C590 160 596 190 580 214 C470 226 360 222 250 224 C150 226 70 232 10 208 C2 180 14 150 6 120 C2 100 10 86 18 70 Z';
var WA = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z"/></svg>';
