import { parseISO, format } from 'date-fns';

export interface DateProps {
    dateString: string
}

export default function Date({ dateString } : DateProps)  {
    if (dateString) {
        console.debug('datesting:', dateString);
        const date = parseISO(dateString);
        console.debug('date:', date);
        const dateFormatted = format(date, 'LLLL d, yyyy');
        console.debug('dateFormatted:', dateFormatted);
        return <time dateTime={dateString}>{dateFormatted}</time>
    } else {
        return <time>N/A</time>
    }

}