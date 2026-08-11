import { JSX } from "react";
import { ProductCardProps } from "../components/ProductCard";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductImageProps } from "../components/ProductImage";
import { ProductButtonsProps } from "../components/ProductButtons";
export interface Product {
  id: number,
  title: string,
  img?: string,
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: ( value: number ) => void;
}

export interface onChangeArgs {
  count: number;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Title:    ( Props: ProductTitleProps) => JSX.Element,
  Image:    ( Props: ProductImageProps) => JSX.Element,
  Buttons:  ( Props: ProductButtonsProps) => JSX.Element,
}

export interface InitialValues {
  count?: number;
  maxCount?: number
}