// poiStore.ts
import { create, useStore } from 'zustand';
import { PoiStore, VeveEvent } from '../types/veve.type'; // Importez le type VeveEvent
import { url } from '../utils/url';

export const usePoiStore = create<PoiStore>((set) => ({
  pois: [] as VeveEvent[], // Utilisez le type VeveEvent ici
  addPoi: (poi) => set((state) => ({ pois: [...state.pois, poi] })),
  removePoi: (id) => set((state) => ({ pois: state.pois.filter((poi) => poi.id !== id) })),
  updatePoi: (id, updatedPoi) =>
    set((state) => ({
      pois: state.pois.map((poi) => (poi.id === id ? updatedPoi : poi)),
    })),
  clearPois: () => set({ pois: [] }),
  fetchPois: async () => {
    try {
      const response = await fetch(`${url.local}/veve`);
      const pois: VeveEvent[] = await response.json(); // Utilisez le type VeveEvent ici
      set({ pois });
    } catch (error) {
      console.error("Failed to fetch pois:", error);
    }
  },
}));

// Custom hook for accessing the store
export const usePoiStoreSelectors = () => {
  const pois = useStore(usePoiStore); // Utilisez useStore ici

  // Selectors
  const selectPois = () => pois.pois;
  const selectPoiById = (id: number) => pois.pois.find((poi) => poi.id === id);
  const selectPoiByLocation = (lat: number, lng: number) => pois.pois.find((poi) => poi.lat === lat && poi.lng === lng);
  const selectPoiByName = (name: string) => pois.pois.find((poi) => poi.name === name);

  return { selectPois, selectPoiById, selectPoiByLocation, selectPoiByName };
};

// Custom hook for accessing the store actions
export const usePoiStoreActions = () => {
  const { addPoi, removePoi, updatePoi, clearPois, fetchPois } = usePoiStore();

  return { addPoi, removePoi, updatePoi, clearPois, fetchPois };
};
