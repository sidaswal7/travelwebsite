import BoraBora from "../assets/borabora.jpg"
import BoraBora2 from "../assets/borabora2.jpg"
import Maldives3 from "../assets/Maldives3.jpg"
import Maldives from "../assets/maldives.jpg"
import Maldives2 from "../assets/maldives2.jpg"
import Keywest from "../assets/keywest.jpg"
import SelectCards from "./SelectCards"

function Selects() {
  return (
    <div className="max-w-[1240px] m-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SelectCards bg={BoraBora} text="Bora Bora"/>
        <SelectCards bg={Maldives} text="Maldives"/>
        <SelectCards bg={Maldives2} text="Mali"/>
        <SelectCards bg={BoraBora2} text="Antigua"/>
        <SelectCards bg={Keywest} text="Keywest"/>
        <SelectCards bg={Maldives3} text="Jamaica"/>

    </div>
  )
}

export default Selects