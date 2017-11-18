AFRAME.registerComponent('mike', {
  update: function () {
    var el = this.el;
    var micky = this.micky.bind(this);
    if (this.on === this.data.on) { return; }
    el.addEventListener(this.data.on, micky);

    this.on = this.data.on;
  },


  micky: function () {

    var el = this.el;
    var matrixWorld = el.object3D.matrixWorld;
    var position = new THREE.Vector3();
    position.setFromMatrixPosition(matrixWorld);
    var entity = document.createElement('a-entity');
    entity.setAttribute('position', position);
    entity.setAttribute('mixin', this.data.mixin);
    el.sceneEl.appendChild(entity);


  }
});