# Sound de Barrio — web

Web estática responsive inspirada en la estructura de elapacheness.com. HTML semántico, CSS y JavaScript mínimo, sin dependencias. El reproductor de YouTube se carga de forma diferida al acercarse a la sección de videos.

## Ejecutar

Requiere Node.js 20.11 o superior.

```sh
npm run build
npm test
npm run dev
```

Abrir http://127.0.0.1:4173. Contrataciones enlaza al canal público de Parulo Producciones. La música enlaza a las plataformas; los videos se reproducen dentro de la página, con opción de abrir YouTube; las fotos se descargan desde archivos originales.

## Publicar

El workflow `.github/workflows/pages.yml` construye, verifica y despliega `dist/` con cada push a `main`. En **Settings → Pages → Build and deployment**, seleccionar **GitHub Actions**. La URL prevista es https://alandiaz145.github.io/sound-de-barrio-web/; el código no implica que ya esté publicado.

## Dominio propio

1. Configurar variables del repositorio: `SITE_URL=https://tudominio.com/` y `CUSTOM_DOMAIN=tudominio.com` (sustituir por el dominio real).
2. Configurar el dominio en Settings → Pages y seguir los registros DNS que indique GitHub.
3. Volver a ejecutar el workflow. El build genera canonical, OG absoluto, JSON-LD, sitemap, robots y CNAME con el dominio seleccionado.
4. Activar HTTPS una vez emitido el certificado, verificar la propiedad en Search Console y enviar `/sitemap.xml`. El dominio propio permite servir `robots.txt` desde la raíz; en la URL de proyecto de GitHub Pages el archivo queda bajo `/sound-de-barrio-web/`, y el robots de la raíz del alojamiento no pertenece a este repositorio.

## Contenido y recursos

Fuentes públicas detalladas en `fuentes.html`. No hay métricas de audiencia, fechas futuras de eventos, condiciones del show o teléfonos inventados. La biografía usa datos de Parulo Producciones y el catálogo de las plataformas. Se omite el año de formación porque las fuentes difieren. Argentina, Bolivia y Brasil corresponden a los contactos de contrataciones de la productora; no se afirma una gira específica.

Último video verificado el 14 de octubre de 2026 en el canal oficial, pestaña Videos ordenada por Más recientes: `ieLvWEjeDYk`, “Y tu te vas, Luna”. El reproductor permite elegir otras sesiones. Para actualizarlo, cambiar el iframe inicial y el botón Último video en `index.html`; no se actualiza automáticamente ni usa credenciales de YouTube.

Se recuperaron 10 archivos por nombre del chat original; `Sound de Barrio 3.png` y `Sound de Barrio 3(1).png` son idénticos. Los 10 originales están en `press/` y en el ZIP; la galería muestra 9 imágenes únicas. `asset-manifest.json` incluye nombres, dimensiones y SHA-256. Las copias WebP solo se redimensionan/comprimen; caras y marcas no se retocan. La cabecera textual es provisional hasta recibir el logo original. Faltan los demás archivos del conjunto solicitado de 15.

## Rendimiento y accesibilidad

Imagen principal con preload, fetchpriority y srcset. Galería, fotos secundarias y reproductor de YouTube con carga diferida, dimensiones explícitas; sin fuentes externas. No se reproduce video al entrar: requiere interacción. El texto y video inicial están disponibles sin JavaScript; el selector de sesiones requiere JavaScript. Menú móvil con aria-expanded, Escape y foco visible, enlace para saltar al contenido y respeto a reduced-motion. El build verifica rutas y SEO. Los Core Web Vitals reales requieren medición una vez desplegada la web; no se prometen resultados sin medir.

## Pendientes editoriales

- Recibir los 5 archivos restantes y el logo oficial, y aprobar contacto de contrataciones.
- Confirmar el año de formación si se desea incluirlo.
- Elegir dominio y configurar DNS; validar funcionamiento y rendimiento del alojamiento final.
