const patches = [];

export default {
  onLoad() {
    const { patcher, metro, logger } = this;
    const { findByProps } = metro;

    try {
      // Patch: Bloquear eliminación de canales
      const ChannelActions = findByProps("deleteChannel");
      
      if (ChannelActions?.deleteChannel) {
        patches.push(
          patcher.instead(
            ChannelActions,
            "deleteChannel",
            (args, orig) => {
              // Silenciosamente rechazar la operación
              return Promise.resolve();
            }
          )
        );
      }

      // Ocultar opción del menú contextual
      const ContextMenuModule = findByProps("openContextMenu");
      
      if (ContextMenuModule?.openContextMenu) {
        patches.push(
          patcher.before(
            ContextMenuModule,
            "openContextMenu",
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
      }
      
    } catch (error) {
      logger.error("Error:", error);
    }
  },

  onUnload() {
    // Limpiar patches
    for (const unpatch of patches) {
      try {
        unpatch();
      } catch {}
    }
    
    patches.length = 0;
  }
};
