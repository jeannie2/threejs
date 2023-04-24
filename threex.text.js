var THREEx	= THREEx	|| {}

//var fontLoader = new THREE.FontLoader();
//onst optimer = fontLoader.load('fonts/optimer_bold.typeface.json')

THREEx.Text	= function(text, options){
	options	= options || {
		font		: "optimer",
		weight		: "bold",
		size		: 1,
		height		: 1,
		curveSegments: 10,
		bevelThickness: 1,
		bevelSize: 0.05
	}

	var geometry	= new THREE.TextGeometry(text, options)

	geometry.computeBoundingBox();
	var center	= new THREE.Vector3();
	center.x	= (geometry.boundingBox.max.x - geometry.boundingBox.min.x) / 2
	center.z	= (geometry.boundingBox.max.z - geometry.boundingBox.min.z) / 2
	geometry.vertices.forEach(function(vertex){
		vertex.sub(center)
	})

	var material = new THREE.MeshPhongMaterial( { color: 0xFFFF00, specular: 0x0000FF, shininess: 100} );
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh
}

/*
var material	= new THREE.MeshNormalMaterial()
const color6 = new THREE.Color("0xFF0000");

var material = new THREE.MeshBasicMaterial( { color: 0xFF0000 } )
*/
