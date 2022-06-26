const TrackShipment = (props) => {
  return(
    <div id="get-estimate" className={`${props.className} flex-wrap gap-x-1 justify-between pt-12 pb-4 px-4 -mt-6 mb-4`}>
      <form method = "POST" action = "" className="w-full xl:w-8/12">
        <div className = "flex flex-wrap -mx-3 mb-0 md:mb-6">
          <div className = "w-full px-3 mb-4 md:mb-0">
            <label htmlFor="tracking" className="uppercase block tracking-wide text-xs font-bold mb-2">Tracking Number</label>
            <input type="text" id="tracking" name="tracking" placeholder="Enter Tracking ID" className="form-class"/>
          </div>                  
        </div>
        <button type="submit" name="getQuote" className="btn-md btn-red !py-3 text-sm">Track Shipment</button>                                 
      </form>
      <div className="hidden w-full xl:1/12"></div>
      <div className="hidden w-full xl:w-3/12"></div>
    </div>
  );
};
export default TrackShipment;