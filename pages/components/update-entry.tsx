import { Children, ReactElement } from "react";

interface UpdateEntryProp {
    date: Date;
    children: (string | ReactElement)[];
}

export default function UpdateEntry({date, children}: UpdateEntryProp) {
    return <li><>
        <p>{date?.toDateString()}: {children}</p>
    </></li>;
}