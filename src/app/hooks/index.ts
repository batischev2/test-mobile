import {useWindowDimensions} from 'react-native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {RootState, AppDispatch} from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useViewportUnits = () => {
  const {width, height} = useWindowDimensions();

  const vh = height / 100;
  const vw = width / 100;

  return {vh, vw};
};

export const useClientOnlyValue = <S, C>(server: S, client: C): S | C => {
  return client;
}

export { useColorScheme } from 'react-native';
