import { CalendarIcon, RefreshIcon, TruckIcon } from '@heroicons/react/outline';
import FeatureSpan from '../components/FeatureSpan';

const perks = [
  {
    name: '10-days exchange period',
    description: 'We’ll replace it with a new one',
    icon: CalendarIcon,
  },
  {
    name: 'Free shipping on returns',
    description: 'Send it back for free',
    icon: RefreshIcon,
  },
  {
    name: 'Free, contactless delivery',
    description: 'The shipping is on us',
    icon: TruckIcon,
  },
];

export default function Features() {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8'>
        <div className='bg-slate-50 rounded-2xl px-6 py-16 sm:p-16'>
          <div className='max-w-xl mx-auto lg:max-w-none'>
            <div className='text-center mb-4'>
              <h2 className='text-2xl font-semibold tracking-tight text-slate-900'>
                We built our business on customer service
              </h2>
            </div>

            <h2 className='sr-only'>Our perks</h2>
            <div className='max-w-7xl mx-auto divide-y divide-slate-200 lg:py-8 lg:flex lg:justify-center lg:divide-y-0 lg:divide-x'>
              {perks.map((perk) => (
                <FeatureSpan perk={perk} key={perk.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
