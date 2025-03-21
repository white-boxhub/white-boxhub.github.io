window.addEventListener('DOMContentLoaded', function() {
    
const apikey = 'AS0N3aF5HScGsyMqxF2MFz';
const client = filestack.init(apikey); 

var options ={
 	 onUploadDone: (res) => console.log(res), 

	"accept": [
		".pdf",
		"image/jpeg"

	],
	"fromSources": [
		"local_file_system"
	],
		"disableTransformer": true,
		"maxFiles": 4,
		"minFiles": 1,
		"uploadInBackground": false,
		"maxSize": 50
};

const picker = client.picker(options); 
//picker.open();

    const openBtn = this.document.getElementById('open');
    openBtn.addEventListener('click', () => picker.open());
});
