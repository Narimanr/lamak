import gridStyle from './ActionGrid.module.scss';

// Import Intercace
import { iAction } from '@/interfaces/Interfaces';

import ActionCard from '@/element/Card/ActionCard/ActionCard';



interface Props {
    items: iAction[];
}

export default function ActionGrid(props: Props) {
    return (
        <section className={gridStyle.actionGrid}>

            <div className={gridStyle.gridDisplay}>
                {props.items.map(item => {
                    return (
                       <ActionCard key={item.name} {...item} />
                   );
                })}
            </div>
        </section>
    )
 }