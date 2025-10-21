/**
 * Revenge/Bunny Plugin: Block Delete Channel
 * Bloquea la eliminación de canales en Discord móvil
 */

export default (bunny) => {
  const patches = [];

  return {
    start() {
      bunny.plugin.logger.log("Plugin iniciado");

      try {
        // Patch 1: Bloquear llamadas a deleteChannel
        const { findByProps } = bunny.metro;
        const ChannelActions = findByProps("deleteChannel");
        
        if (ChannelActions?.deleteChannel) {
          patches.push(
            bunny.patcher.instead(
              "deleteChannel",
              ChannelActions,
              (args, orig) => {
                bunny.plugin.logger.log("Intento de eliminación de canal bloqueado");
                bunny.ui.toasts.showToast(
                  "⛔ Eliminación de canales bloqueada",
                  bunny.metro.common.findAssetId("TrashIcon")
                );
                return Promise.reject(new Error("Channel deletion blocked by plugin"));
              }
            )
          );
          bunny.plugin.logger.log("Patch de deleteChannel aplicado");
        }

        // Patch 2: Filtrar opciones de menú contextual
        const ContextMenuModule = findByProps("openContextMenu");
        
        if (ContextMenuModule?.openContextMenu) {
          patches.push(
            bunny.patcher.before(
              "openContextMenu",
              ContextMenuModule,
              (args) => {
                const [options] = args;
                
                if (options?.items) {
                  options.items = options.items.filter(item => {
                    if (!item) return true;
                    
                    const label = String(item.label || '').toLowerCase();
                    const id = String(item.id || '').toLowerCase();
                    
                    const shouldRemove = (
                      (label.includes('delete') && label.includes('channel')) ||
                      (id.includes('delete') && id.includes('channel')) ||
                      (label.includes('eliminar') && label.includes('canal'))
                    );
                    
                    return !shouldRemove;
                  });
                }
              }
            )
          );
          bunny.plugin.logger.log("Patch de menú contextual aplicado");
        }

        // Mostrar toast de éxito
        bunny.ui.toasts.showToast(
          "✅ Block Delete Channel activado",
          bunny.metro.common.findAssetId("CheckmarkLargeIcon")
        );
        
      } catch (error) {
        bunny.plugin.logger.error("Error al aplicar patches:", error);
        bunny.ui.toasts.showToast(
          "❌ Error al cargar Block Delete Channel",
          bunny.metro.common.findAssetId("XSmallIcon")
        );
      }
    },

    stop() {
      bunny.plugin.logger.log("Plugin detenido");
      
      // Deshacer todos los patches
      for (const unpatch of patches) {
        try {
          unpatch();
        } catch (error) {
          bunny.plugin.logger.error("Error al deshacer patch:", error);
        }
      }
      
      patches.length = 0;
      
      bunny.ui.toasts.showToast(
        "Block Delete Channel desactivado",
        bunny.metro.common.findAssetId("TrashIcon")
      );
    }
  };
};
