/**
 *
 * @param {Promise} promise
 */
const getState = async promise =>
  Promise.race([promise, 'pending'])
         .then(val => val === 'pending' ? 'pending' : 'fulfilled')
         .catch(() => 'rejected');

async function main() {
  const p = new Promise(() => {});

  // console.log(p);

  const state = await getState(p);

 
  console.log(state);
}

main();
