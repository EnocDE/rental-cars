import IconWithText from '@/components/shared/IconWithText/IconWithText'
import { formatPrice } from '@/utils/helpers'
import { Car } from '@prisma/client'
import { Fuel, Gauge, Gem, Users, Wrench } from 'lucide-react'
import Image from 'next/image'
import CarCardDeleteButton from './CarCardDeleteButton/CarCardDeleteButton'
import CarCardEditButton from './CarCardEditButton/CarCardEditButton'
import CarCardPublishStatus from './CarCardPublishStatus/CarCardPublishStatus'

interface CarCardProps {
  car: Car
}

export default function CarCard(props: CarCardProps) {
  const { car } = props
  const { id, name, engine, cv, photo, people, priceDay, published, transmission, type } = car

  return (
    <article className='relative p-1 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
      <CarCardPublishStatus published={published} id={id} />
      <div className='aspect-video'>
        <Image
          src={photo}
          alt={`${name} image`}
          width={400}
          height={400}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='relative p-3'>
        <div className='flex flex-col gap-x-4'>
          <p className='text-xl lg:min-h-fit font-semibold'>
            {name}
          </p>
          <div className='mt-5'>
            <p>{formatPrice(priceDay)} MXN/day</p>
            <div className='grid md:grid-cols-2 gap-x-4'>
              <IconWithText icon={Gem} text={type} />
              <IconWithText icon={Wrench} text={transmission} />
              <IconWithText icon={Users} text={people} />
              <IconWithText icon={Fuel} text={engine} />
              <IconWithText icon={Gauge} text={`${cv} CV`} />
            </div>
          </div>
          <div className='flex flex-wrap justify-between mt-3 gap-3'>
            <CarCardEditButton car={car} />
            <CarCardDeleteButton id={id} />
          </div>
        </div>
      </div>
    </article>
  )
}
