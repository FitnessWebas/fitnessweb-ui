const AUTH_CHANGED_EVENT = "authChanged";

export const emitAuthChange = () => {
  window.dispatchEvent(new Event(AUTH_CHANGED_EVENT));
};

export const onAuthChange = (callback: () => void) => {
  window.addEventListener(AUTH_CHANGED_EVENT, callback);
  return () => window.removeEventListener(AUTH_CHANGED_EVENT, callback);
};
