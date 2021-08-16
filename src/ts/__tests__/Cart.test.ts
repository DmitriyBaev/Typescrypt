import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Мстители', 150, 2012, 'США', 'Avengers assemble!', 'фантастика, боевик, фэнтези, приключения', '137 минут'))

test('new card should be empty', () => {
  const cart = new Cart();
  
  expect(cart.items.length).toBe(0);
});

test('add movie', () => {
  const cart = new Cart();

  cart.add(new Movie(1010, 'Мстители', 150, 2012, 'США', 'Avengers assemble!', 'фантастика, боевик, фэнтези, приключения', '137 минут'))
  expect(cart.items).toEqual([{
    id: 1010,
    name: 'Мстители',
    price: 150,
    year: 2012,
    country: 'США',
    slogan: 'Avengers assemble!',
    genre: 'фантастика, боевик, фэнтези, приключения',
    time: '137 минут',
  }]);
})

test('sumPrice', () => {
  
expect(cart.sumPrice()).toBe(3050);
})

test('sumPriceWithDiscont', () => {
  
  expect(cart.sumPriceWithDiscount(10)).toBe(2745);
  })

  test('deleteObject', () => {
    cart.deleteObject(1008)
    expect(cart.items.length).toBe(2);
  })
