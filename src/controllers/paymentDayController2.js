module.exports ={

  salary(request,response){
    const discount = [142.8, 354.8, 636.13, 869.36];
    let {value} = request.body;
    if (value < 1903.99){
      return response.json(value.toFixed(2));
    }
    else if(value < 2826.66){
      return response.json(((0.925*value)+discount[0]).toFixed(2));
    }
    else if(value<3751.06){
      return response.json(((0.85*value)+discount[1]).toFixed(2));
    }else if(value<4664.69){
        return response.json(((0.775*value)+discount[2]).toFixed(2));
    }
    else {
      return response.json(((0.725*value)+discount[3]).toFixed(2));
    }

  }
  
}
