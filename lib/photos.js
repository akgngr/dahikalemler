const photoData = async () => {
  const result = await fetch('https://v1.nocodeapi.com/akgngr2/instagram/oUGBBqJXHyLAlsUG', {
    method= "GET"
  });
  const json = await result.json();

  if (!json.error) {
      console.log(json)
    return json;
  }
  return false;
}

module.exports = {
    getPhotos
}