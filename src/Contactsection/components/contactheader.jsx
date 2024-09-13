

export default function Contectheader(){
    return(
        <> 
        <div className="grid grid-cols-1 justify-items-center text-center">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-wrap p-3">It is a long established fact that a reader will be of a page whenv  established fact looking at its layout.</p>
            <div className="grid grid-cols-1 gap-5 p-5 lg:flex-nowrap md:grid-cols-3  justify-center">
                <div className="grid grid-cols-1 justify-items-center ">
                    <img src="mobile-alt-2-svgrepo-com.svg" alt="Mobile" className="w-10 icon-red"/>
                    <h1>Call Us On</h1>
                    <p>+91 7708468392</p>
                </div>   
                <div className="grid grid-cols-1 justify-items-center">
                    <img className="w-10 icon-red" src="mail-alt-svgrepo-com.svg" alt="Email" />
                    <h1>Email Us At</h1>
                    <p>kprahul1143@gmail.com</p>
                </div>  
                <div className="grid grid-cols-1 justify-items-center">
                    <img src="location-pin-alt-1-svgrepo-com.svg" alt="Location" className="w-10 icon-red"/>
                    <h1>Location</h1>
                    <p>232, South Street, SRN Puram</p>
                </div> 
            </div>
        </div>
        </>
    );
}
