# Changelog

## v1.2.0 - Corrección para Revenge Discord

### 🔧 Cambios principales

#### Estructura del plugin actualizada
- ✅ Cambiado de `export default (bunny, definePlugin) => {...}` a `export default { onLoad(), onUnload() }`
- ✅ La nueva estructura es compatible con Revenge Discord moderno
- ✅ Uso de `this.patcher`, `this.metro`, `this.logger` en lugar de parámetros

#### API de Patcher corregida
- ✅ Orden de argumentos corregido: `patcher.instead(object, method, callback)` 
- ✅ Antes era incorrectamente: `patcher.instead(method, object, callback)`
- ✅ Ahora coincide con la API estándar de Revenge

#### Sistema de Toasts actualizado
- ✅ Cambio de `bunny.ui.toasts.showToast()` a `this.ui.toasts.open()`
- ✅ Nuevo formato: `{ content: "...", source: assetId }`
- ✅ Uso de `getAssetIDByName()` en lugar de `findAssetId()`
- ✅ Nombres de iconos corregidos (ic_trash_24px, ic_check_24px, ic_close_24px)

#### Manifest simplificado
- ✅ Eliminados campos innecesarios (`type`, `spec`, `display`)
- ✅ ID más descriptivo: `block.delete.channel`
- ✅ Añadido campo `vendetta.icon` para compatibilidad

### 📋 Resumen de correcciones

**Antes (no funcionaba):**
```javascript
export default (bunny, definePlugin) => {
  return definePlugin({
    start() { ... },
    stop() { ... }
  });
};
```

**Después (funcional):**
```javascript
export default {
  onLoad() { ... },
  onUnload() { ... }
};
```

### 🎯 Compatibilidad

- ✅ Compatible con Revenge Discord (versión moderna)
- ✅ Basado en ejemplos de plugins oficiales
- ✅ Sigue las convenciones de la comunidad de plugins-list.pages.dev

### 📚 Referencias

- [Plugins List](https://plugins-list.pages.dev/) - Lista oficial de plugins
- [Revenge Plugin Template](https://github.com/revenge-mod/revenge-plugin-template) - Template oficial
