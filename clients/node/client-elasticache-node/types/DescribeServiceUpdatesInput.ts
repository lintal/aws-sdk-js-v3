import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeServiceUpdatesInput shape
 */
export interface DescribeServiceUpdatesInput {
  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The status of the service update</p>
   */
  ServiceUpdateStatus?:
    | Array<"available" | "cancelled" | "expired" | string>
    | Iterable<"available" | "cancelled" | "expired" | string>;

  /**
   * <p>The maximum number of records to include in the response</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}