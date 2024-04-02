export default interface VeveEvent {
  id: number;
  name: string;
  description?: string;
  url?: string;
  lat: number;
  lng: number;
  owner: number;
  comment?: string;
  rate?: number;
}


export interface PoiStore {
  getPois: () => Promise<VeveEvent[]>;
  pois: VeveEvent[];
  addPoi: (poi: VeveEvent) => void;
  removePoi: (id: number) => void;
  updatePoi: (id: number, updatedPoi: VeveEvent) => void;
  clearPois: () => void;
  fetchPois: () => Promise<void>;
  error: string | null;
}

export type AddPoi = (poi: VeveEvent) => void;
export type RemovePoi = (id: number) => void;
export type UpdatePoi = (id: number, updatedPoi: VeveEvent) => void;
export type ClearPois = () => void;
export type FetchPois = () => Promise<void>;

export interface PoiStoreActions {
  addPoi: AddPoi;
  removePoi: RemovePoi;
  updatePoi: UpdatePoi;
  clearPois: ClearPois;
  fetchPois: FetchPois;
}
