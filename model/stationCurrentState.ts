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
import { Session } from './session';


export interface StationCurrentState { 
    stationId?: string;
    displayName?: string;
    controlMode?: StationCurrentState.ControlModeEnum;
    networkState?: StationCurrentState.NetworkStateEnum;
    session?: Session;
}
export namespace StationCurrentState {
    export type ControlModeEnum = 'Undefined' | 'Local' | 'Remote' | 'RemoteWithQrCode';
    export const ControlModeEnum = {
        Undefined: 'Undefined' as ControlModeEnum,
        Local: 'Local' as ControlModeEnum,
        Remote: 'Remote' as ControlModeEnum,
        RemoteWithQrCode: 'RemoteWithQrCode' as ControlModeEnum
    };
    export type NetworkStateEnum = 'Disconnected' | 'Connecting' | 'Connected';
    export const NetworkStateEnum = {
        Disconnected: 'Disconnected' as NetworkStateEnum,
        Connecting: 'Connecting' as NetworkStateEnum,
        Connected: 'Connected' as NetworkStateEnum
    };
}