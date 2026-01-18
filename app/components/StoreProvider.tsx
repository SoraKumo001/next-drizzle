"use client";
import {
  useRef,
  useSyncExternalStore,
  createContext,
  type ReactNode,
  useContext,
} from "react";

export type ContextType<T> = {
  state: T;
  storeChanges: Set<() => void>;
  dispatch: (callback: (state: T) => T) => void;
  subscribe: (onStoreChange: () => void) => () => void;
};

export const useStoreContext = <T,>(initState?: () => T) => {
  const storeRef = useRef<ContextType<T>>(null);
  // eslint-disable-next-line react-hooks/refs
  if (!storeRef.current) {
    storeRef.current = {
      state: initState?.() ?? ({} as T),
      storeChanges: new Set(),
      dispatch: (callback: (state: T) => T) => {
        if (storeRef.current) {
          storeRef.current.state = callback(storeRef.current.state);
          for (const storeChange of storeRef.current.storeChanges) {
            storeChange();
          }
        }
      },
      subscribe: (onStoreChange: () => void) => {
        storeRef.current?.storeChanges.add(onStoreChange);
        return () => storeRef.current?.storeChanges.delete(onStoreChange);
      },
    } satisfies ContextType<T>;
  }

  return storeRef;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StoreContext = createContext<ContextType<any>>(undefined as never);

export const StoreProvider = <T,>({
  children,
  initState,
}: {
  children: ReactNode;
  initState?: T;
}) => {
  const context = useStoreContext(() => initState).current;
  if (!context) throw "error";
  return (
    <StoreContext.Provider value={context}>{children}</StoreContext.Provider>
  );
};

export const useSelector = <T, R>(getSnapshot: (state: T) => R) => {
  const context = useContext<ContextType<T>>(StoreContext);
  return useSyncExternalStore(
    context.subscribe,
    () => getSnapshot(context.state),
    () => getSnapshot(context.state)
  );
};

export const useDispatch = <T,>() => {
  const context = useContext<ContextType<T>>(StoreContext);
  return context.dispatch;
};
