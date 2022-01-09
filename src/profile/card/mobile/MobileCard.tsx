import { Icon } from "@fluentui/react";
import React, { useCallback, useMemo, useState } from "react";
import { Links } from "../../../components/Links";
import { ITheme, Theme } from "../Theme";

export interface ICardProps {
  imagePath: string;
  themes: ITheme[];
  //bigger then 700px
  isImgBig?: boolean;
}

const s = require("./mobileCardStyle.module.css");

export default function MobileCard(props: ICardProps) {
  const [tab, setTab] = useState(props.themes[0].title ?? "");
  const preparedThemes = useMemo(() => {
    return props.themes.map<ITheme>(
      ({ baseTitle, title, listpoint, text }, index) => ({
        baseTitle,
        title,
        listpoint,
        text,
        id: index,
      })
    );
  }, [props.themes]);

  const isNotFirst = useMemo(
    () =>
      (preparedThemes.find((pr) => pr.title === tab)?.id ?? 0) !==
      Math.min(...preparedThemes.map((pr) => pr.id ?? 0)),
    [preparedThemes, tab]
  );

  const isNotLast = useMemo(
    () =>
      (preparedThemes.find((pr) => pr.title === tab)?.id ?? 0) !==
      Math.max(...preparedThemes.map((pr) => pr.id ?? 0)),
    [preparedThemes, tab]
  );

  const changeTabForwoard: React.MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      let tabindex = preparedThemes.find((pr) => pr.title === tab)?.id ?? 0;
      if (isNotLast) {
        setTab(
          preparedThemes.find((pr) => pr.id === tabindex + 1)?.title ?? ""
        );
      }
    },
    [isNotLast, preparedThemes, tab]
  );

  const changeTabBack: React.MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      let tabindex = preparedThemes.find((pr) => pr.title === tab)?.id ?? 0;
      if (isNotFirst) {
        setTab(
          preparedThemes.find((pr) => pr.id === tabindex - 1)?.title ?? ""
        );
      }
    },
    [isNotFirst, preparedThemes, tab]
  );

  return (
    <div className={s.card}>
      <img
        src={props.imagePath}
        alt="Nicola Munz"
        style={props.isImgBig ? { width: "100%" } : undefined}
      />
      <div className={s.flipCard}>
        <div className={s.flipCardInner}>
          <div className={s.flipCardFront}>
            <h1>Nicola Munz</h1>
            <p className={s.title}>Software Entwickler</p>
            <Icon className={s.touch} iconName="Touch" />
            <p>Aveniq</p>
          </div>
          <div className={s.flipCardBack}>
            <div className={s.knowlage}>
              {
                <Theme
                  themes={preparedThemes.filter((pr) => pr.title === tab)}
                />
              }
            </div>

            <div
              style={{
                alignSelf: "flex-end",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {isNotFirst ? (
                <div
                  className={s.arrow}
                  style={{ display: "flex" }}
                  onClick={changeTabBack}
                >
                  <Icon iconName={"DoubleChevronLeft12"} />
                  <p>Back</p>
                </div>
              ) : (
                <></>
              )}
              {isNotLast ? (
                <div
                  className={s.arrow}
                  style={{ display: "flex" }}
                  onClick={changeTabForwoard}
                >
                  <p>Next</p>
                  <Icon iconName={"DoubleChevronRight12"} />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={s.contact}>
        <div className={s.contactButton}>
          <a href="mailto:info@nicolamunz.ch">Contact</a>
        </div>
        <Links className={s.links} />
      </div>
    </div>
  );
}
