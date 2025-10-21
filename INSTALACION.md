# 📱 Guía de Instalación Detallada

## Requisitos Previos

1. **Revenge Discord instalado** en tu Android
   - Descarga desde: [Revenge Manager](https://github.com/revenge-mod/revenge-manager/releases/latest)
   - O desde: [RevengeXposed](https://github.com/revenge-mod/revenge-xposed/releases/latest) (root)

2. **Discord actualizado** a la última versión compatible

## 🚀 Métodos de Instalación

### Opción 1: Usando GitHub (Más fácil)

#### Paso 1: Subir el plugin a GitHub

1. Ve a [GitHub](https://github.com) y crea una cuenta si no tienes
2. Crea un **nuevo repositorio público**
3. Sube los archivos:
   - `manifest.json`
   - `index.js`
4. Ve al archivo `manifest.json` en GitHub
5. Haz clic en **"Raw"** para obtener la URL directa

#### Paso 2: Instalar en Revenge

1. Abre **Discord con Revenge**
2. Ve a: **⚙️ Configuración** → **Bunny** (o Revenge)
3. Toca **"Plugins"**
4. Toca el botón **"+"** (esquina superior derecha)
5. Pega la URL del `manifest.json` (algo como):
   ```
   https://raw.githubusercontent.com/tu-usuario/tu-repo/main/manifest.json
   ```
6. Toca **"Instalar"**
7. ✅ ¡Listo! Activa el plugin desde la lista

---

### Opción 2: Usando jsDelivr (Recomendado)

Después de subir a GitHub, usa jsDelivr para un CDN más rápido:

```
https://cdn.jsdelivr.net/gh/tu-usuario/tu-repo@main/manifest.json
```

---

### Opción 3: Servidor propio

Si tienes un servidor web o hosting:

1. Sube los archivos a tu servidor
2. Asegúrate de que sean accesibles públicamente
3. Usa la URL completa del `manifest.json`

**Ejemplo:**
```
https://tu-dominio.com/plugins/block-delete-channel/manifest.json
```

---

### Opción 4: Desarrollo Local (Avanzado)

Si quieres modificar el código:

1. **Instala Termux** en Android
2. Instala un servidor HTTP local:
   ```bash
   pkg install python
   python -m http.server 8080
   ```
3. Coloca los archivos en la carpeta del servidor
4. Usa la URL local en Revenge:
   ```
   http://localhost:8080/manifest.json
   ```

---

## ✅ Verificar la Instalación

1. Ve a **Plugins** en Revenge
2. Busca **"Block Delete Channel"**
3. Activa el interruptor
4. Deberías ver un toast: **"✅ Block Delete Channel activado"**

---

## 🧪 Probar el Plugin

1. Ve a cualquier servidor donde seas admin
2. Entra a **Ajustes del Canal** (toca el nombre del canal)
3. Busca el botón **"Delete Channel"** → **No debería aparecer**
4. Mantén presionado un canal → **No debería haber opción de eliminar**

---

## 🔄 Actualizar el Plugin

### Si usaste GitHub/jsDelivr:

1. Actualiza los archivos en tu repositorio
2. En Revenge, ve al plugin
3. Toca **"Refetch"** o **"Actualizar"**

### Si usaste instalación local:

1. Desactiva el plugin
2. Elimínalo
3. Vuelve a instalarlo con el código actualizado

---

## ❌ Solución de Problemas

### El plugin no aparece en la lista

- Verifica que la URL del `manifest.json` sea accesible
- Abre la URL en un navegador para confirmar
- Asegúrate de que el JSON sea válido

### El plugin no se activa

- Revisa los logs de Revenge (si están disponibles)
- Asegúrate de tener la última versión de Revenge
- Intenta reiniciar Discord

### Los botones siguen apareciendo

- Verifica que el plugin esté activado
- Reinicia Discord completamente
- El plugin puede necesitar actualizarse si Discord cambió

### Error al instalar

```
Error: Failed to fetch plugin
```

**Soluciones:**
1. Verifica tu conexión a internet
2. Asegúrate de que la URL sea HTTPS (no HTTP)
3. Confirma que el servidor esté respondiendo

---

## 📤 Hosting Gratuito Recomendado

Para hostear tu plugin gratis:

1. **GitHub Pages** (Recomendado)
   - Gratis
   - Rápido
   - Fácil de usar

2. **GitLab Pages**
   - Similar a GitHub
   - También gratis

3. **Cloudflare Pages**
   - Muy rápido
   - CDN global

4. **jsDelivr CDN**
   - Usa GitHub como backend
   - Extremadamente rápido

---

## 🔐 Seguridad

- Solo instala plugins de **fuentes confiables**
- Revisa el código antes de instalar
- No instales plugins de URLs sospechosas
- Este plugin **no recopila datos** ni envía información

---

## 💡 Consejos

1. **Usa jsDelivr con GitHub** para mejor rendimiento
2. **Documenta tus cambios** si modificas el código
3. **Haz backup** de tu configuración de Revenge
4. **Únete al Discord de Revenge** para soporte

---

## 🆘 ¿Necesitas Ayuda?

- [Discord de Revenge](https://discord.gg/revenge-mod)
- [Issues en GitHub](https://github.com/revenge-mod/revenge-bundle/issues)
- [Documentación Oficial](https://revenge-mod.github.io/)

---

**✨ ¡Disfruta de tu Discord sin preocuparte por eliminar canales accidentalmente!**
