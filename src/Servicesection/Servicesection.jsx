
import Servicedata from "./components/Servicecarddata";
import Serviceheader from "./components/Serviceheader";

export default function Servicesection(){
    return(
        <>
       <section className="space-y-5">
        <Serviceheader/>
     <Servicedata/>
       </section>
        </>
    )
}