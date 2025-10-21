# 🛡️ Block Delete Channel - Revenge Plugin

Plugin para **Revenge Discord (Android)** que bloquea completamente la eliminación de canales.

## ✨ Características

- ✅ Oculta botones de "Delete Channel" en ajustes de canal
- ✅ Bloquea opciones de eliminar en menús contextuales (long press)
- ✅ Intercepta llamadas a la API de eliminación de canales
- ✅ Previene modales de confirmación de eliminación
- ✅ Muestra notificaciones cuando se intenta eliminar un canal

## 📦 Instalación

### Método 1: URL directa (Recomendado)

1. Abre **Discord con Revenge instalado**
2. Ve a: **Configuración de Usuario** → **Bunny/Revenge** → **Plugins**
3. Toca el botón **"+"** o **"Install a plugin"**
4. Pega la URL de tu plugin (necesitas hostear los archivos en GitHub, jsDelivr, etc.)

### Método 2: Desarrollo local

1. Clona o descarga este repositorio
2. Sube los archivos a un servidor web o GitHub
3. Usa la URL del `manifest.json` para instalarlo

### Método 3: Desarrollo directo

1. Copia el contenido de `index.js`
2. En Revenge, crea un nuevo plugin local
3. Pega el código

## 🔧 Uso

Una vez instalado:

1. **Activa el plugin** desde la lista de plugins en Revenge
2. El plugin se activará automáticamente y bloqueará:
   - Botones de eliminar en ajustes de canal
   - Opciones de menú contextual
   - Llamadas directas a la API de eliminación
   - Modales de confirmación

3. Verás un toast de confirmación: **"✅ Block Delete Channel activado"**

## 🛠️ Desinstalación

1. Ve a **Plugins** en Revenge
2. Desactiva o elimina **"Block Delete Channel"**
3. Los cambios se revertirán automáticamente

## ⚠️ Notas Importantes

- Este plugin **no modifica** los permisos del servidor
- Solo oculta/bloquea la interfaz en tu cliente
- Los administradores con permisos aún pueden eliminar canales desde otros dispositivos
- Compatible con **Revenge v1.7.0+**

## 🐛 Problemas Conocidos

- Algunos elementos pueden no ocultarse si Discord actualiza su estructura
- El plugin puede necesitar actualizaciones tras cambios en Discord

## 📝 Estructura del Código

```javascript
onLoad()              // Se ejecuta al activar el plugin
├─ patchChannelSettings()    // Oculta botones en ajustes
├─ patchContextMenu()        // Filtra menús contextuales
├─ patchChannelDeletion()    // Bloquea API de eliminación
└─ patchConfirmationModal()  // Previene modales

onUnload()            // Se ejecuta al desactivar el plugin
```

## 🔗 Recursos

- [Revenge Discord](https://github.com/revenge-mod/revenge-bundle)
- [Revenge Manager](https://github.com/revenge-mod/revenge-manager)
- [Documentación de Plugins](https://revenge-mod.github.io/)

## 📄 Licencia

Este plugin es de código abierto y puede ser modificado libremente.

## 👤 Autor

Creado por: **Alejandro**

---

**⚡ Hecho con ❤️ para la comunidad de Revenge Discord**
