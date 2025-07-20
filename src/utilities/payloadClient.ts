// src/lib/payloadClient.ts (adjust path as needed)
import { getPayload as getPayloadCore } from 'payload'
import type { Payload } from 'payload' // Official Payload type
import configPromise from '@/payload.config' // Ensure this path correctly points to your Payload config promise

// This will hold the initialized Payload instance once it's ready
let cachedPayload: Payload | null = null

// This will hold the promise during the initialization process
// to prevent multiple concurrent initialization attempts.
let payloadInitializationPromise: Promise<Payload> | null = null

// Counter for logging how many times the function is invoked
let getInitializedPayloadCallCount = 0
// Counter for logging how many times actual core initialization is attempted
let coreInitializationAttemptCount = 0

/**
 * Retrieves a cached, initialized Payload instance.
 * Ensures that the core Payload initialization logic (`getPayloadCore`)
 * is executed only once.
 */
export const getInitializedPayload = (): Promise<Payload> => {
  getInitializedPayloadCallCount++
  const currentCall = getInitializedPayloadCallCount // For clearer logging

  if (cachedPayload) {
    console.log(`[PayloadClient Call #${currentCall}] Returning CACHED Payload instance.`)
    return Promise.resolve(cachedPayload)
  }

  if (payloadInitializationPromise) {
    console.log(
      `[PayloadClient Call #${currentCall}] Core initialization already in progress, returning existing PROMISE.`,
    )
    return payloadInitializationPromise
  }

  coreInitializationAttemptCount++
  console.log(
    `[PayloadClient Call #<span class="math-inline">\{currentCall\}\] INITIALIZING NEW Payload instance \(Core Attempt \#</span>{coreInitializationAttemptCount}). Config promise resolving...`,
  )

  payloadInitializationPromise = new Promise(async (resolve, reject) => {
    try {
      console.time(
        `[PayloadClient Core Attempt #${coreInitializationAttemptCount}] Config Resolution`,
      )
      const resolvedConfig = await configPromise // Make sure your payload.config.ts exports a promise
      console.timeEnd(
        `[PayloadClient Core Attempt #${coreInitializationAttemptCount}] Config Resolution`,
      )

      console.time(
        `[PayloadClient Core Attempt #${coreInitializationAttemptCount}] Core Payload Initialization (getPayloadCore)`,
      )
      const initializedPayload = await getPayloadCore({
        config: resolvedConfig,
        // Add any other one-time Payload initialization options here if needed
      })
      console.timeEnd(
        `[PayloadClient Core Attempt #${coreInitializationAttemptCount}] Core Payload Initialization (getPayloadCore)`,
      )

      cachedPayload = initializedPayload
      console.log(
        `[PayloadClient Core Attempt #${coreInitializationAttemptCount}] Payload Core INITIALIZED and cached successfully.`,
      )
      resolve(cachedPayload)
    } catch (error) {
      console.error(
        `[PayloadClient Core Attempt #${coreInitializationAttemptCount}] ERROR during Payload initialization:`,
        error,
      )
      payloadInitializationPromise = null // Reset promise on error to allow a potential retry on subsequent calls
      reject(error)
    }
  })

  return payloadInitializationPromise
}
