import { useEffect, useState } from "react";
import MapContainer from "../components/map/MapContainer";
import {
  usePoiStoreSelectors,
  usePoiStoreActions,
} from "../store/veveevent.store";
import Pics from "../components/pics/pics";
import BottomNavBar from "../components/nav/bottomNavBar";

function Home() {
  const { selectPois } = usePoiStoreSelectors();
  const { fetchPois } = usePoiStoreActions();
  const [isShowPics, setIsShowPics] = useState<boolean>(false);
  const {selectedPoi} = usePoiStoreSelectors();
  

  useEffect(() => {
    fetchPois();
  }, [fetchPois]);

  const pois = selectPois();
  const setShowPics = (
    newValue: boolean | ((prevState: boolean) => boolean)
  ) => {
    setIsShowPics(newValue);
  };

  return (
    <div className="w-10/10 h-10/10 gap-8 flex flex-col items-center justify-center bg-mainBG2">
      
      {isShowPics ? (
        <Pics url={selectedPoi?.url || ""}/>
      ) : (
        <div className="w-10/10 h-6/10">
          <MapContainer
            pois={pois}
            isShowPics={isShowPics}
            setShowPics={setShowPics}
          />
        </div>
      )}
      < BottomNavBar />

    </div>
  );
}

export default Home;
