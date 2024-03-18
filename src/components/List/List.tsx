import React from 'react';

interface ListProps<T> {
    items: T[];
    styles?: string;
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {

    return (
        <div className={props.styles}>
            {props.items.map(props.renderItem)}
        </div>
    )
}
