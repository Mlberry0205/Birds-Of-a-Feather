const getBirds = async () => {
  try {
    const response = await fetch('https://xeno-canto.org/api/2/recordings?query=bearded+bellbird+q:A');
    if (!response.ok) {
      console.log(response.status)
      throw new Error(response.status)
    }
    const data = await response.json()
    // console.log('hello', data)
    return data;
  }
  catch (error) {
    console.log(error.message)
  }
};

// const getSingleBird = async (id) => {
//   try {
//     const response = await fetch(`https://xeno-canto.org/api/2/recordings?query=bearded+bellbird+q:A/${id}`);
//     if (!response.ok) {
//       console.log(response.status)
//       throw new Error(response.status)
//     }
//     const data = await response.json()
//     console.log('hello', data)
//     return data;
//   }
//   catch (error) {
//     console.log(error.message)
//   }
// };

export { getBirds }