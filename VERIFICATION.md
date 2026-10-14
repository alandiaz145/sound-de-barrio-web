# Verificación — 14 de octubre de 2026

- Build y comprobaciones de rutas/SEO: pasan.
- Revisión visual: escritorio (1265 px) y móvil (390 px).
- Móvil: sin desbordamiento horizontal; menú abre, navega a Música y se cierra; aria-expanded se actualiza.
- Ninguna imagen cargada rota durante la revisión.
- Foto principal a 960 px: 98,5 KB. CSS y JS locales ligeros; la sección de videos ahora carga además el reproductor de YouTube.
- Fotografías originales preservadas byte por byte; manifest con SHA-256. 10 nombres, 9 fotos únicas.
- Canonical, Open Graph absoluto, Twitter Card y MusicGroup con URL: presentes en dist/index.html. Sitemap y robots se generan con la URL configurada.
- Los enlaces del artista en Spotify y Apple Music se verificaron mediante fuentes públicas. Enlaces de canciones y álbumes provienen de páginas de Spotify; contrataciones de la página pública de Parulo Producciones.
- No se ha ejecutado Lighthouse ni obtenido métricas reales de Core Web Vitals. La auditoría de rendimiento final depende del despliegue.
- Publicación confirmada en GitHub Pages: https://alandiaz145.github.io/sound-de-barrio-web/. Repositorio: https://github.com/alandiaz145/sound-de-barrio-web. El workflow inicial terminó correctamente en build y deploy (ejecución 38650134861).
- Faltan los restantes 5 archivos y el logo oficial para completar la identidad solicitada.
- Revisión editorial: frases de la primera versión sustituidas por textos directos. Biografía sustentada en Parulo Producciones; año de formación omitido por diferencias entre fuentes.
- Último video: verificado en el canal oficial de YouTube, orden Más recientes. ID `ieLvWEjeDYk`, “Y tu te vas, Luna”.
- Reproducción integrada comprobada: elemento video con paused=false y currentTime mayor a 11 segundos, duración 299,581 segundos.
- Selector de sesiones: cambia iframe, título, enlace de respaldo y aria-pressed.
- El build genera el ZIP de prensa; validado con Python zipfile, comprobando CRC y que las 10 fotos extraídas sean idénticas a los originales.

