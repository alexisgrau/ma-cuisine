import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const STORAGE_KEY = 'app_navigation_state';

// Charger l'état depuis localStorage
function loadState() {
  if (browser) {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      console.error('Erreur chargement:', e);
      return null;
    }
  }
  return null;
}

function saveState(state:any) {
  if (browser) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Erreur sauvegarde:', e);
    }
  }
}

function createNavigationStore() {
  const { subscribe, set, update } = writable(loadState());

  return {
    subscribe,
    saveRoute: (path:string, data = {}) => {
      const state = { path, data, timestamp: Date.now() };
      saveState(state);
      set(state);
    },
    clear: () => {
      if (browser) localStorage.removeItem(STORAGE_KEY);
      set(null);
    }
  };
}

export const navigationState = createNavigationStore();