import * as React from 'react';

export interface WithChildren {
  children: React.ReactNode;
}

export type ComponentProps<T> = {
  className?: string;
  children?: React.ReactNode;
} & T;

export type FComponent<T = Record<string, unknown>, S = unknown> = (
  props: ComponentProps<T>,
  ref: React.MutableRefObject<S>
) => JSX.Element;
