import React from "react";
import { render } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import * as locales from "content/locale";

const AllTheProviders = ({
  children,
  defaultLocale = "en",
  locale = "en",
  pathname = "/",
}) => {
  const localeCopy = locales[locale];
  const messages = localeCopy[pathname];

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      {children}
    </IntlProvider>
  );
};

const customRender = (ui, { wrapperProps, ...options } = {}) =>
  render(ui, {
    wrapper: (props) => <AllTheProviders {...props} {...wrapperProps} />,
    ...options,
  });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
