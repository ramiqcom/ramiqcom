// Map data
const map = L.map('map').setView([0, 105], 4.5);

// Tile 
L.tileLayer('http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}', {
	attribution: 'Google Maps'
}).addTo(map);

// Layer
let layer;

// On drag load data
window.ondragover =  (e) => e.preventDefault();
window.ondrop = async (e) => {
	e.preventDefault();
	const file = e.dataTransfer.files[0];
	loadFile(file);
};

/**
 * Loading screen function
 * @param {Boolean} status 
 * @param {String} text 
 * @param {String | Hex} color 
 */
function setLoading(status, text, color){
	const loading = document.getElementById('loading');
	if (status) {
		loading.showModal();
		loading.style.color = color;
		loading.innerText = text;
	} else {
		loading.innerText = null;
		loading.close();
	};
}

/**
 * Function load file
 * @param {Blob} file 
 */
async function loadFile(file) {
	// Erase current layer
	layer ? map.removeLayer(layer) : null;

	// Get file format
	let format = file.name.split('.');
	format = format[format.length - 1];

	// Limit file size
	if (file.size > 100e6){
		errorShow('File size too big!\n Only accept file smaller than 100mb!');
	}

	// Data type
	let type;
	switch (format){
		case 'geojson':
		case 'json':
		case 'zip':
		case 'kml':
		case 'kmz':
			type = 'vector';
			break;
		case 'tiff':
		case 'tif':
			type = 'raster';
			break;
		default:
			errorShow(`.${format} is not supported!\nOnly accept .geojson, .json, .zip(shapefile), .kml, .kmz, .tiff, and .tif format`);
	}

	// Run something based on type
	switch (type) {
		case 'vector':
			await vectorLayer(format, file);
			break;
		case 'raster':
			await rasterLayer(file);
			break;
	}
}

/**
 * Error show
 * @param {String} msg 
 */
function errorShow(msg){
	const errorDiv = document.getElementById('error');
	errorShow.innerText = msg;
	errorShow.showModal();
	throw new Error(msg);
}

/**
 * Function to load vector data
 * @param {'geojson' | 'json' | 'kmz' | 'kml' | 'zip'} format 
 * @param {Blob} file 
 */
async function vectorLayer(format, file){
	// GeoJSON file
	let geojson;

	// Set loading screen
	setLoading(true, 'Parsing file...', 'blue');

	// Parse geojson
	switch (format) {
		case 'geojson':
		case 'json':
			geojson = JSON.parse(await file.text());
			break;
		case 'kmz':
		case 'kml':
			geojson = new DOMParser().parseFromString(await file.text(), 'text/xml');
			geojson = await toGeoJSON.kml(geojson);
			break;
		case 'zip':
			geojson = await shp(await file.arrayBuffer());
			break;
	}

	// Process vector layer
	processVector(geojson)
}

/**
 * Function to process vector layer
 * @param {GeoJSON} geojson 
 * @param {String} name 
 */
function processVector(geojson){
	// Set loading screen to preparing tile
	setLoading(true, 'Creating tile...', 'blue');

	// Set bounds
	const bounds = L.geoJSON(geojson).getBounds();

	// Option for geojson tile
	const red = Math.floor(Math.random() * 255 * Math.random());
	const green = Math.floor(Math.random() * 255 * Math.random());
	const blue = Math.floor(Math.random() * 255 * Math.random());
	const fillColor = RGBAToHexA(red, green, blue, 0.3);
	const color = RGBAToHexA(red, green, blue, 1);
	const optionsVector = {
		maxZoom: 24,
		minZoom: 0,
		tolerance: 5,
		maxNativeZoom: 16,
		minNativeZoom: 5,
		style: { 
			color,
			fillColor,
			weight: 1, 
		}
	};

	// Vector tle
	const vectorTile = L.geoJson.vt(geojson, optionsVector).addTo(map);

	// Zoom to bounds
	map.fitBounds(bounds);

	// Set loading screen
	setLoading(false);

	// Set layer
	layer = vectorTile
}

/**
 * Function to load raster data
 * @param {Blob} file 
 */
async function rasterLayer(file){
	// Set loading screen
	setLoading(true, 'Parsing data...', 'blue');

	let imageTile = await parseGeoraster(file);

	// Set loading screen
	setLoading(true, 'Creating tile...', 'blue');

	// Create image tile
	imageTile = new GeoRasterLayer({
		georaster: imageTile,
		opacity: 1,
		resolution: 1024
	}).addTo(map);
	
	// Zoom to bounds
	const bounds = imageTile.extent.leafletBounds;
	map.fitBounds(bounds);

	// Set loading screen
	setLoading(false);

	// Set layer
	layer = imageTile
}

// Function to get hex color
function RGBAToHexA(r,g,b,a) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  a = Math.round(a * 255).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;
  if (a.length == 1)
    a = "0" + a;

  return "#" + r + g + b + a;
}