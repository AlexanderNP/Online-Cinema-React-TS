export function moviesExists(arr: any, id: string): boolean {
  return arr.some(function (el: { id: string }): boolean {
    return el.id === id;
  });
}