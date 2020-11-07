import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

export default function IndexPage(props) {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();

  return (
    <div>
      <h1>{f('hello')}</h1>
    </div>
  );
}
