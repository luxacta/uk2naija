const GetEstimate = (props) => {
  return(
    <div id="get-estimate" className={`${props.className} flex-wrap gap-x-1 justify-between pt-12 pb-4 px-4 -mt-6 mb-4`}>
      <form method = "POST" action = "" className="w-full xl:w-8/12">
        <div className = "flex flex-wrap -mx-3 mb-0 md:mb-6">
          <div className = "w-full px-3 mb-4 md:mb-0">
            <label htmlFor="email" className="uppercase block tracking-wide text-xs font-bold mb-2">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Email Address" className="form-class"/>                                                                                                            
          </div>                  
        </div>

        <div className = "flex flex-wrap -mx-3 mb-0 md:mb-6">
          <div className = "w-full md:w-2/5 px-3 mb-4 md:mb-0">
            <label htmlFor="weight" className="uppercase block tracking-wide text-xs font-bold mb-2">Parcel Weight (KG)</label>
            <input type="number" min="1" id="weight" name="weight" placeholder="Weight" className="form-class"/>
          </div>
          <div className="w-full md:w-2/5 px-3 mb-4 md:mb-0">
            <label htmlFor="height" className="uppercase block tracking-wide text-xs font-bold mb-2">Parcel Height (Meter)</label>
            <input type="number" min="1" id="height" name="height" placeholder="Height" className="form-class"/>
          </div>
          <div className="w-full md:w-1/5 px-3 mb-4 md:mb-0">
            <label htmlFor="qty" className="uppercase block tracking-wide text-xs font-bold mb-2">Quantity</label>
            <input type="number" min="1" id="qty" name="qty" placeholder="Qty" className="form-class"/>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-0 md:mb-6">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="pickup">Country of Origin / Pick-up</label>
            <div className="relative">
              <select className="form-class pr-8" id="pickup" name="pickup">                                                                                                        
                <option>Nigeria</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Others</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-body-color">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="destination">Destination</label>
            <div className="relative">
            <select className="form-class pr-8" id="destination" name="destination">                                                                                                        
                <option>Nigeria</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Others</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-body-color">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center -mx-3 mb-0 md:mb-6">
          <div className="px-3 mb-4 md:mb-0">
            <button type="submit" name="getQuote" className="btn-md btn-red !py-3.5 text-sm">Generate Estimate</button>                   
          </div>

          <div className="px-3 mb-4 md:mb-0 max-w-xs">
            <a href="/login" className="text-red text-sm leading-none">Don't have an Address, Click here!</a>
          </div>
        </div>                 
      </form>
      <div className="hidden w-full xl:1/12"></div>
      <div className="hidden w-full xl:w-3/12 py-24"></div>
    </div>
  );
};
export default GetEstimate;