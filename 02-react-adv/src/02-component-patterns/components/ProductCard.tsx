import { useProduct } from '../hooks/useProduct';

import { createContext, CSSProperties, ReactElement } from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export interface ProductCardProps {
  children?: ReactElement | ReactElement[],
  product: Product,
  className?: string;
  style?: CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={ style }  
      >
        { children }
      </div>
    </Provider>
  )
  
};
