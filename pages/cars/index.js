import Categorise from "@/Components/Module/Categorise"
import SearchBar from "@/Components/Module/SearchBar"
import CarsPages from "@/Components/template/CarsPages"
import carsData from "@/data/carsData"

function index() {
  return (
    <div>
      <SearchBar/>
      <Categorise/>
        <CarsPages data={carsData}/>
    </div>
  )
}

export default index