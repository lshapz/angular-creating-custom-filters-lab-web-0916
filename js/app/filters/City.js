function City() {
  return function (list, city) {
    return list.filter(item=>{
      return item.location.city === city;
    })
  }
}

angular
  .module('app')
  .filter('city', City);
