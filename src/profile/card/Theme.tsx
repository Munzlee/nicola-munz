import React, { useMemo } from "react";

export interface IThemeProps {
  themes: ITheme[];
}

export interface ITheme {
  baseTitle: string;
  id?: number;
  title: string;
  listpoint?: string[];
  text?: string;
}

export function Theme(props: IThemeProps) {
  const hasLongText = useMemo(
    () =>
      props.themes.find((pr) => pr.listpoint?.find((sub) => sub.length > 40))
        ? true
        : false,
    [props.themes]
  );
  return (
    <>
      <h3 style={{ marginTop: 0, marginBottom: 0 }}>
        {props.themes.map((p) => p.baseTitle)[0] ?? ""}
      </h3>
      {props.themes.map((themeItem) => {
        return (
          <div>
            {themeItem.title !== themeItem.baseTitle ? (
              <h4>{themeItem.title}</h4>
            ) : (
              <></>
            )}
            {themeItem.listpoint ? (
              <ul>
                {themeItem.listpoint.map((pr) => (
                  <li style={hasLongText?{borderTop: "solid black 1px"}:undefined}>{pr}</li>
                ))}
              </ul>
            ) : (
              <p>{themeItem.text}</p>
            )}
          </div>
        );
      })}
    </>
  );
}
