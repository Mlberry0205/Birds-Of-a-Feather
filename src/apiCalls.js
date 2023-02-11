const getBirds = async () => {
  try {
    const response = await fetch('https://xeno-canto.org/api/2/recordings?query=bearded+bellbird+q:A');
    try {
      if (!response.ok) {
        console.log(response.status)
        throw new Error(response.status)
      }
      const data = await response.json()
      // console.log(data)
      return data;
    } catch (error) {
      console.error(error.message)
    }
  } catch (error) {
    console.error(error.message)
  }
};

getBirds()
  .then(data => console.log(data))
  .catch(error => console.error(error.message))

export { getBirds }