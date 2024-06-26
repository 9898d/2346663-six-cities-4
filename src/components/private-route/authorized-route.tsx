import {Navigate} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type AuthorizedRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function AuthorizedRoute(props: AuthorizedRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={AppRoute.Main} />
      : children
  );
}

export default AuthorizedRoute;
