import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => readFileSync(join(root, file), 'utf8');

const html = read('index.html');

test('la landing enlaza la política de privacidad y los términos', () => {
  assert.ok(existsSync(join(root, 'privacidad.html')), 'Falta privacidad.html');
  assert.ok(existsSync(join(root, 'terminos.html')), 'Falta terminos.html');

  assert.match(html, /href="privacidad\.html"/);
  assert.match(html, /href="terminos\.html"/);
});

test('la landing avisa de que Aura es una IA antes de abrir la demo', () => {
  assert.match(html, /Aura es una inteligencia artificial/i);
  assert.match(html, /no es una persona/i);
  assert.match(html, /puede equivocarse/i);
});

test('la landing tiene un pie con enlaces legales y contacto', () => {
  assert.match(html, /<footer[^>]*class="footer"/);
  assert.match(html, /Política de privacidad/);
  assert.match(html, /Términos de uso/);
  assert.match(html, /hola@taridev\.com/);
});

test('privacidad.html declara responsable, datos, terceros y derechos', () => {
  const page = read('privacidad.html');

  assert.match(page, /<html lang="es">/);
  assert.match(page, /taridev/);
  assert.match(page, /localStorage/i);
  assert.match(page, /proveedores tecnológicos externos/i);
  assert.match(page, /uso interno/i);
  assert.match(page, /14 años/);
  assert.match(page, /derechos/i);
  assert.match(page, /hola@taridev\.com/);
});

test('terminos.html describe el uso aceptable y los límites de la IA', () => {
  const page = read('terminos.html');

  assert.match(page, /<html lang="es">/);
  assert.match(page, /Aura/);
  assert.match(page, /inteligencia artificial/i);
  assert.match(page, /no es una persona/i);
  assert.match(page, /puede equivocarse/i);
  assert.match(page, /14 años/);
  assert.match(page, /taridev/);
});

test('las páginas legales vuelven a la landing', () => {
  for (const file of ['privacidad.html', 'terminos.html']) {
    const page = read(file);
    assert.match(page, /href="(\.\/)?index\.html"/, `${file} no vuelve al inicio`);
  }
});

test('no se nombra al proveedor de IA en los textos públicos', () => {
  for (const file of ['index.html', 'privacidad.html', 'terminos.html']) {
    assert.doesNotMatch(read(file), /groq/i, `${file} nombra a Groq`);
  }
});
