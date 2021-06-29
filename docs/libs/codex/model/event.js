export function on(emitter, type, f) {
  if (emitter.addEventListener) {
    emitter.addEventListener(type, f, false);
  } else if (emitter.attachEvent) {
    emitter.attachEvent("on" + type, f);
  } else {
    const map = emitter._handlers || (emitter._handlers = {});
    map[type] = (map[type] || []).concat(f);
  }
}

export function off(emitter, type, f) {
  if (emitter.removeEventListener) {
    emitter.removeEventListener(type, f, false);
  } else if (emitter.detachEvent) {
    emitter.detachEvent("on" + type, f);
  } else {
    const map = emitter._handlers,
      handlers = map && map[type];
    if (handlers) {
      map[type] = handlers.splice(handlers.indexOf(f) >>> 0, 1);
    }
  }
}

export function getHandlers(emitter, type) {
  return (emitter._handlers && emitter._handlers[type]) || [];
}

export function emit(emitter, type) {
  const handlers = getHandlers(emitter, type);
  if (!handlers.length) return;
  const args = Array.prototype.slice.call(arguments, 2);
  for (let i = 0; i < handlers.length; ++i) handlers[i].apply(null, args);
}
