import { writable } from "svelte/store";

type Toast = {
  color: "alert-warning" | "alert-success" | "alert-info" | "alert-error";
  message: string;
};

const createToastStore = () => {
  const { set, update, subscribe } = writable([]);

  const addToast = (toast: Toast, delay: number) => {
    update((store) => {
      return [...store, toast];
    });
    setTimeout(() => {
      update((store) => {
        console.log(store);
        return store.filter((t) => t !== toast);
      });
    }, delay);
  };

  return { set, update, subscribe, addToast };
};

export const toastStore = createToastStore();

export const isMobile = writable(false);
