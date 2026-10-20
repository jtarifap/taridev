import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');

test('la landing incluye la sección de planes preparada para ocultarse', () => {
  assert.match(html, /id="planes"/);
  assert.match(html, /<section class="pricing-section" id="planes" data-pricing/);
  assert.match(html, /href="#planes" data-pricing/);
  assert.match(html, /TARIDEV_SHOW_PRICING/);
  assert.match(html, /pricing-hidden/);
});

test('la landing explica demo, piloto e implantación', () => {
  const textos = [
    'Demo interactiva',
    'Piloto 30 días',
    'Implantación',
    '299 €',
    'No toca tus datos',
    'Si quieres que Aura use los datos de tu empresa, ya no es una demo: es un piloto.'
  ];

  for (const texto of textos) {
    assert.ok(html.includes(texto), `Falta: ${texto}`);
  }
});

test('la landing muestra los precios acordados', () => {
  const precios = [
    '490 €',
    '149 €/mes',
    '990 €',
    '349 €/mes',
    '1.900 €',
    '690 €/mes',
    '4.900 €',
    '1.500 €/mes'
  ];

  for (const precio of precios) {
    assert.ok(html.includes(precio), `Falta: ${precio}`);
  }
});

test('la landing incluye FAQ de demo y piloto', () => {
  assert.match(html, /¿Qué diferencia hay entre demo y piloto\?/);
  assert.match(html, /¿El piloto se descuenta\?/);
  assert.match(html, /¿Qué pasa si no continúo después del piloto\?/);
});

test('la landing define la conversación facturable y el exceso', () => {
  assert.match(html, /¿Qué cuenta como conversación\?/);
  assert.match(html, /10 minutos y 10 mensajes del usuario/);
  assert.match(html, /5 minutos de inactividad/);
  assert.match(html, /¿Qué pasa si supero las conversaciones incluidas\?/);
  assert.match(html, /0,15 € \+ IVA/);
});

test('la landing no promete aislamiento absoluto', () => {
  assert.doesNotMatch(html, /100\s*%\s*blindad/i);
});
