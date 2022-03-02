// import single from '@/public/images/window/single.png';
// import double from '@/public/images/window/double.png';
// import triple from '@/public/images/window/triple.png';

export const DesignImageMapper = (partition: number) => {
    let src = '';
    switch (partition) {
        case 1:
            src = '/images/window/single.png';
            break;
        case 2:
            src = '/images/window/double.png';
            break;
        case 3:
            src = '/images/window/triple.png'
            break;
        default:
            src = '';
            break
    }

    return src;
}