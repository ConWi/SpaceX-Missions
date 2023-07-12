import {ReactNode} from 'react';

export type RenderProps<Props, Children = ReactNode> = (renderProps: Props) => Children;