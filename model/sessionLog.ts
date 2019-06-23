/**
 * Leap Play
 * Learn more at https://www.leap-play.com
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ChangeRequest } from './changeRequest';


export interface SessionLog { 
    stationId?: string;
    sessionId?: string;
    requestedBy?: SessionLog.RequestedByEnum;
    latestState?: SessionLog.LatestStateEnum;
    startedUtc?: Date;
    reference?: string;
    maxDurationLimit?: string;
    endedUtc?: Date;
    stoppedBy?: SessionLog.StoppedByEnum;
    changeRequests?: Array<ChangeRequest>;
}
export namespace SessionLog {
    export type RequestedByEnum = 'Undefined' | 'ShellClient' | 'WebApi';
    export const RequestedByEnum = {
        Undefined: 'Undefined' as RequestedByEnum,
        ShellClient: 'ShellClient' as RequestedByEnum,
        WebApi: 'WebApi' as RequestedByEnum
    };
    export type LatestStateEnum = 'Requested' | 'Delivered' | 'Started' | 'Ended' | 'Canceled' | 'DeliveryTimeout' | 'ResponseTimeout';
    export const LatestStateEnum = {
        Requested: 'Requested' as LatestStateEnum,
        Delivered: 'Delivered' as LatestStateEnum,
        Started: 'Started' as LatestStateEnum,
        Ended: 'Ended' as LatestStateEnum,
        Canceled: 'Canceled' as LatestStateEnum,
        DeliveryTimeout: 'DeliveryTimeout' as LatestStateEnum,
        ResponseTimeout: 'ResponseTimeout' as LatestStateEnum
    };
    export type StoppedByEnum = 'Unknown' | 'UserLogout' | 'RemoteLogout' | 'Inactivity' | 'StationShutdown' | 'LimitReached' | 'ConnectionLoss' | 'SubscriptionEnded';
    export const StoppedByEnum = {
        Unknown: 'Unknown' as StoppedByEnum,
        UserLogout: 'UserLogout' as StoppedByEnum,
        RemoteLogout: 'RemoteLogout' as StoppedByEnum,
        Inactivity: 'Inactivity' as StoppedByEnum,
        StationShutdown: 'StationShutdown' as StoppedByEnum,
        LimitReached: 'LimitReached' as StoppedByEnum,
        ConnectionLoss: 'ConnectionLoss' as StoppedByEnum,
        SubscriptionEnded: 'SubscriptionEnded' as StoppedByEnum
    };
}