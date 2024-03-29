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


export interface RequestStationMode { 
    mode: RequestStationMode.ModeEnum;
}
export namespace RequestStationMode {
    export type ModeEnum = 'Undefined' | 'Local' | 'Remote' | 'RemoteWithQrCode';
    export const ModeEnum = {
        Undefined: 'Undefined' as ModeEnum,
        Local: 'Local' as ModeEnum,
        Remote: 'Remote' as ModeEnum,
        RemoteWithQrCode: 'RemoteWithQrCode' as ModeEnum
    };
}
