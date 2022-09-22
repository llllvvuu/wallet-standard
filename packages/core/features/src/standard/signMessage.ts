import type { WalletAccount } from '@wallet-standard/standard';
import type { AsyncMapFunction } from '@wallet-standard/types';

/** TODO: docs */
export type SignMessageVersion = '1.0.0';

/**
 * TODO: docs
 * Instantiation expression -- https://github.com/microsoft/TypeScript/pull/47607
 */
export declare const signMessageMethod: AsyncMapFunction<SignMessageInput, SignMessageOutput>;

/** TODO: docs */
export type SignMessageMethod = typeof signMessageMethod;

/** TODO: docs */
export type SignMessageFeature = {
    /** Namespace for the feature. */
    'standard:signMessage': {
        /** Version of the feature API. */
        version: SignMessageVersion;

        /** Sign messages (arbitrary bytes) using the account's secret key. */
        signMessage: SignMessageMethod;
    };
};

/** Input for signing a message. */
export interface SignMessageInput {
    /** Account to use. */
    account: WalletAccount;

    /** Message to sign, as raw bytes. */
    message: Uint8Array;
}

/** Output of signing a message. */
export interface SignMessageOutput {
    /** TODO: docs */
    signedMessage: Uint8Array;

    /** TODO: docs */
    signature: Uint8Array;
}