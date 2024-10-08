/**
 * Граф - это абстрактная структура данных, которая представляет из себя множество вершин и множества ребер
 */

// Поиск в ширину

const graph = {};

graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];


function breadthSearch(graph, start, end) {
  // создаем очередь
  let queue = [];

  // добавляем стартовую точку
  queue.push(start);

  // пока в очереди что-то есть
  while(queue.length > 0) {
    // получаем текущую вершину
    const current = queue.shift();

    // если в текущей вершине в графе ничего не находится, то присвоим по этой вершине пустой массив
    if (!graph[current]) {
      graph[current] = [];
    }

    // если в графе по текущей вершине массив содержит конечную точку, то мы завершаем выполнение программы.
    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]]
    }
  }

  return false;
}


console.log(breadthSearch(graph, 'a', 'e'));






/**
 * В этом алгоритме используется такая структура данных, как очередь. Начнем сначала с нее.
 * 
 * Это структура данных, состоящая из каких - то элементов. Основной принцип в том, что элементы всегда добавляются в конец структуры, а извлекаются из ее начала. (FIFO - first-in first-out)
 */