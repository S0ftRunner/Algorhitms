// Функция поиска вариантов из точки
/**
 * 
 * @param {string} from
 * @returns {Promise<string[]>} 
 */
function fetchFlights(from) {}

/**
 * Например, для
 * graph ={A: [B, D], B: [C, N, Z], D: [E, F], F:[S]}
 */

findPath('A', 'N', fetchFlights); // Promise.resolve(['A', 'B', 'N']);

findPath('B', 'S', fetchFlights); // Promise.reject(new Error('no way'))



async function findPath(from, to, fetchFlights) {
  const queue = [];
  const routes = new Map();

  routes.set(from, [from]);
  queue.push(from);

  while (queue.length > 0) {
    const node = queue.shift();
    
    const neighbors = await fetchFlights(node);

    if (!neighbors) {
      continue;
    }

    const currentRoute = routes.get(node);

    for (const neigbour of neighbors) {

      if (!routes.has(neigbour)) {
        queue.push(neigbour);
      }

      routes.set(neigbour, [...currentRoute, node]);

      if (to === neigbour) {
        return Promise.resolve(routes.get(neighbors));
      }
    }
  }

  return Promise.reject(new Error('No Way'));
}
