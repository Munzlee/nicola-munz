import React from "react";
import { IProduct } from "./products";

export default function AppSlide(props: {
  title: string;
  products: IProduct[];
}) {
  const s = require("./AppSlideStyle.module.css");

  function createDesc(lines: string[]): JSX.Element[] {
    if (lines.length <= 12) {
      if (lines.length > 6) {
        let totallines = lines.flatMap((line) => {
          return <p>{line}</p>;
        });
        return [
          <div className={s.productBodyBlock}>{totallines.slice(0, 6)}</div>,
          <div className={s.productBodyBlock}>
            {totallines.slice(6, totallines.length)}
          </div>,
        ];
      } else {
        let totallines = lines.flatMap((line) => {
          return line;
        });
        if (totallines.length > 5) {
          return createDesc(totallines);
        } else {
          return [
            <div className={s.productBodyBlock}>
              {totallines.map((pr) => (
                <p>{pr}</p>
              ))}
            </div>,
          ];
        }
      }
    } else {
      return [
        <div className={s.productBodyBlock}>
          <p>to many lines</p>
        </div>,
      ];
    }
  }
  return (
    <div className={s.productSlide}>
      <h1>{props.title}</h1>
      <div className={s.productWrapper}>
        {props.products.map((product: IProduct) => (
          <div
            className={
              s.product +
              " " +
              (props.products.length > 2 ? s.sizeSmall : s.sizeBig)
            }
          >
            <div className={s.productTop}>
              <h2>{product.title}</h2>
              {product.priceMax === 0 ? (
                <p style={{ marginTop: 0 }}>{product.priceAltText}</p>
              ) : (
                <p style={{ marginTop: 0 }}>
                  {product.priceMin} CHF - <br /> {product.priceMax} CHF
                </p>
              )}
            </div>
            <div className={s.productBody}>{createDesc(product.lines)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
