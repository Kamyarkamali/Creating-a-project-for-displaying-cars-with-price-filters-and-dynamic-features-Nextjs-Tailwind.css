import Categorise from "@/Components/Module/Categorise"
import CarsPages from "@/Components/template/CarsPages"
import carsData from "@/data/carsData"

function index() {
  return (
    <div>
      <Categorise/>
        <CarsPages data={carsData}/>
    </div>
  )
}

export default index