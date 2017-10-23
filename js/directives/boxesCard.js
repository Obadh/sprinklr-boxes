function boxesCard() {
    return {
        restrict: 'EA',
        scope: {
            boxes: '='
        },
        template: `<div class="row">
                <div class="col s12">
                  <div class="card grey lighten-3">
                    <div class="card-content">
                      <h4>{{ boxes.name }}</h4>
                      <p> {{ boxes.description }}</p>
                    </div>
                  </div>
                </div>
              </div>`
    };
}
