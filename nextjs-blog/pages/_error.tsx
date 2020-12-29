import { NextPageContext } from 'next/types';

export type ErrorProps = {
  statusCode: number;
  title?: string;
};

function Error({ statusCode }: ErrorProps): JSX.Element {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
}

Error.getInitialProps = ({
  res,
  err,
}: NextPageContext): Promise<ErrorProps> | ErrorProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
