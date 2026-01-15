import * as React from 'react';

export interface WithChildren {
  children: React.ReactNode;
}

export type ComponentProps<T> = {
  className?: string;
  children?: React.ReactNode;
} & T;

export type FComponent<T = Record<string, unknown>> = (
  props: ComponentProps<T>
) => React.JSX.Element;

export type SanityAsset = {
  asset: {
    url: string;
    _id: string;
  };
  alt?: string;
};
