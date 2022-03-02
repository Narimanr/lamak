import styles from './Dashboard.module.scss';

// import interface
import { iAction } from '@/interfaces/Interfaces';

// import layout
import ActionGrid from '@/components/layout/Grid/ActionGrid/ActionGrid';

interface PageProps {
    items: iAction[]
}


export default function DashboardTemplate(props: PageProps) {
    return (
        <div className={styles.DashboardGrid}>
            <div className={styles.wrapper}>
                <section className={styles.actions}>
                    <ActionGrid items={props.items} />
               </section>
            </div>
        </div>
    );
}