const FeatureSpan = ({ perk }) => {
  return (
    <div className='py-8 lg:py-0 lg:w-1/3 lg:flex-none'>
      <div className='max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8'>
        <perk.icon className='flex-shrink-0 h-8 w-8 text-blue-600 stroke-[1.5px]' />
        <div className='ml-4 flex-auto flex flex-col-reverse'>
          <h3 className='font-medium text-gray-900'>{perk.name}</h3>
          <p className='text-sm text-gray-500'>{perk.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSpan;
