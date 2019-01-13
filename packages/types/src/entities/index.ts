/**
 * @module types
 */
import * as Immutable from "immutable";

import { ContentsRecordProps } from "./contents";
import { makeContentsRecord } from "./contents";
import { HostsRecordProps } from "./hosts";
import { makeHostsRecord } from "./hosts";
import { KernelsRecordProps } from "./kernels";
import { makeKernelsRecord } from "./kernels";
import { KernelspecsRecordProps } from "./kernelspecs";
import { makeKernelspecsRecord } from "./kernelspecs";
import { ModalsRecordProps } from "./modals";
import { makeModalsRecord } from "./modals";

export * from "./contents";
export * from "./hosts";
export * from "./kernels";
export * from "./kernel-info";
export * from "./kernelspecs";
export * from "./modals";

export interface EntitiesRecordProps {
  contents: Immutable.RecordOf<ContentsRecordProps>;
  hosts: Immutable.RecordOf<HostsRecordProps>;
  kernels: Immutable.RecordOf<KernelsRecordProps>;
  kernelspecs: Immutable.RecordOf<KernelspecsRecordProps>;
  modals: Immutable.RecordOf<ModalsRecordProps>;
}

export type EntitiesRecord = Immutable.RecordOf<EntitiesRecordProps>;

export const makeEntitiesRecord = Immutable.Record<EntitiesRecordProps>({
  contents: makeContentsRecord(),
  hosts: makeHostsRecord(),
  kernels: makeKernelsRecord(),
  kernelspecs: makeKernelspecsRecord(),
  modals: makeModalsRecord()
});
