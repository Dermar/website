import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

import {
  buttonSizeStyle,
  buttonVariantStyle,
} from "./button.css";

export type ButtonVariant = keyof typeof buttonVariantStyle;
export type ButtonSize = keyof typeof buttonSizeStyle;

type CommonProps = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement & HTMLButtonElement>;
  fullWidth?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: never;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = ({
  children,
  className,
  size = "medium",
  variant = "primary",
  ...rest
}: ButtonProps) => {
  const classes = [
    buttonVariantStyle[variant],
    buttonSizeStyle[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (typeof rest.href === "string") {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a {...anchorProps} className={classes}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button {...buttonProps} className={classes} type={buttonProps.type ?? "button"}>
      {children}
    </button>
  );
};