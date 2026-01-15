/*
  У вас есть два отсортированных массива. Объедините их в один отсортированный массив за один проход.
  То есть сложность вашей функции должна быть O(n).
  Если вы будете использовать две операции - "объединить" а потом отдельно "отсортировать",
  тогда вы не сможете уложиться в O(n)
  В случае двух операций "Объединили, отсортировали" в лучшем случае у вас получится O(n + logn) - это МЕДЛЕННЕЕ чем O(n)
  ℹ️ Именно такой способ объединения массива лежит в основе алгоритма "Сортировка слиянием" (Merge Sorting)
*/

const arr1 = [1, 5, 10];
const arr2 = [1, 2, 3, 5, 9, 11, 12, 13];
// @ts-expect-error

const merge = (arr1: number[], arr2: number[]): number[] => {
  const result: number[] = [];
  let arr1Index = 0;
  let arr2Index = 0;

  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      result.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      result.push(arr2[arr2Index]);
      arr2Index++;
    }
  }
  return result.concat(arr1.slice(arr1Index)).concat(arr2.slice(arr2Index));
};

// Результат:
const resultMerge = merge(arr1, arr2); // [1, 1, 2, 3, 5, 5, 9, 10, 11, 12, 13];
console.log(resultMerge);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// @ts-ignore
const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
};

const resultMergeSort = mergeSort(resultMerge); // [1, 1, 2, 3, 5, 5, 9, 10, 11, 12, 13];
console.log(resultMergeSort);
