export class Filter {
  constructor(private data: any[]) {}

  // get list() {
  //   return this.data;
  // }

  search(query) {
    return this.data.filter(item =>
      item["street"].toLowerCase().startsWith(query.toLowerCase())
    );
  }

  favourites() {
    return this.data.filter(item => item.isFavourite);
  }
}
