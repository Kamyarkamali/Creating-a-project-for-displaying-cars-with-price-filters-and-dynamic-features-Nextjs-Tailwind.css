import CarsPages from "@/Components/template/CarsPages"
import carsData from "@/data/carsData"

function index() {
  return (
    <div>
        <CarsPages data={carsData}/>
    </div>
  )
}

export default index