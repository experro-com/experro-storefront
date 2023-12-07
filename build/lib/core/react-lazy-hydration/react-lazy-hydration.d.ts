import * as React from 'react';
export declare type LazyProps = {
    whenVisible?: boolean | IntersectionObserverInit;
    noWrapper?: boolean | keyof JSX.IntrinsicElements;
    on?: (keyof HTMLElementEventMap)[] | keyof HTMLElementEventMap;
    children: React.ReactElement;
};
declare type Props = Omit<React.HTMLProps<HTMLElement>, 'dangerouslySetInnerHTML'> & LazyProps;
declare function LazyHydrate(props: Props): JSX.Element;
export default LazyHydrate;
