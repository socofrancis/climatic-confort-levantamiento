# Cuestionario Climatic Confort Home — puesta en marcha

El cliente llena la página, presiona **Enviar respuestas**, y todo cae solo en una
hoja de cálculo en tu Google Drive. Además te llega un correo con el resumen.

## Paso 1 — Crear el receptor (5 min, una sola vez)

1. Entra a **https://script.google.com** con `socomefrancis@gmail.com`.
2. Botón **Nuevo proyecto**.
3. Arriba a la izquierda, donde dice *Proyecto sin título*, ponle
   `Levantamiento Climatic Confort`.
4. Borra todo lo que hay en el editor y pega completo el contenido de
   `apps-script/Codigo.gs`.
5. Guarda (Ctrl+S).
6. Botón azul **Implementar → Nueva implementación**.
   - Junto a *Seleccionar tipo* (el engranaje), elige **Aplicación web**.
   - Descripción: `v1`
   - **Ejecutar como:** Yo (socomefrancis@gmail.com)
   - **Quién tiene acceso:** **Cualquier persona** ← importante, si no el cliente no puede enviar
   - **Implementar**.
7. Google va a pedir permisos: **Autorizar acceso** → elige tu cuenta →
   *Configuración avanzada* → *Ir a Levantamiento Climatic Confort (no seguro)* →
   **Permitir**. (Esa advertencia sale siempre con scripts propios, es normal.)
8. Copia la **URL de la aplicación web**. Se ve así:
   `https://script.google.com/macros/s/AKfycb.../exec`

## Paso 2 — Pegarla en la página

Pásame esa URL. Yo la pongo en la página y publico.
(Si lo haces tú: en `web/index.html` busca `__ENDPOINT__` y sustitúyelo por la URL.)

## Paso 3 — Ver las respuestas

- La hoja de cálculo se crea sola con el primer envío, en la raíz de tu Drive:
  **Levantamiento Climatic Confort — Respuestas**.
- También te llega un correo con el resumen completo apenas él le da Enviar.
- Para pasármelo a mí: me dices "lee la hoja" y yo la abro por el conector de Drive,
  o me reenvías el correo.

## Si algo falla

- **El cliente dice que no envía:** revisa que en la implementación esté
  *Quién tiene acceso: Cualquier persona*. Si lo cambias, hay que crear una
  **implementación nueva** (o *Administrar implementaciones → editar → Nueva versión*)
  y la URL puede cambiar.
- La página tiene respaldo: si el envío falla, le muestra el texto al cliente para
  que lo copie y te lo mande por WhatsApp.

## Archivos

| Archivo | Qué es |
|---|---|
| `web/index.html` | La página que se publica (GitHub Pages) |
| `cuestionario.html` | Versión Artifact, sin envío automático |
| `apps-script/Codigo.gs` | El receptor que guarda en Google Sheets |
| `logo.png`, `logo-web.png` | Logo extraído del PDF del cliente |
