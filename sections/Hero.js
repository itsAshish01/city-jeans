import Navbar from '../components/Navbar';

export default function Hero() {
  return (
    <header>
      <Navbar />
      <div className='relative bg-white overflow-hidden'>
        <div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static'>
            <div className='sm:max-w-lg'>
              <h1 className='text-4xl font font-extrabold tracking-tight text-slate-900 sm:text-6xl'>
                Your one-stop fashion destination.
              </h1>
              <p className='mt-4 text-xl text-slate-500'>
                Online Shopping Site for Fashion & Lifestyle in Ramgarh. We
                brings you a variety of clothing, accessories and lifestyle
                products.
              </p>
            </div>
            <div>
              <div className='mt-10'>
                {/* Decorative image grid */}
                <div
                  aria-hidden='true'
                  className='pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full'
                >
                  <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                    <div className='flex items-center space-x-6 lg:space-x-8'>
                      <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                      </div>
                      <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg'
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg'
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                      </div>
                      <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg'
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href='#'
                  className='inline-block text-center bg-blue-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-blue-700'
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
