import storage from '../store/index';

const imageService = {

  //https://www.geeksforgeeks.org/how-to-convert-image-into-base64-string-using-javascript/
  convertBase64(img) {

    const reader = new FileReader();
    reader.readAsDataURL(img);

    reader.onload = function convert() {
      
        let  base64String = reader.result;

        console.log(base64String);

        //Je fais ça pour récupérer l'image parce que j'y arrive pas autrement 
        storage.state.image = base64String;

        console.log(storage.state.image);
    }
  }
}

export default imageService