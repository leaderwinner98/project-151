AFRAME.registerComponent('car', {
    schema: {
   
      color: { type: 'string', default: 'red' },
      position: { type: 'vec3', default: { x: 0, y: 1, z: -5 } },
      rotation: { type: 'vec3', default: { x: 0, y: 0, z: 0 } }
    },
    
    init: function () {
  
      const carGeometry = new THREE.BoxBufferGeometry(1, 0.5, 2);
      const carMaterial = new THREE.MeshStandardMaterial({ color: this.data.color });
      
      
      const carMesh = new THREE.Mesh(carGeometry, carMaterial);
      
     
      carMesh.position.set(this.data.position.x, this.data.position.y, this.data.position.z);
      carMesh.rotation.set(this.data.rotation.x, this.data.rotation.y, this.data.rotation.z);
      
     
      this.el.setObject3D('car', carMesh);
    }
  });
  