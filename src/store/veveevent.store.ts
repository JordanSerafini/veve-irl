import { create } from 'zustand';
import { url } from '../utils/url';
import VeveEvent, { PoiStore } from '../types/veve.type';

export const usePoiStore = create<PoiStore>((set) => ({
  pois: [] as VeveEvent[],
  selectedPoi: null as VeveEvent | null, // Ajout de selectedPoi avec une valeur initiale de null
  error: null,
  addPoi: (poi: VeveEvent) => set((state) => ({ ...state, pois: [...state.pois, poi], error: null })),
  removePoi: (id: number) => set((state) => ({ ...state, pois: state.pois.filter((poi) => poi.id !== id), error: null })),
  updatePoi: (id: number, updatedPoi: VeveEvent) =>
    set((state) => ({
      ...state,
      pois: state.pois.map((poi) => (poi.id === id ? updatedPoi : poi)),
      error: null
    })),
  clearPois: () => set({ pois: [], error: null }),
  fetchPois: async () => {
    try {
      const response = await fetch(`${url.local}/veve`);
      if (!response.ok) {
        throw new Error("Failed to fetch pois");
      }
      const pois: VeveEvent[] = await response.json();
      set({ pois, error: null }); 
    } catch (error) {
      console.error(error);
      set({ error: "Failed to fetch POIs" }); 
    }
  },
  getPois: async () => {
    try {
      const response = await fetch(`${url.local}/veve`);
      if (!response.ok) {
        throw new Error("Failed to fetch pois");
      }
      const pois: VeveEvent[] = await response.json();
      return pois;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  // Ajout de setSelectedPoi pour mettre à jour selectedPoi dans le store
  setSelectedPoi: (poi: VeveEvent | null) => set((state) => ({ ...state, selectedPoi: poi })),
}));

// Hooks personnalisés ajustés
export const usePoiStoreSelectors = () => {
  const { pois, selectedPoi, error } = usePoiStore((state) => ({ pois: state.pois, selectedPoi: state.selectedPoi, error: state.error }));

  const selectPois = () => pois;
  const selectPoiById = (id: number) => pois.find((poi) => poi.id === id);
  const selectPoiByLocation = (lat: number, lng: number) => pois.find((poi) => poi.lat === lat && poi.lng === lng);
  const selectPoiByName = (name: string) => pois.find((poi) => poi.name === name);

  return { selectPois, selectPoiById, selectPoiByLocation, selectPoiByName, selectedPoi, error };
};

export const usePoiStoreActions = () => usePoiStore((state) => ({
  addPoi: state.addPoi,
  removePoi: state.removePoi,
  updatePoi: state.updatePoi,
  clearPois: state.clearPois,
  fetchPois: state.fetchPois,
  getPois: state.getPois,
  setSelectedPoi: state.setSelectedPoi, // Ajout de la fonction setSelectedPoi
}));
