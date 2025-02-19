import { Cryptosuite, JsonLdDocument, Proof, Result } from "@herculas/vc-data-integrity"

import * as core from "./core.ts"
import * as SUITE_CONSTANT from "../constant/suite.ts"
import { Verification } from "https://jsr.io/@herculas/vc-data-integrity/0.8.5/src/types/api/result.ts"

/**
 * A cryptographic suite for the purpose of creating, verifying, and deriving proofs using the BBS Signature Scheme in
 * conformance with the Data Integrity specification.
 *
 * The BBS Signature Scheme directly provides for selective disclosure and unlinkable proofs. It provides 4 high-level
 * functions that work within the issuer, holder, and verifier model. Specifically, an issuer uses the BBS `sign`
 * function to create a cryptographic value known as a "BBS signature" which is used in signing the original credential.
 * A holder, on receipt of a credential signed with BBS, then verifies the credential with the BBS `verify` function.
 *
 * The holder then chooses information to selectively disclose from the received credential and uses the BBS `ProofGen`
 * function to generate a cryptographic value, known as a "BBS proof", which is used in creating a proof for this
 * "derived credential". The cryptographic "BBS proof" value is not linkable to the original "BBS signature", and a
 * different, unlinkable "BBS proof" can be generated by the holder for additional "derived credentials", including any
 * containing the exact same information. Finally, a verifier uses the BBS `ProofVerify` function to verify the derived
 * credential received from the holder.
 */
export class BBS2023 extends Cryptosuite {
  /**
   * The name of the cryptographic suite.
   *
   * In this suite, this value MUST be `bbs-2023`.
   */
  static override readonly cryptosuite: string = SUITE_CONSTANT.CRYPTOSUITE

  /**
   * @param unsecuredDocument
   * @param options
   */
  static override createProof(unsecuredDocument: JsonLdDocument, options?: object): Promise<Proof> {
    throw new Error("Method not implemented.")
  }

  /**
   * @param securedDocument
   * @param options
   */
  static override deriveProof(securedDocument: JsonLdDocument, options?: object): Promise<Proof> {
    throw new Error("Method not implemented.")
  }

  /**
   * @param securedDocument
   * @param options
   */
  static override verifyProof(securedDocument: JsonLdDocument, options?: object): Promise<Result.Verification> {
    throw new Error("Method not implemented.")
  }
}
