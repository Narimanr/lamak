import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import rowStyle from './ProductCarousel.module.scss';

// import Swiper core and required modules
import SwiperCore, {Navigation} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);



// Import Interface
import {iProduct} from '@/interfaces/Interfaces';
import Card from '@/components/element/Card/ActionCard/ActionCard';

// Import enums
import { Banner } from '@/enums/Enums';

interface Props {
    title?: string;
    categorySlug: string;
    categoryName: string;
    subCategoryName: string;
    subCategorySlug: string;
    items: iProduct[];
}

export default function ProductCarousel(props: Props) {
    return (
        <section className={rowStyle.productCarousel}>
            <h2>
                {props.title}
            </h2>
            <div className={rowStyle.rowDisplay}>
            <Swiper
                draggable={true}
                className={rowStyle.swiper}
                slidesPerView={'auto'}
                navigation={true}
                dir="rtl"
                observer={true}
                observeParents={true}
                spaceBetween={20}
                >
                {props.items.map(item => {
                    return (
                        <SwiperSlide key={item._id} className={rowStyle.swiperSlide}>
                            <Card
                                key={item._id}
                                _id={item._id}
                                groupId={item.groupId}
                                name={item.name}
                                categoryName={props.categoryName}
                                categorySlug={props.categorySlug}
                                subCategoryName={props.subCategoryName}
                                subCategorySlug={props.subCategorySlug}
                                shops={item.shops}
                                pics={item.pics}
                                description={item.description}
                                tags={item.tags}
                                brand={item.brand}
                                barcode={item.barcode}
                            />
                         </SwiperSlide>
                    );
                })}

            </Swiper>
            </div>
        </section>
    )
 }