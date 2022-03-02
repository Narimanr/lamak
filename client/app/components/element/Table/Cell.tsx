import Link from 'next/link';
import cellStyle from './Cell.module.scss';

import { iWindow } from '@/interfaces/Interfaces';

interface PageProps extends iWindow {
    index: number
}



export default function Cell(props: PageProps) {
    return (
        <tr className={cellStyle.tableRow}>
            <td className={cellStyle.tableHead}><h3>{ props.index + 1 }</h3></td>
            <td className={cellStyle.tableCell}>
                <span className={cellStyle.label}>عرض:</span>
                <span className={cellStyle.number}>{ props.windowW }</span>
                <span className={cellStyle.unit}>میلی متر</span>
            </td>
            <td className={cellStyle.tableCell}>
                <span className={cellStyle.label}>ارتفاع:</span>
                <span className={cellStyle.number}>{ props.windowH }</span>
                <span className={cellStyle.unit}>میلی متر</span>
            </td>
            <td className={cellStyle.tableCell}>
                <span className={cellStyle.label}>
                    تقسیم بندی عرضی:  
                </span>
                <span className={cellStyle.number}>{ props.partition }</span>
            </td>
            <td className={cellStyle.tableCell}>
                <Link href={`/dashboard/designs/${props.id}`}>
                    <a href={`/dashboard/designs/${props.id}`}>
                        <span className={cellStyle.label}>مشاهده</span>
                    </a>
                </Link>
            </td>
        </tr>
    )
}