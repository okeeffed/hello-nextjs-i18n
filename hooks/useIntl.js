import { useIntl as useReactIntl } from "react-intl";

export function useIntl() {
  const { formatMessage } = useReactIntl();
  const f = (id) => formatMessage({ id });

  return { f };
}
