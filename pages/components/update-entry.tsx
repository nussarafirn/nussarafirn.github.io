import { Children, ReactElement } from "react";

interface UpdateEntryProp {
  date: Date; 
  children: React.ReactNode;
}

export default function UpdateEntry({ date, children }: UpdateEntryProp) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(date);

  return (
    <li>
      <p><b><i>{formattedDate}:</i></b> {children}</p>
    </li>
  );
}
