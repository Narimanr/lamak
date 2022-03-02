import Link from 'next/link';
import Image from 'next/image';


import cardStyle from './ActionCard.module.scss';

// Import Interface
import { iAction } from '@/interfaces/Interfaces';


export default function ActionCard(props: iAction) {
  return (
    <Link
      href={`${props.link}`}
    >
      <a href={`${props.link}`}>
        <div className={cardStyle.card}>
            <div className={cardStyle.cardBody}>
              <div className={cardStyle.imageBox}>
                  <Image src={props.image} alt="action image" layout="fill" objectFit="contain" />
              </div>
            <div className={cardStyle.text}>
              <span className={cardStyle.title}>
                {props.name}
              </span>
              </div>
            </div>
        </div>
        </a>
      </Link>
    );
}