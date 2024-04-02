
function BottomNavBar() {
  return (
    <div className="fixed right-0 bottom-0 h-1/10 bg-veveBlue1 w-full">
        <ul className="flex flex-row justify-between items-center w-full h-full ">
            <li className="w-1/4 h-full border-x-2 border-veveBlue2 flex flex-row items-center justify-center">Accueil</li>
           <li className="w-1/4 h-full border-x-2 border-veveBlue2 flex flex-row items-center justify-center">Map</li>
           <li className="w-1/4 h-full border-x-2 border-veveBlue2 flex flex-row items-center justify-center">Mes photos</li>
           <li className="w-1/4 h-full border-x-2 border-veveBlue2 flex flex-row items-center justify-center">Messagerie</li>
        </ul>
    </div>
  )
}

export default BottomNavBar