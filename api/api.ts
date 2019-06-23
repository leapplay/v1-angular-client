export * from './accounts.service';
import { AccountsService } from './accounts.service';
export * from './auth.service';
import { AuthService } from './auth.service';
export * from './stations.service';
import { StationsService } from './stations.service';
export const APIS = [AccountsService, AuthService, StationsService];
