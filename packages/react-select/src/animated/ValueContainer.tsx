import React, { ReactElement } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { ValueContainerProps } from '../components/containers';
import { GroupBase, OptionBase } from '../types';

export type ValueContainerComponent = <
  Option extends OptionBase,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: ValueContainerProps<Option, IsMulti, Group>
) => ReactElement;

// make ValueContainer a transition group
const AnimatedValueContainer = (WrappedComponent: ValueContainerComponent) => <
  Option extends OptionBase,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: ValueContainerProps<Option, IsMulti, Group>
) => <TransitionGroup component={WrappedComponent} {...props} />;

export default AnimatedValueContainer;
