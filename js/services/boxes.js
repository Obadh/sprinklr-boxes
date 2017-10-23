function boxes($http) {
    var URL = 'https://api.getsprinklr.com/v1/boxes';
    var data;
    this.setBoxes=function(boxes){
      this.data=boxes.boxes;
      //console.log(boxes.boxes)    
    }
    this.getBoxes = function () {
        return $http.get(URL);
    };
}
