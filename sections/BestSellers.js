import React from 'react';

const Bestsellers = [
  {
    id: 1,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/ashishimages/image/upload/v1656772072/city-jeans/img-3_mt898e.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 2,
    name: 'Off-White Basic Tee',
    price: '$32',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/ashishimages/image/upload/v1656772071/city-jeans/img-6_yzrbcw.webp',
    imageAlt: "Model wearing women's off-white cotton crewneck tee.",
  },
  {
    id: 3,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/ashishimages/image/upload/v1656772906/city-jeans/img-10_b1ihod.jpg',
    imageAlt:
      "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
];

const BestSellers = () => {
  return (
    <section aria-labelledby='Bestsellers-heading'>
      <div className='max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-baseline sm:justify-between'>
          <h2
            id='Bestsellers-heading'
            className='text-2xl font-semibold tracking-tight text-slate-900'
          >
            Our Bestsellers
          </h2>
          <a
            href='#'
            className='hidden text-sm font-medium text-blue-600 hover:text-blue-500 sm:block'
          >
            Browse all Bestsellers<span aria-hidden='true'> &rarr;</span>
          </a>
        </div>

        <div className='mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8'>
          {Bestsellers.map((favorite) => (
            <div key={favorite.id} className='group relative'>
              <div className='w-full h-96 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3'>
                <img
                  src={favorite.imageSrc}
                  alt={favorite.imageAlt}
                  className='w-full h-full object-center object-cover'
                />
              </div>
              <h3 className='mt-4 text-base font-semibold text-slate-900'>
                <a href={favorite.href}>
                  <span className='absolute inset-0' />
                  {favorite.name}
                </a>
              </h3>
              <p className='mt-1 text-sm text-slate-500'>{favorite.price}</p>
            </div>
          ))}
        </div>

        <div className='mt-6 sm:hidden'>
          <a
            href='#'
            className='block text-sm font-semibold text-blue-600 hover:text-blue-500'
          >
            Browse all Bestsellers<span aria-hidden='true'> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
