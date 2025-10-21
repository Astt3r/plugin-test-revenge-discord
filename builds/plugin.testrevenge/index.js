export default {
  onLoad() {
    const patches = [];
    const { findByProps } = this.metro;
    
    // Bloquear deleteChannel
    const ChannelActions = findByProps("deleteChannel");
    if (ChannelActions?.deleteChannel) {
      patches.push(
        this.patcher.instead(ChannelActions, "deleteChannel", () => {
          return Promise.resolve();
        })
      );
    }

    // Ocultar del menú
    const ContextMenu = findByProps("openContextMenu");
    if (ContextMenu?.openContextMenu) {
      patches.push(
        this.patcher.before(ContextMenu, "openContextMenu", (args) => {
          const [opts] = args;
          if (opts?.items) {
            opts.items = opts.items.filter(i => {
              if (!i) return true;
              const l = String(i.label || '').toLowerCase();
              const id = String(i.id || '').toLowerCase();
              return !((l.includes('delete') && l.includes('channel')) || 
                       (id.includes('delete') && id.includes('channel')) ||
                       (l.includes('eliminar') && l.includes('canal')));
            });
          }
        })
      );
    }
    
    this.patches = patches;
  },

  onUnload() {
    if (this.patches) {
      this.patches.forEach(p => p?.());
    }
  }
};
