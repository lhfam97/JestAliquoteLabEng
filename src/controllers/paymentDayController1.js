module.exports ={

  salary(request,response){
    const discount = 671.11;
    let {value} = request.body;
    if(value < 1830.30){
      return response.json((0.92*value).toFixed(2));
    }
    else if(value<3050.53){
      return response.json((0.91*value).toFixed(2));
    }else if(value<6101.07){
        return response.json((0.89*value).toFixed(2));
    }
    else {
      return response.json((value-discount).toFixed(2));
    }

  }
  
}
