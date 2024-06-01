import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Великий Гэтсби',
      author: '	Фрэнсис Скотт Фицджеральд',
      price: 4.44 * 450,
      description: 'Роман, действие которого происходит в 1920-х годах и рассказывает историю Джея Гэтсби и его безответной любви к Дейзи Бьюкенен..',
      image: 'https://cdn.eksmo.ru/v2/ITD000000001140836/COVER/cover1__w820.jpg'
    },
    {
      id: 2,
      title: '1984',
      author: 'Джордж Оруэлл',
      price: 3.53*450,
      description: 'Научно-фантастический роман-антиутопия и поучительная история об опасностях тоталитаризма..',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6VvshRK9g5que_YhtcbtpMpQmrODa9iFoA&s'
    },
    {
      id: 3,
      title: 'Гордость и предубеждение',
      author: 'Остин Джейн',
      price: 6.35*450,
      description: 'На фоне быта английского провинциального общества, нравы которого автор описывает с тонкой иронией и удивительной наблюдательностью, разворачивается великолепный спор между гордым мистером Дарси и предвзятой Элизабет Беннет. Благодаря изящному слогу писательницы страница за страницей в главной героине романа расцветает чувственная и невинная любовь, не знающая никаких преград.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMDip4GguaDyfdc8wsqA0vICvKeVibMw_Mg&s'
    },
    {
      id: 4,
      title: 'Цветы для Элджернона',
      author: 'Дэниел Киз',
      price: 2.75*450,
      description: 'Эта фантастическая история обладает поразительной психологической силой и заставляет задуматься над общечеловеческими вопросами нравственности: имеем ли мы право ставить друг над другом эксперименты, к каким результатам это может привести и какую цену мы готовы заплатить за то, чтобы стать "самым умным". А одиноким?',
      image: 'https://simg.marwin.kz/media/catalog/product/cache/41deb699a7fea062a8915debbbb0442c/c/o/kiz_d_cvety_dlya_eldjernona_2.jpg'
    },
    {
      id: 5,
      title: 'Джейн Эйр',
      author: 'Бронте Шарлотта',
      price: 3.44*450,
      description: 'Это книга об истинном чувстве и преданности идеалам, об обманутых надеждах и великодушии, о девушке, благородной, волевой, страстной, оставшейся верной своей любви, несмотря на удары судьбы.',
      image: 'https://book24.kz/upload/iblock/776/7767a9360386f6daf427da5400ccce60.jpg'
    },
    {
      id: 6,
      title: 'Убить пересмешника',
      author: 'Харпер Ли',
      price: 6.03*450,
      description: 'Роман о серьезных проблемах изнасилований и расового неравенства, рассказанный глазами молодой девушки.',
      image: 'https://book24.kz/upload/iblock/3ed/3ed8ff37612098e9efb2e1cff32a5f88.jpg'
    },
    // Здесь можно добавлять больше книг
  ]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, updateBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};