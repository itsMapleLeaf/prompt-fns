import type { QuestionMap } from "inquirer"
import inquirer from "inquirer"
import type { MaybePromise } from "./types"

export type PromptOptions<Value> = {
  message: string
  fallback?: Value
  messagePrefix?: string
  messageSuffix?: string
  validate?: (answer: Value) => MaybePromise<boolean | string>
}

export async function basePrompt<Value, Type extends keyof QuestionMap>(
  type: Type,
  promptOptions: PromptOptions<Value> | string,
  extraOptions?: Partial<QuestionMap[Type]>,
): Promise<Value> {
  if (typeof promptOptions === "string") {
    promptOptions = { message: promptOptions }
  }

  const result = await inquirer.prompt<{ value: Value }>([
    {
      ...extraOptions,
      name: "value",
      type,
      message: promptOptions.message,
      default: promptOptions.fallback,
      validate: promptOptions.validate,
      prefix: promptOptions.messagePrefix,
      suffix: promptOptions.messageSuffix,
    },
  ])
  return result.value
}
