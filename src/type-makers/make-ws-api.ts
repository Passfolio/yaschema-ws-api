import type { AnyCommands } from '../types/AnyCommands';
import type { AnyQuery } from '../types/AnyQuery';
import type { WsApi } from '../types/WsApi';

export const makeWsApi = <RequestCommandsT extends AnyCommands, ResponseCommandsT extends AnyCommands, QueryT extends AnyQuery>(
  api: WsApi<RequestCommandsT, ResponseCommandsT, QueryT>
) => api;
