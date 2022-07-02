export default function CTA() {
  return (
    <section className='bg-white'>
      <div className='pt-32 overflow-hidden sm:pt-14'>
        <div className='bg-slate-800'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='relative pt-48 pb-16 sm:pb-24'>
              <div>
                <h2
                  id='sale-heading'
                  className='text-4xl font-semibold tracking-tight text-white md:text-5xl'
                >
                  Final Stock.
                  <br />
                  Up to 50% off.
                </h2>
                <div className='mt-6 text-base'>
                  <a href='#' className='font-medium text-white'>
                    Shop the sale<span aria-hidden='true'> &rarr;</span>
                  </a>
                </div>
              </div>

              <div className='absolute -top-32 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0'>
                <div className='ml-24 flex space-x-6 min-w-max sm:ml-3 lg:space-x-8'>
                  <div className='flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-64 w-64 rounded-lg object-cover object-top md:h-72 md:w-72'
                        src='https://res.cloudinary.com/ashishimages/image/upload/v1656772748/city-jeans/img-8_nx5j4c.webp'
                        alt=''
                      />
                    </div>

                    <div className='mt-6 flex-shrink-0 sm:mt-0'>
                      <img
                        className='h-64 w-64 rounded-lg object-cover object-top md:h-72 md:w-72'
                        src='https://res.cloudinary.com/ashishimages/image/upload/v1656772071/city-jeans/img-4_dm7npq.jpg'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-64 w-64 rounded-lg object-cover object-top md:h-72 md:w-72'
                        src='https://res.cloudinary.com/ashishimages/image/upload/v1656772071/city-jeans/img-2_gjtogd.webp'
                        alt=''
                      />
                    </div>

                    <div className='mt-6 flex-shrink-0 sm:mt-0'>
                      <img
                        className='h-64 w-64 rounded-lg object-cover object-top md:h-72 md:w-72'
                        src='https://res.cloudinary.com/ashishimages/image/upload/v1656772071/city-jeans/img-6_yzrbcw.webp'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
                        src='https://res.cloudinary.com/ashishimages/image/upload/v1656772071/city-jeans/img-7_amjrbb.webp'
                        alt=''
                      />
                    </div>

                    <div className='mt-6 flex-shrink-0 sm:mt-0'>
                      <img
                        className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
                        src='https://res.cloudinary.com/ashishimages/image/upload/v1656772072/city-jeans/img-3_mt898e.jpg'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
